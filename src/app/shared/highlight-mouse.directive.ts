import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver() {
    /*
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color', 'yellow'
    );*/
    this.backgroundColor = 'yellow';
  }
  @HostListener('mouseleave') onMouseLeave() {
    /*
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color', 'white'
    );*/
    this.backgroundColor = 'white';
  }

  /**
   * Caso não precise de manipulação
   */
  // tslint:disable-next-line:member-ordering
  // @HostBinding('style.backgroundColor') backgroundColor: String;

  /**
   * Caso precise de manipulação
   */
  // tslint:disable-next-line:member-ordering
  private backgroundColor: String;
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2
  ) { }

}
