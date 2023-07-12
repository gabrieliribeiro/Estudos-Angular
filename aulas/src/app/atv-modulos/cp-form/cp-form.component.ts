import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Medicamento } from '../models/medicamento.model';

@Component({
  selector: 'app-cp-form',
  templateUrl: './cp-form.component.html',
  styleUrls: ['./cp-form.component.scss']
})
export class CpFormComponent{
  public medicamento: Medicamento = new Medicamento('', 0);

  constructor(private service: ServiceService) {}

  public adicionarMedicamento(): void {
    this.service.adiciona(this.medicamento);
    this.medicamento = new Medicamento('', 0);
  }
}
