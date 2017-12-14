import * as user from './actions';

export interface Reducer<T> {
    (state: T, action: user.Actions): T;
}
