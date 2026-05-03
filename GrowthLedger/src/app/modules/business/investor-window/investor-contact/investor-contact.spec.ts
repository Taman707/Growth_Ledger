import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorContact } from './investor-contact';

describe('InvestorContact', () => {
  let component: InvestorContact;
  let fixture: ComponentFixture<InvestorContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestorContact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestorContact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
