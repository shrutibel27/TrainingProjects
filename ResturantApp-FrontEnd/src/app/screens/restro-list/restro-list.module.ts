import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestroListRoutingModule } from './restro-list-routing.module';
import { NavComponent } from './Components/nav/nav.component';
import { ListComponent } from './Components/list/list.component';



@NgModule({
  declarations: [
    NavComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    RestroListRoutingModule
  ]
})
export class RestroListModule { }
