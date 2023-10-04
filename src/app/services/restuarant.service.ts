import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RestaurantSearchResult } from '../model/restaurant-search-result';

const baseURL = 'http://localhost:3000/api/restaurants';

@Injectable({
  providedIn: 'root'
})
export class RestuarantService {

  constructor(private http: HttpClient) { }

  getAllRestaurants(params?: any): Observable<RestaurantSearchResult> {
    let options = {};

    if (params) {
      options = {
        params: new HttpParams().set("page", params.page || '').set("pageSize", params.pageSize || '').set("filter", params.filter && JSON.stringify(params.filter) || "").set("sort", params.sort || '').set("sortDirection", params.sortDirection || '')
      }
    }
    return this.http.get(baseURL, options).pipe(map((data: any) => {
      return new RestaurantSearchResult(data)
    }));
  }
}
