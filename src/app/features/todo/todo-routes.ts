import { Routes } from '@angular/router'
import { TodoService } from '@ph/features/todo/todo-service'

export default <Routes>[
  {
    path: '',
    providers: [TodoService],
    children: [
      {
        path: '',
        loadComponent: () => import('./todo-list/todo-list').then((m) => m.TodoList),
        title: 'Todo',
      },
    ],
  },
]
