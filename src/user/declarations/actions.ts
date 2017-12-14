import { Action } from '@ngrx/store';
import { User, Exception } from '../models';

export const LoadUsers = 'Users load';
export const LoadUsersSuccess = 'Users load success';
export const LoadUsersFailed = 'Users load failed';

export const AddUser = 'Users load';
export const AddUserSuccess = 'Users load success';
export const AddUserFailed = 'Users load failed';

export class LoadUsersAction implements Action {
    readonly type = LoadUsers;
    constructor() {}
}

export class LoadUsersSuccessAction implements Action {
    readonly type = LoadUsersSuccess;
    constructor(public users: User[]) {}
}

export class LoadUsersFailedAction implements Action {
    readonly type = LoadUsersFailed;
    constructor(public exception: Exception) {}
}

export class AddUserAction implements Action {
    readonly type = AddUser;
    constructor(public user: User) {}
}

export class AddUserSuccessAction implements Action {
    readonly type = AddUserSuccess;
    constructor(public users: User[]) {}
}

export class AddUserFailedAction implements Action {
    readonly type = AddUserFailed;
    constructor(public exception: Exception) {}
}

export type Actions
    = LoadUsersAction
    | LoadUsersSuccessAction
    | LoadUsersFailedAction
    | AddUserAction
    | AddUserSuccessAction
    | AddUserFailedAction
