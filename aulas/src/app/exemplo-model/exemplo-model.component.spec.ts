import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploModelComponent } from './exemplo-model.component';

describe('ExemploModelComponent', () => {
  let component: ExemploModelComponent;
  let fixture: ComponentFixture<ExemploModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExemploModelComponent]
    });
    fixture = TestBed.createComponent(ExemploModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
