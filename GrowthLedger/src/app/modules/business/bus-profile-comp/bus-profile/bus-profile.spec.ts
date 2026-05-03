import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusProfile } from './bus-profile';

describe('BusProfile', () => {
  let component: BusProfile;
  let fixture: ComponentFixture<BusProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusProfile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
