import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipeFormComponent } from './componentes/equipe-form/equipe-form.component';
import { EquipeTableComponent } from './componentes/equipe-table/equipe-table.component';
import { EquipeComponent } from './componentes/equipe/equipe.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EquipeFormComponent,
    EquipeTableComponent,
    EquipeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    EquipeComponent
  ]
})
export class EquipesModule { }
