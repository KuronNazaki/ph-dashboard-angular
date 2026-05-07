import { bootstrapApplication } from '@angular/platform-browser'
import { appConfig } from '@ph/app.config'
import { App } from '@ph/app'

bootstrapApplication(App, appConfig).catch((err) => console.error(err))
