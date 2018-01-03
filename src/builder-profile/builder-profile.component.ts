import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    selector: 'builder-profile',
    templateUrl: './builder-profile.component.html',
    styleUrls: ['./builder-profile.component.scss']
})
export class BuilderProfileComponent {
	@ViewChild('summaryEditable') summaryElement: ElementRef;

    private isEditable: boolean;
    private summary: string;

    constructor(private store: Store<any>) {
    	this.isEditable = false;
    }

    toEditMode(event: any) {
    	this.isEditable = true;  
    }

    toViewMode(event: any) {
        this.isEditable = false;  
    }

    onSummaryTextChanged(event: any) {
        this.adjustSummaryHeight();
    }

    adjustSummaryHeight() {
        if (!this.summaryElement) {
            return;
        }

        let summaryNativeElement = this.summaryElement.nativeElement;
        summaryNativeElement.style.height = 'auto';
        summaryNativeElement.style.height = summaryNativeElement.scrollHeight + "px";
    }
}
