import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, Subject, takeUntil } from 'rxjs';
import { Address } from '../model/address';
import { CartService } from '../services/cart.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css'],
})
export class AddressDetailsComponent implements OnInit {
  private unsubscriber: Subject<void> = new Subject<void>();
  cartId: any;
  cartData: any = [
    {
      cartId: '',
      items: [],
      totalPrice: '',
    },
  ];

  address: Address = {
    customerId: '',
    fullName: '',
    mobileNumber: '',
    flatNumber: '',
    city: '',
    pincode: '',
    state: '',
  };

  cartForOutput: any = [
    {
      cartId: '',
      custId: '',
      pro: [],
      total: 0,
    },
  ];

  displayedColumns: string[] = [
    'ID',
    'Name',
    'Type',
    'Category',
    'Rating',
    'Review',
    'Price',
    'Description',
  ];

  username: any;

  constructor(
    private storageService: StorageService,
    private cartService: CartService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.username = this.storageService.getUser().username;
    this.cartId = this.username;
    this.cartService.getCartByCartId(this.cartId).subscribe((data) => {
      console.log(data);
      this.cartData = data;
      console.log(this.cartData);
    });
  }

  paymentLink() {
    return 'https://buy.stripe.com/test_7sIdUBc3bfXf17qdQS';
  }

  goToCart() {
    this.router.navigate(['add-to-cart']);
  } 

  emptyCart(){
    this.cartService.emptyCart(this.cartId).subscribe(data=>{
      console.log(data); 
    })
  }
}
