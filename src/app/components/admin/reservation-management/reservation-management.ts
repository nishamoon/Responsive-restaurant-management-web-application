import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationService } from '../../../services/reservation.service';
import { Reservation } from '../../../models/reservation.model';

@Component({
  selector: 'app-reservation-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reservation-management.html',
  styleUrl: './reservation-management.scss'
})
export class ReservationManagementComponent {
  reservationService = inject(ReservationService);

  updateStatus(id: string, status: Reservation['status']) {
    this.reservationService.updateStatus(id, status);
  }

  getStatusClass(status: string) {
    return status.toLowerCase();
  }
}
