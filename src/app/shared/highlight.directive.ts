import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  // tslint:disable-next-line:member-ordering
  @HostBinding('style.backgroundColor') backgroundColor: String;

  // tslint:disable-next-line:member-ordering
  @Input() defaultColor: String = 'white';
  @Input('highlight') highlightColor: String = 'yellow';

  constructor() { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }
}
