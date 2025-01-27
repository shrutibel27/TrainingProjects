import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestroListModule } from './screens/restro-list/restro-list.module';
import { RestroFormModule } from './screens/restro-form/restro-form.module';
import { TestComponent } from './components/test/test.component';
import { TestRestroModule } from './screens/test-restro/test-restro.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RestroListModule,
    RestroFormModule
  ],
  exports:[TestComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
