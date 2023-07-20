import { Component } from '@angular/core';
import { Campeonato } from '../../models/campeonato';
import { CampeonatoService } from '../../service/campeonato.service';

@Component({
  selector: 'app-camp-table',
  templateUrl: './camp-table.component.html',
  styleUrls: ['./camp-table.component.scss']
})
export class CampTableComponent {

  public campeonatos!: Campeonato[];

  constructor(private service: CampeonatoService){}

  ngOnInit(): void {
    this.service.listAll().subscribe((data) => {
      this.campeonatos = data;
    });
  
}

public deleteItem(campeonato: Campeonato) {
  this.service.delete(campeonato).subscribe(() => {
    this.service.listAll().subscribe((data) => {
      this.campeonatos = data;
    });
  });
}

public editaCamp(campeonato: Campeonato) {
  this.service.selectCampeonato(campeonato);
}

}
