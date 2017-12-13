import { Component } from '@angular/core';
import { UserService } from './data/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
	users: Array<any>;

    constructor(private userService: UserService) {	
        this.userService.getUsers()
            .subscribe(result => this.users = result);
    }
}
