import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './componentes/user/user.component';
import { TableComponent } from './componentes/table/table.component';
import { FormsComponent } from './componentes/forms/forms.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserComponent,
    TableComponent,
    FormsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    UserComponent
  ]
})
export class UsersModule { }
