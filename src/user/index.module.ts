import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { userReducer } from './reducers';
import userEffects from './effects';

import { HttpUserService } from './http-services';
import { UserComponent } from './user.component';
import { AddUserComponent, UserListComponent } from './components';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forFeature('users', userReducer),
        EffectsModule.forFeature(userEffects)
    ],
    declarations: [
        UserComponent,
        AddUserComponent,
        UserListComponent
    ],
    exports: [
        UserComponent,
        AddUserComponent,
        UserListComponent
    ],
    providers: [
        HttpUserService 
    ]
})
export class UserModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: UserModule };
    }
}
