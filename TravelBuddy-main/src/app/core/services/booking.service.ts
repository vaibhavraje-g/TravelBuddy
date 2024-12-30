import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  eventToBeBooked: { eventType: string; eventId: string; eventData: Event } = {
    eventType: '',
    eventId: '',
    eventData: {} as Event,
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