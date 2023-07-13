import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Medicamento } from '../models/medicamento.model';

@Component({
  selector: 'app-cp-table',
  templateUrl: './cp-table.component.html',
  styleUrls: ['./cp-table.component.scss'],
})
export class CpTableComponent implements OnInit {
  public lista: Array<Medicamento> = [];

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.lista = this.service.getLista();
  }

   public setMedicamentoSelecionado(medicamento: any) {
    this.service.setMedicamentoSelecionado(medicamento);
  }
}
