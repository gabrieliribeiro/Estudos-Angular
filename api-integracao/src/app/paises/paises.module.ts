import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './componentes/form/form.component';
import { TableComponent } from './componentes/table/table.component';
import { FormsModule } from '@angular/forms';
import { PaisComponent } from './componentes/pais/pais.component';



@NgModule({
  declarations: [
    FormComponent,
    TableComponent,
    FormComponent,
    PaisComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PaisComponent
  ]
})
export class PaisesModule { }
