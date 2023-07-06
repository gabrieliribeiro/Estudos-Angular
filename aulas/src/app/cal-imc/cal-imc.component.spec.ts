import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalImcComponent } from './cal-imc.component';

describe('CalImcComponent', () => {
  let component: CalImcComponent;
  let fixture: ComponentFixture<CalImcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalImcComponent]
    });
    fixture = TestBed.createComponent(CalImcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
