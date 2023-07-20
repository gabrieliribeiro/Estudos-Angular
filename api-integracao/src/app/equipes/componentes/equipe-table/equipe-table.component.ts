import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../../service/equipe.service';
import { Equipe } from '../../models/equipe';

@Component({
  selector: 'app-equipe-table',
  templateUrl: './equipe-table.component.html',
  styleUrls: ['./equipe-table.component.scss']
})
export class EquipeTableComponent implements OnInit {
  public equipes!: Equipe[];

  constructor(private service: EquipeService){}

  ngOnInit(): void {
    this.service.listAll().subscribe((data) => {
      this.equipes = data;
    });
  }

  public deleteItem(equipe: Equipe) {
    this.service.delete(equipe).subscribe(()=>{
      this.service.listAll().subscribe((data) => {
        this.equipes = data;
      });
    })
  }

  public editaEquipe(equipe: Equipe){
    this.service.selectEquipe(equipe);
  }
}
