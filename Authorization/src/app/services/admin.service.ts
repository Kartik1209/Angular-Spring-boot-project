import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  baseUrl = 'http://localhost:4926/admin';

  constructor(private httpClient: HttpClient) {}

  addProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(`${this.baseUrl}/add`, product);
  }

  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.baseUrl}/findById/${id}`);
  }

  //4.Update product
  updateProduct(id: number, product: Product): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/update/${id}`, product);
  }

  //5.Delete product
  deleteProduct(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }
}
