import { provideRouter, Routes, TitleStrategy } from '@angular/router'
import { provideBrowserGlobalErrorListeners } from '@angular/core'
import { provideZard } from './providers/provide-zard'
import { PageTitleStrategy } from '@ph/core/configs/page-title-strategy'
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http'
import { apiInterceptor } from '@ph/core/interceptors/api-interceptor'

export interface CoreOptions {
  routes: Routes
}

export const provideCore = ({ routes }: CoreOptions) => [
  provideBrowserGlobalErrorListeners(),
  provideHttpClient(withFetch(), withInterceptors([apiInterceptor])),
  provideRouter(routes),
  provideZard(),
  { provide: TitleStrategy, useClass: PageTitleStrategy },
]
