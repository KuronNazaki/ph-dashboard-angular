import {
  afterEveryRender,
  afterNextRender,
  Component,
  computed,
  inject,
  input,
  linkedSignal,
  signal,
} from '@angular/core'
import { Todo } from '@ph/features/todo/todo-model'
import { ZardCheckbox } from '@ph/ui/checkbox'
import { FormsModule } from '@angular/forms'
import { ZardButton } from '@ph/ui/button'
import { LucidePencil } from '@lucide/angular'
import { form, FormField } from '@angular/forms/signals'
import { ClickOutsideDirective } from '@ph/core/directives/click-outside'
import { TodoService } from '../todo-service'

@Component({
  selector: 'ph-todo-item',
  imports: [ZardCheckbox, FormsModule, ZardButton, LucidePencil, FormField, ClickOutsideDirective],
  templateUrl: './todo-item.html',
})
export class TodoItem {
  todo = input.required<Todo>()

  #todoService = inject(TodoService)

  #todo = linkedSignal(() => ({
    title: this.todo().title,
    isCompleted: this.todo().isCompleted,
  }))
  titleStyle = computed(() =>
    this.#todo().isCompleted ? 'line-through text-muted-foreground ml-2' : 'ml-2',
  )
  isEditMode = signal<boolean>(false)

  todoItemForm = form(this.#todo)

  #focusTitleWhenEditModeToggled = afterEveryRender(() =>
    this.isEditMode() && this.todoItemForm.title().focusBoundControl(),
  )

  protected onToggleEditMode(event: MouseEvent) {
    event.stopPropagation()
    this.isEditMode.set(!this.isEditMode())
  }

  protected onToggleCompletion() {
    this.todoItemForm.isCompleted().value.set(!this.todoItemForm.isCompleted().value())
    this.#todoService
      .update({
        id: this.todo().id,
        title: this.todoItemForm.title().value(),
        isCompleted: this.todoItemForm.isCompleted().value(),
      })
      .subscribe(() => this.isEditMode.set(!this.isEditMode()))
  }

  protected onUpdate(event: Event) {
    event.stopPropagation()

    this.#todoService
      .update({
        id: this.todo().id,
        title: this.todoItemForm.title().value(),
        isCompleted: this.todoItemForm.isCompleted().value(),
      })
      .subscribe(() => this.isEditMode.set(!this.isEditMode()))
  }
}
