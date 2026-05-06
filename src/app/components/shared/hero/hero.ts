import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent {
  @Input() title: string = "Fine Dining Redefined";
  @Input() subtitle: string = "Exquisite flavors, elegant ambiance, and unforgettable memories.";
  @Input() bgImage: string = "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop";
}
