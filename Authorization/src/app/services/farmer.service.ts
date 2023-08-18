import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product.model';
@Injectable({
  providedIn: 'root'
})
export class FarmerService {

  constructor(private http : HttpClient) { }

  getAvailableProducts(){
    return this.http.get<Product[]>("http://localhost:9002/user/availableProducts");
  }

  productByManufacturer(name:any){
    return this.http.get<Product[]>("http://localhost:9002/user/availableProducts/"+name);
  }

}