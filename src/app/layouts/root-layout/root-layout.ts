import { Component, signal } from '@angular/core'
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'
import { ZardButton } from '@ph/ui/button'

interface Navigation {
  path: string
  label: string
}

@Component({
  selector: 'ph-root-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ZardButton],
  templateUrl: './root-layout.html',
})
export class RootLayout {
  protected navigations = signal<Navigation[]>([
    { path: 'dashboard', label: 'Dashboard' },
    { path: 'todo', label: 'Todo' },
  ])
}
