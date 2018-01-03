import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AutoResizeDirective } from './directives';

@NgModule({
    imports: [
        HttpModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        AutoResizeDirective
    ],
    providers: [
    ]
})
export class SharedModule {
}
