import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AutoResizeDirective, ScrollbarService, ScrollbarDirective } from './directives';

@NgModule({
    imports: [
        HttpModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
        AutoResizeDirective,
        ScrollbarDirective,
    ],
    exports: [
        AutoResizeDirective,
        ScrollbarDirective
    ],
    providers: [
        ScrollbarService
    ]
})
export class SharedModule {
}
