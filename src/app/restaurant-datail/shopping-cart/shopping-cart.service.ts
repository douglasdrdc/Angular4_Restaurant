import { NotificationService } from '../../shared/messages/notification.service';
import { Injectable } from '@angular/core';
import { MenuItem } from '../menu-item/menu-item.model';
import { CartItem } from './cart-item.model';


@Injectable()
export class ShoppingCartService {
  items: CartItem[] = [];

  constructor(private notificationService: NotificationService){}

  clear() {
    this.items = [];
  }

  addItem(item: MenuItem) {
    let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);
    if (foundItem) {
      this.increaseQty(foundItem);
    }else {
      this.items.push(new CartItem(item));
    }

    this.notificationService.notify(`Item adicionado com sucesso ${item.name}`);
  }

  increaseQty(item: CartItem) {
    item.quantity = item.quantity + 1;
  }

  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
    this.notificationService.notify(`Item removido com sucesso ${item.menuItem.name}`);
  }

  decreaseQty(item: CartItem) {
    item.quantity = item.quantity - 1;
    if (item.quantity === 0) {
      this.removeItem(item);
    }
  }

  total(): number {
    return this.items.map(item => item.value()).reduce((prev, value) => prev + value, 0);
  }

}
