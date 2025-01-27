import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestroComponent } from './restro/restro.component';

const routes: Routes = [
  {
    path:'test-restro',
    component:RestroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRestroRoutingModule { }
