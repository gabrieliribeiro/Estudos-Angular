import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorridasComponent } from './componentes/corridas/corridas.component';
import { CorridasFormComponent } from './componentes/corridas-form/corridas-form.component';
import { CorridasTableComponent } from './componentes/corridas-table/corridas-table.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CorridasComponent,
    CorridasFormComponent,
    CorridasTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    CorridasComponent
  ]
})
export class CorridasModule { }
