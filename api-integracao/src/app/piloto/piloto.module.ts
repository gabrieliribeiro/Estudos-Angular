import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PilotoFormComponent } from './componentes/piloto-form/piloto-form.component';
import { PilotoComponent } from './componentes/piloto/piloto.component';
import { PilotoTableComponent } from './componentes/piloto-table/piloto-table.component';



@NgModule({
  declarations: [
    PilotoFormComponent,
    PilotoComponent,
    PilotoTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PilotoComponent
  ]
})
export class PilotoModule { }
