import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestroFormRoutingModule } from './restro-form-routing.module';
import { FormComponent } from './components/form/form.component';


@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    RestroFormRoutingModule
  ]
})
export class RestroFormModule { }
