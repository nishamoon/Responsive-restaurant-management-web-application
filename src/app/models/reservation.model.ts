export interface Reservation {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  status: 'Pending' | 'Confirmed' | 'Cancelled';
  notes?: string;
}
