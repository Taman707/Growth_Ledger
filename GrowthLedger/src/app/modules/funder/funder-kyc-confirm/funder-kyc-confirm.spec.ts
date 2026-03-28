import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunderKycConfirm } from './funder-kyc-confirm';

describe('FunderKycConfirm', () => {
  let component: FunderKycConfirm;
  let fixture: ComponentFixture<FunderKycConfirm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunderKycConfirm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunderKycConfirm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
