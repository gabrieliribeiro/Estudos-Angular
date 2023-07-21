import { Component } from '@angular/core';
import { CorridaDto } from '../../models/corrida-dto';
import { Speedway } from 'src/app/speedway/models/speedway';
import { Campeonato } from 'src/app/campeonato/models/campeonato';
import { CorridasService } from '../../service/corridas.service';
import { SpeedwayService } from 'src/app/speedway/services/speedway.service';
import { CampeonatoService } from 'src/app/campeonato/service/campeonato.service';

@Component({
  selector: 'app-corridas-form',
  templateUrl: './corridas-form.component.html',
  styleUrls: ['./corridas-form.component.scss']
})
export class CorridasFormComponent {

  public corrida = {} as CorridaDto;
  public pistas: Speedway[] = [];
  public campeonatos: Campeonato[] = [];


  constructor(private service: CorridasService, private pistaService: SpeedwayService, private campService: CampeonatoService ){}
  
  public insertCorrida(){

    const [ano, mes, dia] = this.corrida.data.split('-');
    const dataFormatada =  `${dia}-${mes}-${ano}`;
    this.corrida.data = dataFormatada;

    if(!this.corrida.id_pista){
      alert("Selecione uma pista antes de salvar");
      return
    }

    const pistaSelecionado = this.pistas.find(pistaEscolhida => pistaEscolhida.id === this.corrida.id_pista);
    if(pistaSelecionado) {
      this.corrida.id_pista = pistaSelecionado.id;
    }else {
      alert("Pista selecionada inválida");
      return;
    }

    if(!this.corrida.id_campeonato){
      alert("Selecione um campeonato antes de salvar");
      return
    }

    const campSelecionado = this.campeonatos.find(campeonatoEscolhido => campeonatoEscolhido.id === this.corrida.id_campeonato);
    if(campSelecionado) {
      this.corrida.id_campeonato = campSelecionado.id;
    }else {
      alert("Campeonato selecionado inválido");
      return;
    }


    if(this.corrida.id) {
      this.service.edit(this.corrida).subscribe((data) => {
        console.log(data);
      })
    } else {
      this.service.insert(this.corrida).subscribe((data) => {
        console.log(data);
      });
    }
    this.corrida = {} as CorridaDto;
  }

  ngOnInit(): void {
    this.service.selectCorridaEvent.subscribe((corrida: CorridaDto) => {
      this.corrida = corrida;
    });

    this.pistaService.listAll().subscribe((pistas: Speedway[]) => {
      this.pistas = pistas;
    });

    this.campService.listAll().subscribe((camp: Campeonato[]) => {
      this.campeonatos = camp;
    });

  }
}
