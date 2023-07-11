import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CpPaiComponent } from './cp-pai/cp-pai.component';
import { CpFilhoComponent } from './cp-filho/cp-filho.component';



@NgModule({
  declarations: [
    CpPaiComponent,
    CpFilhoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class MdPaiFilhoModule { }
