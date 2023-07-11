import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpFilhoComponent } from './cp-filho/cp-filho.component';
import { CpPaiComponent } from './cp-pai/cp-pai.component';



@NgModule({
  declarations: [
    CpFilhoComponent,
    CpPaiComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CpPaiComponent
  ]
})
export class MdFilhoPaiModule { }
