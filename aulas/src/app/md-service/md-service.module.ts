import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpAComponent } from './cp-a/cp-a.component';
import { CpBComponent } from './cp-b/cp-b.component';
import { CpAgruparComponent } from './cp-agrupar/cp-agrupar.component';



@NgModule({
  declarations: [
    CpAComponent,
    CpBComponent,
    CpAgruparComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CpAgruparComponent
  ]
})
export class MdServiceModule { }
