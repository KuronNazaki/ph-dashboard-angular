import { Component, inject, Signal, signal } from '@angular/core'
import { TodoService } from '@ph/features/todo/todo-service'
import { toSignal } from '@angular/core/rxjs-interop'
import { of, tap } from 'rxjs'
import { ZardLoader } from '@ph/ui/loader'
import { TodoItem } from '@ph/features/todo/todo/todo-item'
import { Todo } from '@ph/features/todo/todo-model'

@Component({
  selector: 'ph-todo-list',
  imports: [ZardLoader, TodoItem],
  templateUrl: './todo-list.html',
})
export class TodoList {
  #todoService = inject(TodoService)

  isFetching = signal<boolean>(true)
  todos = toSignal(this.#todoService.getAll().pipe(tap(() => this.isFetching.set(false))), {
    initialValue: [],
  })
}
