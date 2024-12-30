import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = `${environment.apiUrl}/api`;

  constructor(private http: HttpClient) {}

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return Promise.reject(error.message || error);
  }

  getAllEvents(eventType: string): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/${eventType}`).pipe(
      catchError(this.handleError)
    );
  }

  getEventById(eventType: string, id: string): Observable<Event> {
    return this.http.get<Event>(`${this.baseUrl}/${eventType}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  bookEvent(eventType: string, eventData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${eventType}/book`, eventData).pipe(
      catchError(this.handleError)
    );
  }
}