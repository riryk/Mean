import { Component, ViewChild, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    selector: 'builder-profile',
    templateUrl: './builder-profile.component.html',
    styleUrls: ['./builder-profile.component.scss']
})
export class BuilderProfileComponent implements OnInit {
    constructor(private store: Store<any>) {
    }

    public ngOnInit() {
    }
}
