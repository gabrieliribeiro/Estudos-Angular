import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Medicamento } from '../models/medicamento.model';

@Component({
  selector: 'app-cp-form',
  templateUrl: './cp-form.component.html',
  styleUrls: ['./cp-form.component.scss'],
})
export class CpFormComponent implements OnInit {
  public nome: string = '';
  public valor: string = '';

  public medicamento: any = {};

  constructor(private service: ServiceService) {}

  public adicionarMedicamento(nome: string, valor: string) {
    this.service.adiciona(nome, valor);
    this.limpaLista();
  }

  limpaLista() {
    this.medicamento = {};
  }

  ngOnInit(): void {
    this.service.emitMedicamentoEvent.subscribe((medicamento: Medicamento) => {
      this.medicamento = medicamento;
    });
  }
}
