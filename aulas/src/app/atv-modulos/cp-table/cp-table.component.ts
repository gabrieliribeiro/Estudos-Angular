import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Medicamento } from '../models/medicamento.model';

@Component({
  selector: 'app-cp-table',
  templateUrl: './cp-table.component.html',
  styleUrls: ['./cp-table.component.scss'],
})
export class CpTableComponent implements OnInit {

  @Output() medicamentoSelecionado = new EventEmitter<Medicamento>(); // Evento de saída para notificar o componente pai

  public lista: Medicamento[] = [];

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.lista = this.service.getLista();
  }

  public selecionaMedicamento(event: number) {
    this.service.getMedicamento(event);
  }
}
