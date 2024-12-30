import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { Event } from '../../core/models/event.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  treks: Event[] = [];
  camps: Event[] = [];
  adventures: Event[] = [];
  backpacks: Event[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.apiService.getAllEvents('treks').subscribe(
      (data: Event[]) => this.treks = data,
      error => console.error('Error fetching treks:', error)
    );

    this.apiService.getAllEvents('camps').subscribe(
      (data: Event[]) => this.camps = data,
      error => console.error('Error fetching camps:', error)
    );

    this.apiService.getAllEvents('adventures').subscribe(
      (data: Event[]) => this.adventures = data,
      error => console.error('Error fetching adventures:', error)
    );

    this.apiService.getAllEvents('backpacks').subscribe(
      (data: Event[]) => this.backpacks = data,
      error => console.error('Error fetching backpacks:', error)
    );
  }
}
