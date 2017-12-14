import { Component, OnInit } from '@angular/core';
import { HttpUserService } from './http-services';
import { User } from './models';

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    users: Array<any>;
    newUser: User;

    constructor(private userService: HttpUserService) {}

    public ngOnInit() {
    	this.userService.getUsers()
            .subscribe(users => this.users = users);
    }
}
