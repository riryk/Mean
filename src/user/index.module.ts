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
import { UserListComponent } from './components';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forFeature('user', userReducer),
        EffectsModule.forFeature(userEffects)
    ],
    declarations: [
        UserComponent,
    ],
    exports: [
        UserComponent
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
