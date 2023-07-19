import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/paises/models/pais';
import { PaisService } from 'src/app/paises/service/pais.service';
import { SpeedwayService } from '../../services/speedway.service';
import { Speedway } from '../../models/speedway';

@Component({
  selector: 'app-speedway-form',
  templateUrl: './speedway-form.component.html',
  styleUrls: ['./speedway-form.component.scss']
})
export class SpeedwayFormComponent implements OnInit{
  public paises!: Pais[];
  public pistas!: Speedway[];
  public pista = {} as Speedway;

  constructor(private service: SpeedwayService, private paisService: PaisService){}

  ngOnInit(): void {
    this.service.listAll().subscribe((data) => {
      this.pistas = data;
    });

    this.paisService.listAll().subscribe((data) => {
      this.paises = data;
    });
  }


  public insertPista(){
    if(this.pista.id) {
      this.service.editSpeedway(this.pista).subscribe((data) => {
        console.log(data);
      });
    } else {
      this.service.saveSpeedway(this.pista).subscribe((data) => {
        console.log(data);
      });
    }
    this.pista = {} as Speedway;
  }
}
