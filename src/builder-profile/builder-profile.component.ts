import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { ScrollbarService } from '../shared/directives/scrollbar';

@Component({
    selector: 'builder-profile',
    templateUrl: './builder-profile.component.html',
    styleUrls: ['./builder-profile.component.scss']
})
export class BuilderProfileComponent {
    private summary: string;
    private isSummaryEditable: boolean;

    private trades: Array<any>;
    private availableTrades: Array<any>;
    private areTradesEditable: boolean;

    private scrollbarOptions: any;

    constructor(
        private store: Store<any>, 
        private scrollbarService: ScrollbarService) {

    	this.isSummaryEditable = false;

        this.availableTrades = [
            { name: 'Bricklayer' },
            { name: 'Groundworker' },
            { name: 'Driveway Paver' },
            { name: 'Extension Builder' },
            { name: 'Fencer' },
            { name: 'Damp Proofing Specialist' },
            { name: 'Groundworker' },
            { name: 'Stonemason' },
            { name: 'Landscape Gardener' },
            { name: 'Demolition Contractor' }];

        this.trades = ['Bricklayer', 'Groundworker', 'Fencer', 'Stonemason'];
        this.areTradesEditable = false;

        this.scrollbarOptions = {
            axis: 'y', 
            theme: 'metro', 
            scrollButtons: { 
                enable: true 
            }
        };
    }
    
    ngOnInit() {
    }

    editSummary(event: any) {
    	this.isSummaryEditable = true;  
    }

    viewSummary(event: any) {
        this.isSummaryEditable = false;  
    }

    editTrades() {
        this.areTradesEditable = true;  
    }

    viewTrades() {
        this.areTradesEditable = false;  
    }
}
