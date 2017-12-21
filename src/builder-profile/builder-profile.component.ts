import { Component, ViewChild, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    selector: 'builder-profile',
    templateUrl: './builder-profile.component.html',
    styleUrls: ['./builder-profile.component.scss']
})
export class BuilderProfileComponent implements OnInit {
    private isInEditMode: boolean;

    constructor(private store: Store<any>) {
    }

    public ngOnInit() {
    }
    
    builderProfileOnFocus(event: any) {
    	console.log("EditMode");
        this.isInEditMode = true;  
    }

    builderProfileOnFocusout(event: any) {
    	console.log("ViewMode");
        this.isInEditMode = false;       
    }
}
