import { TestBed } from '@angular/core/testing';

import { InvestorInfo } from './investor';

describe('Investor', () => {
  let service: InvestorInfo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestorInfo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
