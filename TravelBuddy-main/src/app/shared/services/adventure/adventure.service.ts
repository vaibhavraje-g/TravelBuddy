import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdventureService {
  private baseUrl = `${environment.apiUrl}/adventure`;

  constructor(private http: HttpClient) {}

  addNewAdventure(adventure: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addNewAdventure`, adventure);
  }

  addNewAdventures(adventures: any[]): Observable<any> {
    return this.http.post(`${this.baseUrl}/addNewAdventures`, adventures);
  }

  getAllAdventure(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAllAdventure`);
  }

  getAdventureById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAdventureById/${id}`);
  }

  updateAdventureById(id: string, adventure: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateAdventureById/${id}`, adventure);
  }

  deleteAdventureById(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteAdventureById/${id}`);
  }
}
