import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InNavBar } from './in-nav-bar';

describe('InNavBar', () => {
  let component: InNavBar;
  let fixture: ComponentFixture<InNavBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InNavBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InNavBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
