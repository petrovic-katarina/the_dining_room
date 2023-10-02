import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RestaurantSearchResult } from '../model/restaurant-search-result';

const baseURL = 'http://localhost:3000/api/restaurants';

@Injectable({
  providedIn: 'root'
})
export class RestuarantService {

  constructor(private http: HttpClient) { }

  getAllRestaurants(): Observable<RestaurantSearchResult> {
    return this.http.get(baseURL).pipe(map((data: any) => {
      return new RestaurantSearchResult(data)
    }));
  }
}
