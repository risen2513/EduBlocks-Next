import type { UserConfig } from 'vite/dist/node/config'

export default {
  optimizeDeps: {
    exclude: ['file-saver']
  }
} as UserConfig