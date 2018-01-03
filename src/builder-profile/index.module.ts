import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared';
import { BuilderProfileComponent } from './builder-profile.component';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        SharedModule,
        ReactiveFormsModule
    ],
    declarations: [
        BuilderProfileComponent
    ],
    exports: [
        BuilderProfileComponent
    ],
    providers: [
    ]
})
export class BuilderProfileModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: BuilderProfileModule };
    }
}
