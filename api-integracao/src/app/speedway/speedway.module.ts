import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeedwayComponent } from './componentes/speedway/speedway.component';
import { SpeedwayFormComponent } from './componentes/speedway-form/speedway-form.component';
import { SpeedwayTableComponent } from './componentes/speedway-table/speedway-table.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SpeedwayComponent,
    SpeedwayFormComponent,
    SpeedwayTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    SpeedwayComponent
  ]
})
export class SpeedwayModule { }
