import { Routes } from '@angular/router'

export default <Routes>[
  {
    path: '',
    providers: [],
    children: [
      {
        path: '',
        loadComponent: () => import('./todo-list/todo-list').then((m) => m.TodoList),
      },
    ],
  },
]
