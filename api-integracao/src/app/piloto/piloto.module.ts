import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PilotoFormComponent } from './componentes/piloto-form/piloto-form.component';
import { PilotoComponent } from './componentes/piloto/piloto.component';
import { PilotoTableComponent } from './componentes/piloto-table/piloto-table.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PilotoFormComponent,
    PilotoComponent,
    PilotoTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    PilotoComponent
  ]
})
export class PilotoModule { }
