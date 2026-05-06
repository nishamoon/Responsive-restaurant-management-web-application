import { Routes } from '@angular/router';
import { HomeComponent } from './components/public/home/home';
import { MenuComponent } from './components/public/menu/menu';
import { CartComponent } from './components/public/cart/cart';
import { ReservationComponent } from './components/public/reservation/reservation';
import { LoginComponent } from './components/admin/login/login';
import { DashboardComponent } from './components/admin/dashboard/dashboard';
import { MenuManagementComponent } from './components/admin/menu-management/menu-management';
import { ReservationManagementComponent } from './components/admin/reservation-management/reservation-management';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'cart', component: CartComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'admin/login', component: LoginComponent },
  { 
    path: 'admin', 
    component: DashboardComponent,
    children: [
      { path: 'menu', component: MenuManagementComponent },
      { path: 'reservations', component: ReservationManagementComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];
