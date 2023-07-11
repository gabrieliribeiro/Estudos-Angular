import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public emitEvent = new EventEmitter();

  private lista: Array<string> = [];

  public getLista(){
    return this.lista;
  }

  public adiciona(valor:string){
    this.lista.push(valor);
    this.emitEvent.emit(this.lista.length);
    return this.lista;
  }

  constructor(){}
}
