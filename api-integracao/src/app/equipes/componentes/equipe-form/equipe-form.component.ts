import { Component, OnInit } from '@angular/core';
import { Equipe } from '../../models/equipe';
import { EquipeService } from '../../service/equipe.service';

@Component({
  selector: 'app-equipe-form',
  templateUrl: './equipe-form.component.html',
  styleUrls: ['./equipe-form.component.scss']
})
export class EquipeFormComponent implements OnInit{

  public equipes!: Equipe[];
  public equipe = {} as Equipe;

  constructor(private service: EquipeService) {}

  ngOnInit(): void {
    this.service.selectEquipeEvent.subscribe((data) => {
      this.equipe = data;
    });
  }

  public getEquipeByName() {
    this.service.getEquipesByName(this.equipe.nome).subscribe((data) => {
      this.equipes = data;
    });
  }

  public insertEquipe(){
    if(this.equipe.id) {
      this.service.editEquipe(this.equipe).subscribe((data) => {
        console.log(data);
      })
    } else {
      this.service.saveEquipe(this.equipe).subscribe((data) => {
        console.log(data);
      });
    }
    this.equipe = {} as Equipe;
  }

}
