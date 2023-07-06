import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroondasComponent } from './microondas.component';

describe('MicroondasComponent', () => {
  let component: MicroondasComponent;
  let fixture: ComponentFixture<MicroondasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MicroondasComponent]
    });
    fixture = TestBed.createComponent(MicroondasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
