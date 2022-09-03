import { App } from 'vue'
import { formatUtcString } from '@/utils/data-format'
export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    foomatTime(vlaue: string) {
      return formatUtcString(vlaue)
    }
  }
}
