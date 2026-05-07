import { provideRouter, Routes } from '@angular/router'
import { provideBrowserGlobalErrorListeners } from '@angular/core'
import { provideZard } from '@ph/core/provider/providezard'

export interface CoreOptions {
  routes: Routes
}

export const provideCore = ({ routes }: CoreOptions) => [
  provideBrowserGlobalErrorListeners(),
  provideRouter(routes),
  provideZard(),
]
