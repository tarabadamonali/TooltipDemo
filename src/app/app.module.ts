import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClickOutsideModule } from 'ng-click-outside';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { KeyboardDirective } from './directives/keyboard.directive';
import { HiddenDirective } from './directives/hidden.directive';
import { ScrollDirective } from './directives/scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    TooltipComponent,
    KeyboardDirective,
    HiddenDirective,
    ScrollDirective
  ],
  imports: [
    BrowserModule,
    ClickOutsideModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
