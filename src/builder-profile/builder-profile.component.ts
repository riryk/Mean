import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    selector: 'builder-profile',
    templateUrl: './builder-profile.component.html',
    styleUrls: ['./builder-profile.component.scss']
})
export class BuilderProfileComponent implements OnInit {
	@ViewChild('summaryEditable') summaryElement: ElementRef;

    private isEditable: boolean;
    private summary: string;

    constructor(private store: Store<any>) {
    	this.isEditable = false;
    	this.summary = "I am a Master craftsmen, with over 40 years experiance within the construction industry. The past twenty years i have worked in partnership with my brother and built up an excellent reputation for all works completed. My portfolio on mybuilder has been live since 2009 where the predominant work flow has focused on household works opposed to commerical. With over 200 jobs undertaken for a variety of projects as well sound advice i believe my customer feedback speaks for itself.";
    }

    public ngOnInit() {
    }

    toEditMode() {
    	this.isEditable = true;  
    }

    toViewMode(event: any) {
        this.isEditable = false;  
    }

    //https://github.com/chrum/angular2-autosize/blob/master/src/autosize.directive.ts
}
