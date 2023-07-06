import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploForComponent } from './exemplo-for.component';

describe('ExemploForComponent', () => {
  let component: ExemploForComponent;
  let fixture: ComponentFixture<ExemploForComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExemploForComponent]
    });
    fixture = TestBed.createComponent(ExemploForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
