import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPrintModule } from 'ngx-print';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';

@NgModule({
  declarations: [AppComponent, TestComponentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgxPrintModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
