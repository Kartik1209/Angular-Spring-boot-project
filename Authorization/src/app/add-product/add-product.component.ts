import { Component } from '@angular/core';
import { Product } from '../product.model';
import { DealerServiceService } from '../services/dealer-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product: Product = new Product('','',0,''); // Assuming Product class has appropriate properties

  constructor(private dealerService: DealerServiceService) {}

  addProduct() {
    this.dealerService.addProduct(this.product)
      .subscribe(
        (output) => {
          console.log('Product added successfully:', output);
          
          // Additional logic or UI updates after successful product addition
        },
        (error) => {
          console.error('An error occurred while adding the product:', error);
          // Handle error and show appropriate message to the user
        }
      );
      alert("Product added successfullly");
  }
}
