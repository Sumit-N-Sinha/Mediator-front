import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvheaderComponent } from './invheader.component';

describe('InvheaderComponent', () => {
  let component: InvheaderComponent;
  let fixture: ComponentFixture<InvheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
