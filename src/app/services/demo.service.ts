import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IApiResponse } from '../shared/interfaces/api-response';
import { IPaginated, IProduct } from '../shared/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  private baseURL: string = environment.PUBLIC_API_BASE_URL;

  constructor(private http: HttpClient) {
  }

  getRandomProducts() {
    const headers = { 'accept': 'application/json' }; // Set the accept header
    return this.http.get<IApiResponse<IPaginated<IProduct[]>>>(this.baseURL + "randomproducts?page=1&limit=10", {headers : headers});
  }
}
