import { Component, OnInit } from '@angular/core';
import { RestuarantService } from '../services/restuarant.service';
import { RestaurantSearchResult } from '../model/restaurant-search-result';
import { Restaurant } from '../model/restaurant.model';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[] = [];
  count: number = 0;

  constructor(private restaurantService: RestuarantService) { }

  ngOnInit(): void {
    this.getAllRestaurants();
  }

  getAllRestaurants() {
    this.restaurantService.getAllRestaurants().subscribe({
      next: (restaurantSearchResult: RestaurantSearchResult) => {
        this.count = restaurantSearchResult.count;
        this.restaurants = restaurantSearchResult.results;
        console.log(this.restaurants);
      },
      error: (response: any) => {
        console.log('error: ', response.statusText);
      }
    })
  }

}
