import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard-routes'),
  },
  {
    path: 'todo',
    loadChildren: () => import('./features/todo/todo-routes'),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
]
