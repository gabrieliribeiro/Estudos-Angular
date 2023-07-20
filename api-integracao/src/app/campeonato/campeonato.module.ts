import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampFormComponent } from './componentes/camp-form/camp-form.component';
import { CampTableComponent } from './componentes/camp-table/camp-table.component';
import { CampeonatoComponent } from './componentes/campeonato/campeonato.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CampFormComponent,
    CampTableComponent,
    CampeonatoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    CampeonatoComponent
  ]
})
export class CampeonatoModule { }
