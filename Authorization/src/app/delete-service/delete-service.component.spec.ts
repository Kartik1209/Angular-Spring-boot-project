import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteServiceComponent } from './delete-service.component';

describe('DeleteServiceComponent', () => {
  let component: DeleteServiceComponent;
  let fixture: ComponentFixture<DeleteServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteServiceComponent]
    });
    fixture = TestBed.createComponent(DeleteServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
