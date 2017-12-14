import * as user from '../declarations/actions';
import { UserState } from '../declarations/state';
import { Reducer } from '../declarations/reducer';

export const userInitialState : UserState = {
    users: [],
    isLoading: false,
    error: ''
};

export const userReducer : Reducer<UserState> = (state: UserState = userInitialState, action: user.Actions) => {

    switch (action.type) {
        case user.LoadUsers:
            return Object.assign({}, state, {
                isLoading: true
            });
        
        case user.LoadUsersSuccess:
            return Object.assign({}, state, {
                users: action.users,
                isLoading: false
            });

        case user.AddUserFailed:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.exception.message
            });    

        case user.AddUser:
            return Object.assign({}, state, {
                isLoading: true
            });
        
        case user.AddUserSuccess:
            return Object.assign({}, state, {
                users: action.users,
                isLoading: false
            });

        case user.AddUserFailed:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.exception.message
            });    

        default:
            return state;       
    } 
}