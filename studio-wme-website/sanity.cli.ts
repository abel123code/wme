import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '8jt0lsz6',
    dataset: 'production'
  },
  deployment: {
    appId: 'jbgya0peo2p4fmqgwfnqjkhq',
    autoUpdates: true,
  }
})
