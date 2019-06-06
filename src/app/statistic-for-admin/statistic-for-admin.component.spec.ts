import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticForAdminComponent } from './statistic-for-admin.component';

describe('StatisticForAdminComponent', () => {
  let component: StatisticForAdminComponent;
  let fixture: ComponentFixture<StatisticForAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticForAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticForAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
