import { Component, OnInit } from '@angular/core';
import { Campeonato } from '../../models/campeonato';
import { CampeonatoService } from '../../service/campeonato.service';

@Component({
  selector: 'app-camp-form',
  templateUrl: './camp-form.component.html',
  styleUrls: ['./camp-form.component.scss'],
})
export class CampFormComponent implements OnInit {
  public campeonatos!: Campeonato[];
  public campeonato = {} as Campeonato;

  constructor(private service: CampeonatoService) {}

  ngOnInit(): void {
    this.service.selectCampeonatoEvent.subscribe((data) => {
      this.campeonato = data;
    });
  }

  public getCampeonatoByDescricao() {
    this.service
      .getCampeonatosByDescricao(this.campeonato.descricao)
      .subscribe((data) => {
        this.campeonatos = data;
      });
  }

  public insertCampeonato(){
    if(this.campeonato.id) {
      this.service.editCampeonato(this.campeonato).subscribe((data) => {
        console.log(data);
      })
    } else {
      this.service.saveCampeonato(this.campeonato).subscribe((data) => {
        console.log(data);
      });
    }
    this.campeonato = {} as Campeonato;
  }
}
