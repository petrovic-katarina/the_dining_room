import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { SideBarComponent } from './core/side-bar/side-bar.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantItemComponent } from './restaurants/restaurant-item/restaurant-item.component';
import { RestaurantDetailComponent } from './restaurants/restaurant-detail/restaurant-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    SideBarComponent,
    RestaurantsComponent,
    RestaurantItemComponent,
    RestaurantDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
