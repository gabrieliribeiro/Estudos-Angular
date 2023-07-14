import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrupadorComponent } from './agrupador.component';

describe('AgrupadorComponent', () => {
  let component: AgrupadorComponent;
  let fixture: ComponentFixture<AgrupadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgrupadorComponent]
    });
    fixture = TestBed.createComponent(AgrupadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
