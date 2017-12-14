import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import * as user from '../declarations/actions';

import { HttpUserService } from '../http-services';
import { User, Exception } from '../models';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AddUserEffect {

    @Effect() addUserEffect: Observable<Action> = this.actions
        .ofType(user.AddUser)
        .switchMap((action: any) => {
            return this.httpUserService.addUser(action.User)
                .map((users: User[]) => new user.AddUserSuccessAction(users))
                .catch((exception: Exception) => Observable.of(new user.AddUserFailedAction(exception)));
        });

    constructor (
        private actions: Actions,
        private httpUserService: HttpUserService
    ) { }
}
