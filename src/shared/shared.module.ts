import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { 
    AutoResizeDirective, 
    ScrollbarService, 
    ScrollbarDirective, 
    ClickOutsideDirective 
} from './directives';

@NgModule({
    imports: [
        HttpModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
        AutoResizeDirective,
        ScrollbarDirective,
        ClickOutsideDirective
    ],
    exports: [
        AutoResizeDirective,
        ScrollbarDirective,
        ClickOutsideDirective
    ],
    providers: [
        ScrollbarService
    ]
})
export class SharedModule {
}
