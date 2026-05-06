import { Injectable, signal } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuItems = signal<MenuItem[]>([
    {
      id: '1',
      name: 'Truffle Mushroom Risotto',
      description: 'Creamy arborio rice with wild mushrooms and white truffle oil.',
      price: 24.99,
      category: 'Main Course',
      image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=2070&auto=format&fit=crop',
      isVeg: true,
      isPopular: true
    },
    {
      id: '2',
      name: 'Pan-Seared Salmon',
      description: 'Fresh Atlantic salmon with lemon butter sauce and asparagus.',
      price: 28.50,
      category: 'Main Course',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1974&auto=format&fit=crop',
      isVeg: false,
      isPopular: true
    },
    {
      id: '3',
      name: 'Burrata Salad',
      description: 'Creamy burrata with heirloom tomatoes and balsamic glaze.',
      price: 16.00,
      category: 'Appetizers',
      image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?q=80&w=1974&auto=format&fit=crop',
      isVeg: true
    },
    {
      id: '4',
      name: 'Chocolate Fondant',
      description: 'Warm chocolate cake with a molten center and vanilla bean gelato.',
      price: 12.00,
      category: 'Desserts',
      image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=2070&auto=format&fit=crop',
      isVeg: true,
      isPopular: true
    }
  ]);

  getMenu() {
    return this.menuItems.asReadonly();
  }

  addMenuItem(item: MenuItem) {
    this.menuItems.update(items => [...items, item]);
  }

  updateMenuItem(updatedItem: MenuItem) {
    this.menuItems.update(items => items.map(item => item.id === updatedItem.id ? updatedItem : item));
  }

  deleteMenuItem(id: string) {
    this.menuItems.update(items => items.filter(item => item.id !== id));
  }
}
