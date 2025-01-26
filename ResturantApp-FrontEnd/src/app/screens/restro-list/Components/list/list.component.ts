import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  restaurants:any[]=[];
  constructor(private restaurantService: RestaurantService){
    this.restaurants = this.restaurantService.getrestro();
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
