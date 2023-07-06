import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploSwitchComponent } from './exemplo-switch.component';

describe('ExemploSwitchComponent', () => {
  let component: ExemploSwitchComponent;
  let fixture: ComponentFixture<ExemploSwitchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExemploSwitchComponent]
    });
    fixture = TestBed.createComponent(ExemploSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
