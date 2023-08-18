import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartForInput } from '../model/cartForInput';

const httpOptions = {
  headers: new HttpHeaders({ 'response-Type': 'text' })
};

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any = [];
  public search = new BehaviorSubject<string>("");

  baseUrl1='http://localhost:3333/cart/';

  constructor(private httpClient:HttpClient) { }

  addProductToCartCondition(cartId:any,productId:any){
    return this.httpClient.post(`${this.baseUrl1}addingproducttocart/${cartId}/${productId}`,cartId,productId)
  }

  getCartByCartId(cartId:any){
    return this.httpClient.get(`${this.baseUrl1}${cartId}`,cartId);
  }

  deleteProductInCartById(productId:any,cartId:any){
    return this.httpClient.put(`${this.baseUrl1}delete/item/${productId}/${cartId}`,productId,cartId)
  }

  decreaseQuantityOfProduct(productId:any,cartId:any){
    return this.httpClient.put(`${this.baseUrl1}decreaseQuant/${productId}/${cartId}`,productId,cartId)
  }

  increaseQuantityOfProduct(productId:any,cartId:any){
    return this.httpClient.put(`${this.baseUrl1}increaseQuant/${productId}/${cartId}`,productId,cartId)
  }

  emptyCart(cartId:any){
    return this.httpClient.delete(`${this.baseUrl1}delete/${cartId}`,cartId);
  }
}
