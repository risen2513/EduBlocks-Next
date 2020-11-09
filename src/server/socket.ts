import { Packet } from './protocol';

interface Events {
  data: (packet: Packet) => void;
  reconnect: () => void;
}

interface Socket {
  sendPacket(packet: Packet): void;

  on<K extends keyof Events>(eventType: K, handler: Events[K]): void;
}

const stub = () => void 0;

/**
 * Lightweight websocket abstraction
 * @param url URL of the terminal handler
 */
export function initSocket(url: string) {
  return new Promise<Socket>((resolve) => {
    const eventHandlers: Events = {
      data: stub,
      reconnect: stub,
    };

    let resolved = false;

    console.log('Opening Websocket', url);

    let ws: WebSocket | null;

    connect();


    function connect() {
      ws = new WebSocket(url);

      ws.onmessage = onMessage;
      ws.onopen = onOpen;
      ws.onclose = onClose;
      ws.onerror = onError;
    }

    function onMessage(evt: MessageEvent) {
      if (typeof evt.data === 'string') {
        const packet: Packet = JSON.parse(evt.data);

        eventHandlers.data(packet);
      } else {
        throw new Error('Unexpected data type');
      }
    }

    function onOpen() {
      if (!resolved) {
        resolve({
          sendPacket,
          on,
        });

        resolved = true;
      } else {
        eventHandlers.reconnect();
      }
    }
    

    function onClose() {
      ws = null;

      console.info('CLOSED');

      attemptReconnect();
    }

    function onError(evt: Event) {
      console.error('socket', evt);
    }

    function attemptReconnect() {
      setTimeout(() => {
        console.info('RECONNECT');
        connect();
      }, 1000);
    }

    function sendPacket(packet: Packet) {
      if (!ws) {
        console.log('sendPacket: Socket not available');
        return;
      }

      ws.send(JSON.stringify(packet));
    }

    function on<K extends keyof Events>(eventType: K, handler: Events[K]) {
      eventHandlers[eventType] = handler;
    }
  });
}
