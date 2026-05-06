import { Injectable, signal } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser = signal<User | null>(null);

  user = this.currentUser.asReadonly();

  login(username: string, password: string): boolean {
    // Simple mock authentication
    if (username === 'admin' && password === 'admin123') {
      this.currentUser.set({
        id: '1',
        username: 'admin',
        role: 'admin',
        token: 'mock-token-123'
      });
      return true;
    }
    return false;
  }

  logout() {
    this.currentUser.set(null);
  }

  isLoggedIn(): boolean {
    return !!this.currentUser();
  }
}
