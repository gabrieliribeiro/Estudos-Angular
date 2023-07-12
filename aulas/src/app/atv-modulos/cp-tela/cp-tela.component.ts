import { Component } from '@angular/core';
import { Medicamento } from '../models/medicamento.model';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-cp-tela',
  templateUrl: './cp-tela.component.html',
  styleUrls: ['./cp-tela.component.scss']
})
export class CpTelaComponent {
  public medicamento: Medicamento = new Medicamento('', 0);

  constructor(private service: ServiceService) {}

  public adicionarMedicamento(): void {
    this.service.adiciona(this.medicamento);
    this.medicamento = new Medicamento('', 0);
  }

  public carregarMedicamento(event: any): void {
    if (event instanceof Medicamento) {
      this.medicamento.nome = event.nome;
      this.medicamento.valor = event.valor;
    }
  }
  
}
