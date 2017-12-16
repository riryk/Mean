import { Component, Input, OnInit } from '@angular/core';
import { HttpUserService } from '../../http-services';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models';

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
    @Input() public users: User[];

    constructor() {}
}
