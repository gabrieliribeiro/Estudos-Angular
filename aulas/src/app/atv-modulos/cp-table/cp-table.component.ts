import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Medicamento } from '../models/medicamento.model';

@Component({
  selector: 'app-cp-table',
  templateUrl: './cp-table.component.html',
  styleUrls: ['./cp-table.component.scss']
})
export class CpTableComponent {
  public lista: Array<Medicamento> = [];

  constructor(private service: ServiceService) {
    this.lista = this.service.getLista();
  }

  public carregarMedicamento(item: Medicamento): void {
    this.service.emitEvent.emit(item);
  }  
  
} 
