import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpTableComponent } from './cp-table.component';

describe('CpTableComponent', () => {
  let component: CpTableComponent;
  let fixture: ComponentFixture<CpTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CpTableComponent]
    });
    fixture = TestBed.createComponent(CpTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
