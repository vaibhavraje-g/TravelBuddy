import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrekkingService {
  private baseUrl = `${environment.apiUrl}/trekking`;

  constructor(private http: HttpClient) {}

  addNewTrek(trek: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addNewTrek`, trek);
  }

  addNewTreks(treks: any[]): Observable<any> {
    return this.http.post(`${this.baseUrl}/addNewTreks`, treks);
  }

  getAllTreks(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAllTreks`);
  }

  getTrekById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/getTrekById/${id}`);
  }

  updateTrekById(id: string, trek: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateTrekById/${id}`, trek);
  }

  deleteTrekById(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteTrekById/${id}`);
  }
}
