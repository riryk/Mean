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
export class LoadUsersEffect {

    @Effect() loadUsersEffect: Observable<Action> = this.actions
        .ofType(user.LoadUsers)
        .switchMap(() => {
            return this.httpUserService.getUsers()
                .map((users: User[]) => new user.LoadUsersSuccessAction(users))
                .catch((exception: Exception) => Observable.of(new user.LoadUsersFailedAction(exception)));
        });

    constructor (
        private actions: Actions,
        private httpUserService: HttpUserService
    ) { }
}
