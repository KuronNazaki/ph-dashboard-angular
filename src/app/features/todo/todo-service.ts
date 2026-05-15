import { inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Todo } from '@ph/features/todo/todo-model'
import { Observable } from 'rxjs'

const API_ENDPOINT = '/todos'

@Injectable()
export class TodoService {
  #client = inject(HttpClient)

  getAll(): Observable<Todo[]> {
    return this.#client.get<Todo[]>(API_ENDPOINT)
  }

  update(todo: Todo): Observable<void> {
    return this.#client.put<void>(`${API_ENDPOINT}/${todo.id}`, todo)
  }
}
