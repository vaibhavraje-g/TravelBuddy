import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  eventToBeBooked: { eventType: string; eventId: string; eventData: any } = {
    eventType: '',
    eventId: '',
    eventData: {} ,
  };

  constructor(private apiService: ApiService, private router: Router) {}

  bookEvent(eventType: string, eventId: string, eventData: Event) {
    this.eventToBeBooked = { eventType, eventId, eventData };
    this.router.navigate(['/bookingpage']);
  }

  confirmBooking() {
    return this.apiService.bookEvent(
      this.eventToBeBooked.eventType,
      this.eventToBeBooked.eventData
    );
  }

  redirectToGoogleForm() {
    window.location.href = this.eventToBeBooked.eventData.registrationLink;
  }
}