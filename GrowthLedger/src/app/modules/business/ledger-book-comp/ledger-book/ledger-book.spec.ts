import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerBook } from './ledger-book';

describe('LedgerBook', () => {
  let component: LedgerBook;
  let fixture: ComponentFixture<LedgerBook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LedgerBook]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LedgerBook);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
