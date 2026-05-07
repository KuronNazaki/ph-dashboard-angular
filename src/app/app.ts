import { Component, signal } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'ph-root',
  template: `
    <main class="relative w-full h-screen flex flex-col justify-center items-center gap-5">
      <h2 class="text-2xl font-semibold">Percival Huynh's Dashboard</h2>
      <router-outlet />
    </main>
  `,
  imports: [RouterOutlet],
})
export class App {}
