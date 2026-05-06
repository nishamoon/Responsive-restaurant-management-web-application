import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReservationService } from '../../../services/reservation.service';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reservation.html',
  styleUrl: './reservation.scss'
})
export class ReservationComponent {
  private fb = inject(FormBuilder);
  private reservationService = inject(ReservationService);

  reservationForm: FormGroup;
  isSubmitted = false;

  constructor() {
    this.reservationForm = this.fb.group({
      customerName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9+ ]*$')]],
      date: ['', Validators.required],
      time: ['', Validators.required],
      guests: [2, [Validators.required, Validators.min(1), Validators.max(20)]],
      notes: ['']
    });
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      this.reservationService.addReservation(this.reservationForm.value);
      this.isSubmitted = true;
      this.reservationForm.reset({ guests: 2 });
    }
  }
}
