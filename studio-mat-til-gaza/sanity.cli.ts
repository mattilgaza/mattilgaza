import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'zbioajqc',
    dataset: 'production'
  },
  deployment: {
    appId: 'kp27uanhouw4luq746w3ciu2',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
  }
})
