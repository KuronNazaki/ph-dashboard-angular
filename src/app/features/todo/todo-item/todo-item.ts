import { Component, computed, input, linkedSignal, signal } from '@angular/core'
import { Todo } from '@ph/features/todo/todo-model'
import { ZardCheckbox } from '@ph/ui/checkbox'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'ph-todo-item',
  imports: [ZardCheckbox, FormsModule],
  templateUrl: './todo-item.html',
})
export class TodoItem {
  todo = input.required<Todo>()

  completed = linkedSignal(() => this.todo().completed)
  textStyle = computed(() => (this.completed() ? 'line-through text-muted-foreground' : ''))

  protected toggle() {
    this.completed.set(!this.completed())
  }
}
