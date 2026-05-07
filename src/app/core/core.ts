import { provideRouter, Routes, TitleStrategy } from '@angular/router'
import { provideBrowserGlobalErrorListeners } from '@angular/core'
import { provideZard } from './provider/provide-zard'
import { PageTitleStrategy } from '@ph/core/configs/page-title-strategy'

export interface CoreOptions {
  routes: Routes
}

export const provideCore = ({ routes }: CoreOptions) => [
  provideBrowserGlobalErrorListeners(),
  provideRouter(routes),
  provideZard(),
  { provide: TitleStrategy, useClass: PageTitleStrategy },
]
