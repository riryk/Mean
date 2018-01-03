import {
    Directive,
    ElementRef,
    Optional,
    OnInit,
    OnDestroy,
    AfterViewInit
} from '@angular/core';
import { NgModel } from '@angular/forms';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Directive({
    selector: '[auto-resize]'
})
export class AutoResizeDirective implements OnInit, OnDestroy, AfterViewInit {
    private modelSubscription: Subscription;

    constructor(
        private element: ElementRef,
        @Optional() private model: NgModel
    ) {
    }
    
    ngOnInit() {
        if(!this.model) {
            return;
        }

        this.modelSubscription = this.model
            .valueChanges
            .debounceTime(100)
            .subscribe(() => this.adjustTextAreaSize());
    }

    ngOnDestroy() {
        if (this.modelSubscription) {
            this.modelSubscription.unsubscribe();
        }
    }

    ngAfterViewInit() {
        if (this.isTextarea(this.element.nativeElement)) {
            this.adjustTextAreaSize();
        }
    }
    
    private adjustTextAreaSize() {
        if (!this.element) {
            return;
        }

        let nativeElement = this.element.nativeElement;
        nativeElement.style.height = 'auto';
        nativeElement.style.height = nativeElement.scrollHeight + "px";
    }

    private isTextarea(element: HTMLElement) {
        return element.tagName === 'TEXTAREA';
    }
}
