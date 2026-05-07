import { Component, signal } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { RootLayout } from '@ph/layouts/root-layout/root-layout'

@Component({
  selector: 'ph-root',
  template: `
    <ph-root-layout />
  `,
  imports: [RootLayout],
})
export class App {}
