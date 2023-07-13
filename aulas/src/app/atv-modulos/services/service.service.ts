import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public emitEvent = new EventEmitter();

  private lista: Array<any> = [];
  private medicamentoSelecionado: any = null;

  public getLista(): Array<any> {
    return this.lista;
  }

  public adiciona(medicamento: any): void {
    this.lista.push(medicamento);
    this.emitEvent.emit(this.lista.length);
  }

  public setMedicamentoSelecionado(medicamento: any): void {
    this.medicamentoSelecionado = medicamento;
  }

  public getMedicamentoSelecionado(): any {
    return this.medicamentoSelecionado;
  }

  constructor() {}
}
