import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { ScrollbarService } from '../shared/directives/scrollbar';

interface ITheme {
    name: string;
    class: string;
    options: MCustomScrollbar.CustomScrollbarOptions;
}

@Component({
    selector: 'builder-profile',
    templateUrl: './builder-profile.component.html',
    styleUrls: ['./builder-profile.component.scss']
})
export class BuilderProfileComponent {
    private isSummaryEditable: boolean;
    private summary: string;
    private trades: Array<any>;
    
    loremIpsum = require('raw-loader!./input.txt');
    theme: ITheme = {
        name: '"light" (default)',
        class: 'dark',
        options: { axis: 'y', theme: 'light', scrollButtons: { enable: true } }
    };

    constructor(
        private store: Store<any>, 
        private scrollbarService: ScrollbarService) {
    	this.isSummaryEditable = false;
        this.trades = [
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
    }
    
    ngOnInit() {
        this.scrollbarService.initScrollbar(document.body, { axis: 'y', theme: 'metro' });
    }

    editSummary(event: any) {
    	this.isSummaryEditable = true;  
    }

    viewSummary(event: any) {
        this.isSummaryEditable = false;  
    }
}
