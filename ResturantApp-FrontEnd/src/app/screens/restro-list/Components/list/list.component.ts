import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  restaurants=[
      {id:1,name:'gokul',location:'kondhwa',type:'veg'},
      {id:2,name:'kanha',location:'kondhwa',type:'veg'},
      {id:3,name:'abhishek',location:'baramati',type:'veg/non-veg'},
      {id:4,name:'govinda',location:'kondhwa',type:'veg'}
  ];
  constructor(){
    
  }


  addrestro(){
    const newRestaurant = {
      id: this.restaurants.length + 1,
      name: 'xyz',
      location: 'pqr',
      type: '...',
    };
    this.restaurants.push(newRestaurant);
  }
  removerestro(id:number){
    this.restaurants.splice(id-1, 1);
  }
  
}
