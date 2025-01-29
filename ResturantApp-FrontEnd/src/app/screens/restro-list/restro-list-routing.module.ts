import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './Components/nav/nav.component';
import { ListComponent } from './Components/list/list.component';

const routes: Routes = [
  {
    path: 'nav',   //https://localhost:4200/restrolist/nav
    component: NavComponent
  },
  {
    path:'list',
    component:ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestroListRoutingModule { }
