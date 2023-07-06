import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploStyleComponent } from './exemplo-style.component';

describe('ExemploStyleComponent', () => {
  let component: ExemploStyleComponent;
  let fixture: ComponentFixture<ExemploStyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExemploStyleComponent]
    });
    fixture = TestBed.createComponent(ExemploStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
