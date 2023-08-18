import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsByManufacturerComponent } from './products-by-manufacturer.component';

describe('ProductsByManufacturerComponent', () => {
  let component: ProductsByManufacturerComponent;
  let fixture: ComponentFixture<ProductsByManufacturerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsByManufacturerComponent]
    });
    fixture = TestBed.createComponent(ProductsByManufacturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
