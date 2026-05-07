import { ApplicationConfig } from '@angular/core'

import { routes } from './app.routes'
import { provideCore } from '@ph/core/core'

export const appConfig: ApplicationConfig = {
  providers: [provideCore({ routes })],
}
