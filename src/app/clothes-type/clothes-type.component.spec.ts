import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesTypeComponent } from './clothes-type.component';

describe('ClothesTypeComponent', () => {
  let component: ClothesTypeComponent;
  let fixture: ComponentFixture<ClothesTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothesTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothesTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
