import { Component, Input, OnInit } from '@angular/core';
import { HttpUserService } from '../../http-services';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models';
import { Store } from '@ngrx/store';
import * as user from '../../declarations/actions';

@Component({
    selector: 'add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
    public firstName = '';
    public lastName = '';

    constructor(private store: Store<any>) {}

    public addUser(event) {
        const newUser: User = {
        	id: null,
            firstName: this.firstName,
            lastName: this.lastName
        };

    	this.store.dispatch(new user.AddUserAction(newUser));
    }
}
