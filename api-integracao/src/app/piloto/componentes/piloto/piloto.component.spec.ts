import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotoComponent } from './piloto.component';

describe('PilotoComponent', () => {
  let component: PilotoComponent;
  let fixture: ComponentFixture<PilotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PilotoComponent]
    });
    fixture = TestBed.createComponent(PilotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
