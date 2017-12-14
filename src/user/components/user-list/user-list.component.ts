import { Component, OnInit } from '@angular/core';
import { HttpUserService } from '../../http-services';
import { User } from '../../models';

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
    users: Array<User>;

    constructor(private httpUserService: HttpUserService) {}

    public ngOnInit() {
    	this.httpUserService.getUsers()
            .subscribe(users => this.users = users);
    }
}
