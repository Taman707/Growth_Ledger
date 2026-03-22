import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunderKyc } from './funder-kyc';

describe('FunderKyc', () => {
  let component: FunderKyc;
  let fixture: ComponentFixture<FunderKyc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunderKyc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunderKyc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
