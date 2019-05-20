import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchClothesComponent } from './search-clothes.component';

describe('SearchClothesComponent', () => {
  let component: SearchClothesComponent;
  let fixture: ComponentFixture<SearchClothesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchClothesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
