import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { UserService } from './data/user.service';
import { UserModule } from '../';

import { UserWrapComponent } from './components';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        UserModule
    ],
    declarations: [
        AppComponent,
        UserWrapComponent
    ],
    providers: [UserService],
    bootstrap: [AppComponent]
})
export class AppModule { }
