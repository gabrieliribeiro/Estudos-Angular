import { Component } from '@angular/core';
import { PilotoService } from '../../service/piloto.service';
import { Piloto } from '../../models/piloto';
import { PaisService } from 'src/app/paises/service/pais.service';
import { EquipeService } from 'src/app/equipes/service/equipe.service';
import { Pais } from 'src/app/paises/models/pais';
import { Equipe } from 'src/app/equipes/models/equipe';

@Component({
  selector: 'app-piloto-table',
  templateUrl: './piloto-table.component.html',
  styleUrls: ['./piloto-table.component.scss']
})
export class PilotoTableComponent {

  constructor(private service: PilotoService, private servicePais: PaisService, private equipeService: EquipeService){}

  public pilotos!: Piloto[];
  public paises!: Pais[];
  public equipes!: Equipe[];
  

  ngOnInit(): void {
    this.service.listAll().subscribe((data) => {
      this.pilotos = data;
    });
  }

  public deleteItem(piloto:Piloto){
    this.service.delete(piloto).subscribe(()=>{
      this.service.listAll().subscribe((data) => {
        this.pilotos = data;
      });
    })
  }

  public editaPiloto(piloto: Piloto) {
    this.service.selectPiloto(piloto);
  }

}
