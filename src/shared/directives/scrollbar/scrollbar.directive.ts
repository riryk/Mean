import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';
import { ScrollbarService } from './scrollbar.service';

@Directive({
  selector: '[scrollbar]',
})
export class ScrollbarDirective implements AfterViewInit, OnDestroy {
  @Input() scrollElementId: string;
  @Input() scrollbarOptions: MCustomScrollbar.CustomScrollbarOptions;

  scrollableElement: JQuery;

  constructor(
    private elementRef: ElementRef,
    private scrollbarService: ScrollbarService,
  ) { }

  ngAfterViewInit() {
    this.initElements();
    this.initScrollbar();
  }

  ngOnDestroy() {
    this.destroyScrollbar();
  }

  initElements() {
    this.scrollableElement = !!this.scrollElementId
      ? $(`#${this.scrollElementId}`)
      : $(this.elementRef.nativeElement);

    if (!!this.scrollElementId && this.scrollableElement.length === 0) {
      console.error(`ScrollbarDirective cannot find element with provided scrollElementId: ${this.scrollElementId}.`);
    }
  }

  initScrollbar() {
    this.scrollbarService.initScrollbar(this.scrollableElement, this.scrollbarOptions);
  }

  destroyScrollbar() {
    try {
      this.scrollbarService.destroy(this.scrollableElement);
    } catch (error) {
    }
  }
}
