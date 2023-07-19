import { Component } from '@angular/core';
import { Pais } from '../../models/pais';
import { PaisService } from '../../service/pais.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  public paises!: Pais[];
  public pais = {} as Pais;

  constructor(private service: PaisService) {}

  ngOnInit(): void {
    this.service.emitEvent.subscribe((data) => {
      this.pais = data;
    });
  }

  public getPaisByName() {
    this.service.getUsersByName(this.pais.name).subscribe((data) => {
      this.paises = data;
    });
  }

  public insertPais(){
    if(this.pais.id) {
      this.service.editUser(this.pais).subscribe((data) => {
        console.log(data);
      })
    } else {
      this.service.saveUser(this.pais).subscribe((data) => {
        console.log(data);
      });
    }
    this.pais = {} as Pais;
  }
}
