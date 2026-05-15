import { Directive, Output, EventEmitter, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: '[clickOutside]',
  standalone: true // Use standalone for modern Angular (14+)
})
export class ClickOutsideDirective {
  @Output() clickOutside = new EventEmitter<MouseEvent>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  public onClick(event: MouseEvent) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.clickOutside.emit(event);
    }
  }
}
