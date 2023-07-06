import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploIfComponent } from './exemplo-if.component';

describe('ExemploIfComponent', () => {
  let component: ExemploIfComponent;
  let fixture: ComponentFixture<ExemploIfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExemploIfComponent]
    });
    fixture = TestBed.createComponent(ExemploIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
