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
  public pais= {} as Pais;
  public pistas!: Speedway[];
  public pista = {} as Speedway;
  public paises: Pais[] = [];

  constructor(private service: SpeedwayService, private paisService: PaisService){}


  public insertPista(){
    if(!this.pista.pais){
      alert("Selecione um país para salvar");
      return
    }

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

  ngOnInit(): void {
    this.service.selectSpeedwayEvent.subscribe((pista: Speedway)=>{
      this.pista = pista;
      this.pais = pista.pais;
    });

    this.paisService.listAll().subscribe((paises: Pais[])=>{
      this.paises = paises;
    })
  }
}
