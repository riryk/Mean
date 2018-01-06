import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';

import { ScrollbarDirective } from './scrollbar.directive';
import { ScrollbarService } from './scrollbar.service';

@NgModule({
  exports: [ScrollbarDirective],
  declarations: [ScrollbarDirective],
})
export class ScrollbarModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ScrollbarModule,
      providers: [ScrollbarService],
    };
  }
  static forChild(): ModuleWithProviders {
    return {
      ngModule: ScrollbarModule
    };
  }
}
