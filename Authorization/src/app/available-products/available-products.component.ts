import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router , NavigationExtras} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-available-products',
  templateUrl: './available-products.component.html',
  styleUrls: ['./available-products.component.css']
})



export class AvailableProductsComponent implements OnInit {
  products: any[] = [];
  manufacturerName: string = "";
  selectedProduct: any;

  constructor(private router: Router, private http: HttpClient, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.getAvailableProducts();
  }

  getAvailableProducts(): void {
    this.http.get<any[]>('http://localhost:9002/user/availableProducts')
      .subscribe(
        (products) => {
          this.products = products;
        },
        (error) => {
          console.error("Error fetching available products:", error);
        }
      );
  }

  redirectToProductsByManufacturer(): void {
    const url = 'products-by-manufacturer/:manufacturerName';
    this.router.navigateByUrl(url);
  }

  redirectToPaymentURL() {
    window.location.href = "http://localhost:8083";
  }

  redirectToCart(product : any) {
    this.router.navigate(['/cart'], {queryParams: {product: JSON.stringify(product)}});
  }

  showAddToCart(product: any){
    localStorage.setItem('selectedProducts', JSON.stringify(this.sharedService.selectedProduct));
    this.sharedService.selectedProduct.push(product);
  }

}