import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BackpackingService {
  private baseUrl = `${environment.apiUrl}/backpacking`;

  constructor(private http: HttpClient) {}

  addNewBackpacking(backpacking: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addNewBackpacking`, backpacking);
  }

  addNewBackpackingEvents(events: any[]): Observable<any> {
    return this.http.post(`${this.baseUrl}/addNewBackpackingEvents`, events);
  }

  getAllBackpacks(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAllBackpacks`);
  }

  getBackpackById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/getBackpackById/${id}`);
  }

  updateBackpackById(id: string, backpacking: any): Observable<any> {
    return this.http.put(
      `${this.baseUrl}/updateBackpackById/${id}`,
      backpacking
    );
  }

  deleteBackpackById(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteBackpackById/${id}`);
  }
}
