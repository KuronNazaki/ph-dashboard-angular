import { inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Todo } from '@ph/features/todo/todo-model'

const API_ENDPOINT = '/todos'

@Injectable()
export class TodoService {
  #client = inject(HttpClient)

  getAll() {
    return this.#client.get<Todo[]>(API_ENDPOINT)
  }
}
