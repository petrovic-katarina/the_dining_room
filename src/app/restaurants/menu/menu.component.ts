import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Menu } from 'src/app/model/menu.model';
import { Restaurant } from 'src/app/model/restaurant.model';
import { RestuarantService } from 'src/app/services/restuarant.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {

  @Input() restaurant: Restaurant = new Restaurant();
  restaurantMenu: Menu = new Menu();

  paramsSubscription: Subscription = new Subscription;

  constructor(private service: RestuarantService) { }

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu() {
    this.service.getRestaurantMenu(this.restaurant._id).subscribe({
      next: (menu: Menu) => {
        this.restaurantMenu = menu;
      },
      error: (response: any) => {
        console.log('error: ', response.statusText);
      }
    })
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

}
