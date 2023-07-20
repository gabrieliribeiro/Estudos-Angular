import { Component } from '@angular/core';
import { Piloto } from '../../models/piloto';
import { Pais } from 'src/app/paises/models/pais';
import { PilotoService } from '../../service/piloto.service';
import { PaisService } from 'src/app/paises/service/pais.service';
import { Equipe } from 'src/app/equipes/models/equipe';
import { EquipeService } from 'src/app/equipes/service/equipe.service';

@Component({
  selector: 'app-piloto-form',
  templateUrl: './piloto-form.component.html',
  styleUrls: ['./piloto-form.component.scss'],
})
export class PilotoFormComponent {
  public pilotos!: Piloto[];
  public piloto = {} as Piloto;

  public paises!: Pais[];
  public pais = {} as Pais;

  public equipes!: Equipe[];
  public equipe = {} as Equipe;
 

  constructor(
    private service: PilotoService,
    private paisService: PaisService,
    private equipeService: EquipeService
  ) {}

  public insertPiloto() {
    console.log(this.piloto);

    if (!this.piloto.pais) {
      alert('Selecione um país para salvar');
      return;
    }

    if (this.piloto.id) {
      this.service.editPiloto(this.piloto).subscribe((data) => {
        console.log(data);
      });
    } else {
      this.service.savePiloto(this.piloto).subscribe((data) => {
        console.log(data);
      });
    }
    this.piloto = {} as Piloto;
  }

  ngOnInit(): void {
    this.paisService.listAll().subscribe((paises: Pais[]) => {
      this.paises = paises;
    });

    this.equipeService.listAll().subscribe((equipes: Equipe[]) => {
      this.equipes = equipes;
    });
    
    this.service.selectPilotoEvent.subscribe((piloto: Piloto) => {
      this.piloto = piloto;
      this.pais = piloto.pais;
      this.equipe = piloto.equipe;
    });
  }
}
