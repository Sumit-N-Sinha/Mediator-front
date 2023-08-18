import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvprofileComponent } from './invprofile.component';

describe('InvprofileComponent', () => {
  let component: InvprofileComponent;
  let fixture: ComponentFixture<InvprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
