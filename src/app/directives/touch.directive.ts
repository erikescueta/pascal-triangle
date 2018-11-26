import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appTouch]'
})
export class TouchDirective {

  @Output() singleTap = new EventEmitter();
  @Output() doubleTap = new EventEmitter();
  @Output() tripleTap = new EventEmitter();

  constructor() { }

  @HostListener('tap',  ['$event'])
  onTap(e) {
    if (e.tapCount === 1) {
      this.singleTap.emit(e);
    }

    if (e.tapCount === 2) {
      this.doubleTap.emit(e);
    }

    if (e.tapCount === 3) {
      this.tripleTap.emit(e);
    }
  }
}
