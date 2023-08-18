import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInvestorComponent } from './view-investor.component';

describe('ViewInvestorComponent', () => {
  let component: ViewInvestorComponent;
  let fixture: ComponentFixture<ViewInvestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInvestorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
