import { App } from 'vue'
import registerElement from './register-element'
import regosterProperties from './regoster-properties'
export function globalRegister(app: App): void {
  app.use(registerElement)
  app.use(regosterProperties)
}
