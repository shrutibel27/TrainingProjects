import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor() { }

  getrestro(){
    return[
      {id:1,name:'gokul',location:'kondhwa',type:'veg'},
      {id:2,name:'kanha',location:'kondhwa',type:'veg'},
      {id:3,name:'abhishek',location:'baramati',type:'veg/non-veg'},
      {id:4,name:'govinda',location:'kondhwa',type:'veg'}
    ];
  }
}
