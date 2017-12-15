import { Component, OnInit } from '@angular/core';
import { User } from './models';
import { Store } from '@ngrx/store';
import * as user from './declarations/actions';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    public users: Observable<User[]>;

    constructor(private store: Store<any>) {
        this.users = store.select('users')
            .map((state) => state.users);
    }

    public ngOnInit() {
        this.store.dispatch(new user.LoadUsersAction());
    }
}
