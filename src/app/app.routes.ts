import { ReviewsComponent } from './restaurant-datail/reviews/reviews.component';
import { MenuComponent } from './restaurant-datail/menu/menu.component';
import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {RestaurantsComponent} from './restaurants/restaurants.component';
import {RestaurantDatailComponent} from './restaurant-datail/restaurant-datail.component';
import {OrderComponent} from './order/order.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'restaurants/:id', component: RestaurantDatailComponent,
    children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {path: 'menu', component: MenuComponent},
      {path: 'reviews', component: ReviewsComponent}
    ]
  },
  {path: 'order', component: OrderComponent}
];
