import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpUserService } from './http-services/http-user-service';
import { UserComponent } from './user.component';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule
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
