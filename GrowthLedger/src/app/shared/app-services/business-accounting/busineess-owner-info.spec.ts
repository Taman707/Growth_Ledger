import { TestBed } from '@angular/core/testing';

import { BusineessOwnerInfo } from '../business-accounting/busineess-owner-info';

describe('BusineessOwnerInfo', () => {
  let service: BusineessOwnerInfo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusineessOwnerInfo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
