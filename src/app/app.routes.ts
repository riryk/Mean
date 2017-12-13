import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    UserWrapComponent
} from './components';

export const routes: Routes = [
    { path: 'user', component: UserWrapComponent },
    { path: '**', redirectTo: '/user' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
