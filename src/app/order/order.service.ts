import { Observable } from 'rxjs/Observable';
import { CartItem } from '../restaurant-datail/shopping-cart/cart-item.model';
import { ShoppingCartService } from '../restaurant-datail/shopping-cart/shopping-cart.service';
import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { HttpClient } from '@angular/common/http';
import { MEAT_API } from '../app.api'

@Injectable()

export class OrderService {
  constructor(private cartService: ShoppingCartService, private http: HttpClient) {}

  cartItems(): CartItem[] {
    return this.cartService.items;
  }

  increaseQty(item: CartItem) {
    this.cartService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item);
  }

  itemsValue(): number {
    return this.cartService.total();
  }

  checkOrder(order: Order) : Observable<string> {

    return this.http.post<Order>(`${MEAT_API}/orders`, order)
      .map(order => order.id);
  }

  clear() {
    this.cartService.clear();
  }

}
