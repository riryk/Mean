import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  Injectable,
  Inject,
  PLATFORM_ID
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

@Injectable()
@Directive({ selector: '[clickOutside]' })
export class ClickOutsideDirective implements OnInit, OnChanges, OnDestroy {

  @Input() attachOutsideOnClick: boolean = false;
  @Input() exclude: string = '';
  @Input() delayClickOutsideInit: boolean = false; 
  @Input() excludeBeforeClick: boolean = false;
  @Input() clickOutsideEvents: string = '';

  @Output() clickOutside: EventEmitter<Event> = new EventEmitter<Event>();

  private events: Array<string> = ['click'];
  private nodesExcluded: Array<HTMLElement> = [];

  constructor(private element: ElementRef,
              @Inject(PLATFORM_ID) protected platformId: Object) {
    debugger;
    this.initOnClickBody = this.initOnClickBody.bind(this);
    this.onClickBody = this.onClickBody.bind(this);
  }
   
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.init();
    }
  }

  ngOnDestroy() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (this.attachOutsideOnClick) {
      this.events.forEach(e => this.element.nativeElement.removeEventListener(e, this.initOnClickBody));
    }

    this.events.forEach(e => document.body.removeEventListener(e, this.onClickBody));
  }
  
  ngOnChanges(changes: SimpleChanges) {
    if (isPlatformBrowser(this.platformId)) {
      if (changes['attachOutsideOnClick'] || changes['exclude']) {
        this.init();
      }
    }
  }

  private init() {
    if (this.clickOutsideEvents !== '') {
      this.events = this.clickOutsideEvents.split(' ');
    }

    this.excludeCheck();

    if (this.attachOutsideOnClick) {
      this.events.forEach(e => this.element.nativeElement.addEventListener(e, this.initOnClickBody));
    } else {
      this.initOnClickBody();
    }
  }

  private initOnClickBody() {
    if (this.delayClickOutsideInit) {
      setTimeout(this.initClickListeners.bind(this));
    } else {
      this.initClickListeners();
    }
  }

  private initClickListeners() {
    this.events.forEach(e => document.body.addEventListener(e, this.onClickBody));
  }

  private onClickBody(event: Event) {
    if (this.excludeBeforeClick) {
      this.excludeCheck();
    }

    if (!this.element.nativeElement.contains(event.target) && !this.shouldExclude(event.target)) {
      this.clickOutside.emit(event);

      if (this.attachOutsideOnClick) {
        this.events.forEach(e => document.body.removeEventListener(e, this.onClickBody));
      }
    }
  }

  private excludeCheck() {
    if (!this.exclude) {
      return;
    }

    try {
      const nodes = Array.from(document.querySelectorAll(this.exclude)) as Array<HTMLElement>;
      if (nodes) {
        this.nodesExcluded = nodes;
      }
    } catch (error) {
      console.error('[ng-click-outside] Check your exclude selector syntax.', error);
    }
  }

  private shouldExclude(target): boolean {
    for (let excludedNode of this.nodesExcluded) {
      if (excludedNode.contains(target)) {
        return true;
      }
    }

    return false;
  }
}