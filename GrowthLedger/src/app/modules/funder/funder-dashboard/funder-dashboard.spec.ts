import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunderDashboard } from './funder-dashboard';

describe('FunderDashboard', () => {
  let component: FunderDashboard;
  let fixture: ComponentFixture<FunderDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunderDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunderDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
