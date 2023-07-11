import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpTelaComponent } from './cp-tela.component';

describe('CpTelaComponent', () => {
  let component: CpTelaComponent;
  let fixture: ComponentFixture<CpTelaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CpTelaComponent]
    });
    fixture = TestBed.createComponent(CpTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
