import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RestroComponent } from './screens/test-restro/restro/restro.component';

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
  // {
  //   path:'test',
  //   loadChildren:()=>
  //   import('./screens/test-restro/test-restro.module').then((m)=>m.TestRestroModule),
  // }

  {
    path:'test',
    component:RestroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
