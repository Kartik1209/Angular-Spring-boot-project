import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product.model';
@Injectable({
  providedIn: 'root'
})
export class DealerServiceService {

  constructor(private http : HttpClient) { }

  deleteProduct(id:any){
    return this.http.delete<string>("http://localhost:9003/dealer/delete/"+id);
  }

  addProduct(product:Product){
    return this.http.post<any>("http://localhost:9003/dealer/addProduct",product);
  }

}
