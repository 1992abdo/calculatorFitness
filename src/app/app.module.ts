import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { TestOneComponent } from './component/test-one/test-one.component';
import { TestTwoComponent } from './component/test-two/test-two.component';

@NgModule({
  declarations: [
    AppComponent,
    TestOneComponent,
    TestTwoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
