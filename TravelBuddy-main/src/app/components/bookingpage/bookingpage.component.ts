import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../core/services/booking.service';

@Component({
  selector: 'app-bookingpage',
  templateUrl: './bookingpage.component.html',
  styleUrls: ['./bookingpage.component.css']
})
export class BookingpageComponent implements OnInit {
  event: any;

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.event = this.bookingService.eventToBeBooked.eventData;
  }

  confirmBooking() {
    this.bookingService.confirmBooking().subscribe(
      () => {
        this.bookingService.redirectToGoogleForm();
      },
      error => {
        console.error('Booking failed:', error);
      }
    );
  }
}
