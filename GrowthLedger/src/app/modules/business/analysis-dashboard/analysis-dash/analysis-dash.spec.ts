import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisDash } from './analysis-dash';

describe('AnalysisDash', () => {
  let component: AnalysisDash;
  let fixture: ComponentFixture<AnalysisDash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalysisDash]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalysisDash);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
