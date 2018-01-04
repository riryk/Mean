import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    selector: 'builder-profile',
    templateUrl: './builder-profile.component.html',
    styleUrls: ['./builder-profile.component.scss']
})
export class BuilderProfileComponent {
    private isSummaryEditable: boolean;
    private summary: string;
    private trades: Array<any>;

    constructor(private store: Store<any>) {
    	this.isSummaryEditable = false;
        this.trades = [
            { name: 'Bricklayer' },
            { name: 'Damp Proofing Specialist' },
            { name: 'Groundworker' },
            { name: 'Stonemason' },
            { name: 'Demolition Contractor' }];
    }

    editSummary(event: any) {
    	this.isSummaryEditable = true;  
    }

    viewSummary(event: any) {
        this.isSummaryEditable = false;  
    }
}
