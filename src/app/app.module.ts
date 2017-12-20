import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { routing } from './app.routes';

import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { 
    UserModule,
    BuilderProfileModule
} from '../';

import { 
    UserWrapComponent,
    BuilderProfileWrapComponent
} from './components';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        UserModule,
        BuilderProfileModule,
        routing,
        StoreModule.forRoot({
            routerReducer: () => {
            }
        }),
        EffectsModule.forRoot([])
    ],
    declarations: [
        AppComponent,
        UserWrapComponent,
        BuilderProfileWrapComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
