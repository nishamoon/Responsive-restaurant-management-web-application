import { Injectable, signal, computed } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { MenuItem } from '../models/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = signal<CartItem[]>([]);

  items = this.cartItems.asReadonly();

  totalItems = computed(() => this.cartItems().reduce((acc, item) => acc + item.quantity, 0));
  
  totalPrice = computed(() => this.cartItems().reduce((acc, item) => acc + (item.menuItem.price * item.quantity), 0));

  addToCart(menuItem: MenuItem) {
    this.cartItems.update(items => {
      const existingItem = items.find(item => item.menuItem.id === menuItem.id);
      if (existingItem) {
        return items.map(item => 
          item.menuItem.id === menuItem.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...items, { menuItem, quantity: 1 }];
    });
  }

  removeFromCart(menuItemId: string) {
    this.cartItems.update(items => items.filter(item => item.menuItem.id !== menuItemId));
  }

  updateQuantity(menuItemId: string, quantity: number) {
    if (quantity <= 0) {
      this.removeFromCart(menuItemId);
      return;
    }
    this.cartItems.update(items => 
      items.map(item => 
        item.menuItem.id === menuItemId ? { ...item, quantity } : item
      )
    );
  }

  clearCart() {
    this.cartItems.set([]);
  }
}
