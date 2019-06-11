import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDescriptioComponent } from './order-descriptio.component';

describe('OrderDescriptioComponent', () => {
  let component: OrderDescriptioComponent;
  let fixture: ComponentFixture<OrderDescriptioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDescriptioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDescriptioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
