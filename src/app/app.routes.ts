import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { ReviewsComponent } from './restaurant-datail/reviews/reviews.component';
import { MenuComponent } from './restaurant-datail/menu/menu.component';
import { Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDatailComponent } from './restaurant-datail/restaurant-datail.component';


export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'restaurants/:id', component: RestaurantDatailComponent,
    children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {path: 'menu', component: MenuComponent},
      {path: 'reviews', component: ReviewsComponent}
    ]
  },
  {path: 'order-summary', component: OrderSummaryComponent},
  {path: 'about', loadChildren: './about/about.module#AboutModule'},
  {path: 'order', loadChildren: './order/order.module#OrderModule'}

];
