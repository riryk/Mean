import { Reducer } from './reducer';
import { User } from '../models';

export interface UserState {
    users: User[];
    isLoading: boolean;
    error: string;
}
