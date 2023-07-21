import { Component } from '@angular/core';
import { CorridaDto } from '../../models/corrida-dto';
import { CorridasService } from '../../service/corridas.service';

@Component({
  selector: 'app-corridas-table',
  templateUrl: './corridas-table.component.html',
  styleUrls: ['./corridas-table.component.scss']
})
export class CorridasTableComponent {

  public corridas!: CorridaDto[];

  constructor(private service: CorridasService){}

  ngOnInit(): void {
    this.service.listAll().subscribe((data) => {
      this.corridas = data;
    });

  }

  public deleteItem(corrida: CorridaDto) {
    this.service.delete(corrida).subscribe(() => {
      this.service.listAll().subscribe((data) => {
        this.corridas = data;
      });
    });
  } 

  public editaCorrida(corrida: CorridaDto) {
    this.service.selectCorrida(corrida);
  }

}
