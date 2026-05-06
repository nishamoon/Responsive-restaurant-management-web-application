import { Injectable, signal } from '@angular/core';
import { Reservation } from '../models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations = signal<Reservation[]>([]);

  getReservations() {
    return this.reservations.asReadonly();
  }

  addReservation(reservation: Omit<Reservation, 'id' | 'status'>) {
    const newReservation: Reservation = {
      ...reservation,
      id: Math.random().toString(36).substring(2, 9),
      status: 'Pending'
    };
    this.reservations.update(res => [...res, newReservation]);
    return newReservation;
  }

  updateStatus(id: string, status: Reservation['status']) {
    this.reservations.update(res => 
      res.map(r => r.id === id ? { ...r, status } : r)
    );
  }
}
