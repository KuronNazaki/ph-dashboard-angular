import { Component } from '@angular/core'
import { ZardButton } from '@ph/ui/button'

@Component({
  selector: 'ph-dashboard',
  imports: [ZardButton],
  templateUrl: './dashboard.html',
})
export class Dashboard {
  protected onClick() {
    alert('This is clicked!')
  }
}
