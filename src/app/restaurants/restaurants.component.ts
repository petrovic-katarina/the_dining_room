import { Component, OnDestroy, OnInit } from '@angular/core';
import { RestuarantService } from '../services/restuarant.service';
import { RestaurantSearchResult } from '../model/restaurant-search-result';
import { Restaurant } from '../model/restaurant.model';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit, OnDestroy {

  restaurants: Restaurant[] = [];
  count: number = 0;
  paramsSubscription: Subscription = new Subscription;

  queryParams = {
    page: 1,
    pageSize: 12,
    sort: 'rating',
    sortDirection: 'desc',
    filter: {
      cuisine: '',
      priceFrom: 1,
      priceTo: 5
    }
  }

  priceFromControl = new FormControl(1);
  priceToControl = new FormControl(5);

  constructor(private restaurantService: RestuarantService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      let cuisine = params['cuisine'];

      if (cuisine === 'all') {
        cuisine = '';
      }
      this.queryParams.filter.cuisine = cuisine;
      this.queryParams.page = 1;
      this.getAllRestaurants();

    })
  }

  onPriceChanged() {
    this.queryParams.filter.priceFrom = this.priceFromControl.value || 1;
    this.queryParams.filter.priceTo = this.priceToControl.value || 5;
    this.queryParams.page = 1;
    this.getAllRestaurants();
  }

  getAllRestaurants() {
    this.restaurantService.getAllRestaurants(this.queryParams).subscribe({
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

  onPageChange(newPage: number) {
    this.queryParams.page = newPage;
    this.getAllRestaurants();
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

}
