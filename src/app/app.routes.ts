import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    UserWrapComponent,
    BuilderProfileWrapComponent
} from './components';

import { MalihuScrollbarDemoComponent } from './scrollbar-demo/malihu-scrollbar-demo.component';

export const routes: Routes = [
    { path: 'user', component: UserWrapComponent },
    { path: 'builder', component: BuilderProfileWrapComponent },
    { path: 'scrollbar', component: MalihuScrollbarDemoComponent },
    { path: '**', redirectTo: '/builder' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
