import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../shared/hero/hero';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
  featuredCategories = [
    { name: 'Appetizers', image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=2070&auto=format&fit=crop' },
    { name: 'Main Course', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop' },
    { name: 'Desserts', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964&auto=format&fit=crop' }
  ];
}
