import { provideRouter, Routes } from '@angular/router'
import { provideBrowserGlobalErrorListeners } from '@angular/core'
import { provideZard } from './provider/provide-zard'

export interface CoreOptions {
  routes: Routes
}

export const provideCore = ({ routes }: CoreOptions) => [
  provideBrowserGlobalErrorListeners(),
  provideRouter(routes),
  provideZard(),
]
