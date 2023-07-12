import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpFormComponent } from './cp-form/cp-form.component';
import { CpTableComponent } from './cp-table/cp-table.component';
import { CpTelaComponent } from './cp-tela/cp-tela.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CpFormComponent,
    CpTableComponent,
    CpTelaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    CpTelaComponent
  ]
})
export class AtvModulosModule { }
