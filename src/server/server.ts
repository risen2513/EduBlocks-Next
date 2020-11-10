import { Packet } from './protocol';
import { initSocket } from './socket';

interface Events {
  open: () => void;
  data: (data: string) => void;
  reconnect: () => void;
}

export interface ServerConnection {
  runCode(python: string): void;
  sendData(data: string): void;
  resizeTerminal(cols: number, rows: number): void;

  on<K extends keyof Events>(eventType: K, handler: Events[K]): void;
}

const stub = () => void 0;

export async function newServerConnection(): Promise<ServerConnection> {
  const eventHandlers: Events = {
    open: stub,
    data: stub,
    reconnect: stub,
  };

  const url = `ws://localhost:8081/terminal`;

  const ws = await initSocket(url);

  ws.on('data', (packet: Packet) => {
    switch (packet.packetType) {
      case 'data':
        eventHandlers.data(packet.payload);
        break;
    }
  });
  

  ws.on('reconnect', () => eventHandlers.reconnect());

  function runCode(python: string) {
    const url = `http://localhost:8081/runcode`;

    console.time('runCode');

    const xhr = new XMLHttpRequest();

    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send('code=' + encodeURIComponent(python));

    xhr.onload = (e) => {
      console.timeEnd('runCode');
    };
  }

  function sendData(data: string) {
    ws.sendPacket({ 
      packetType: 'data',
      payload: data,
    });
  }

  function resizeTerminal(cols: number, rows: number) {
    ws.sendPacket({
      packetType: 'resize',
      payload: { cols, rows },
    });
  }

  function on<K extends keyof Events>(eventType: K, handler: Events[K]) {
    eventHandlers[eventType] = handler;
  }

  return {
    runCode,
    sendData,
    resizeTerminal,
    on,
  };
}
