import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRestroRoutingModule } from './test-restro-routing.module';
import { RestroComponent } from './restro/restro.component';
import { AppModule } from 'src/app/app.module';

@NgModule({
  declarations: [
    RestroComponent
  ],
  imports: [
    CommonModule,
    TestRestroRoutingModule,
    AppModule
  ]
})
export class TestRestroModule { }
