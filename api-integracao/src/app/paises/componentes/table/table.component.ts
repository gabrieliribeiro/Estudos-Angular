import { Component } from '@angular/core';
import { PaisService } from '../../service/pais.service';
import { Pais } from '../../models/pais';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  constructor(private service: PaisService){}
  public paises!: Pais[];

  ngOnInit(): void {
    this.service.listAll().subscribe((data) => {
      this.paises = data;
    });
  }

  public deleteItem(pais: Pais) {
    this.service.delete(pais).subscribe(()=>{
      this.service.listAll().subscribe((data) => {
        this.paises = data;
      });
    })
  }

  public editaUser(pais:Pais){
    this.service.selectUser(pais);
  }
}
