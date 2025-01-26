import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './screens/restro-list/Components/nav/nav.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:'restrolist',
    loadChildren:()=>
      import('./screens/restro-list/restro-list.module').then((m)=>m.RestroListModule),
  },
  {
    path:'restroform',
    loadChildren:()=>
      import('./screens/restro-form/restro-form.module').then((m)=>m.RestroFormModule),
  },
  {
    path:'abc',
    component: AppComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
