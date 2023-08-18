import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DealerServiceService } from '../services/dealer-service.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-delete-service',
  templateUrl: './delete-service.component.html',
  styleUrls: ['./delete-service.component.css']
})
export class DeleteServiceComponent {
    Id : any;
    output : any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private dealerService : DealerServiceService
  ) { }

  ngOnInit(): void {
    
  }

  deleteProduct(): void {

    this.dealerService.deleteProduct(this.Id)
      .subscribe(
        (output) => {
          this.output = output;
        },
        (error) => {
          console.error("Error Deleting products by manufacturer:", error);
        }
      );
      alert("Product deleted Successfully.");
    }


}
