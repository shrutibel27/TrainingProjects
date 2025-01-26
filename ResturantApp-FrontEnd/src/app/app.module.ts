import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestroListModule } from './screens/restro-list/restro-list.module';
import { RestroFormModule } from './screens/restro-form/restro-form.module';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RestroListModule,
    RestroFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
