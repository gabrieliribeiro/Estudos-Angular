import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResutsComponent } from './resuts.component';

describe('ResutsComponent', () => {
  let component: ResutsComponent;
  let fixture: ComponentFixture<ResutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResutsComponent]
    });
    fixture = TestBed.createComponent(ResutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
