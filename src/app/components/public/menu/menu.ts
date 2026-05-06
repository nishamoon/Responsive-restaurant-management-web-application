import { Component, inject, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../../services/menu.service';
import { CartService } from '../../../services/cart.service';
import { MenuItem } from '../../../models/menu-item.model';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class MenuComponent {
  menuService = inject(MenuService);
  cartService = inject(CartService);

  selectedCategory = signal<string>('All');
  categories = ['All', 'Appetizers', 'Main Course', 'Desserts', 'Beverages'];

  filteredMenu = computed(() => {
    const category = this.selectedCategory();
    const items = this.menuService.getMenu()();
    if (category === 'All') return items;
    return items.filter(item => item.category === category);
  });

  selectCategory(category: string) {
    this.selectedCategory.set(category);
  }

  addToCart(item: MenuItem) {
    this.cartService.addToCart(item);
  }
}
