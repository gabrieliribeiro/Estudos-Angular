import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploClassComponent } from './exemplo-class.component';

describe('ExemploClassComponent', () => {
  let component: ExemploClassComponent;
  let fixture: ComponentFixture<ExemploClassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExemploClassComponent]
    });
    fixture = TestBed.createComponent(ExemploClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
