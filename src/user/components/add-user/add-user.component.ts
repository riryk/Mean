import { Component, Input, OnInit } from '@angular/core';
import { HttpUserService } from '../../http-services';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models';

@Component({
    selector: 'add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
    private firstName: string;
    private lastName: string;

    constructor() {}

    public addUser(event) {
    	console.log(event);
    }
}
