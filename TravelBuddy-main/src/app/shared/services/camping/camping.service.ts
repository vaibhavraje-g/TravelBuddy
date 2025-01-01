import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CampingService {
  private baseUrl = `${environment.apiUrl}/camping`;

  constructor(private http: HttpClient) {}

  addNewCamp(camp: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addNewCamp`, camp);
  }

  addNewCamps(camps: any[]): Observable<any> {
    return this.http.post(`${this.baseUrl}/addNewCamps`, camps);
  }

  getAllCamps(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAllCamps`);
  }

  getCampById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/getCampById/${id}`);
  }

  updateCampById(id: string, camp: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateCampById/${id}`, camp);
  }

  deleteCampById(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteCampById/${id}`);
  }
}
