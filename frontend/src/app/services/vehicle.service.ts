import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VehicleList } from '../models/Vehicle';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  apiUrl = `${environment.urlApi}/vehicle`;

  constructor(private httpClient: HttpClient) { }

  getVehicles(): Observable<Response<VehicleList[]>> {
    return this.httpClient.get<Response<VehicleList[]>>(this.apiUrl);
  }

  deletVehicle(id: number | undefined): Observable<Response<VehicleList[]>> {
    return this.httpClient.delete<Response<VehicleList[]>>(`${this.apiUrl}/${id}`);
  }

  postVehicle(vehicle: VehicleList): Observable<Response<VehicleList>> {
    const { id, ...data} = vehicle;
    return this.httpClient.post<Response<VehicleList>>(this.apiUrl, data);
  }

}
