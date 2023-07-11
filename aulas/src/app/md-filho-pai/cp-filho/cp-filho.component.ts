import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cp-filho',
  templateUrl: './cp-filho.component.html',
  styleUrls: ['./cp-filho.component.scss']
})
export class CpFilhoComponent {
  @Output() public emiteEventoPai = new EventEmitter();

  public sorteiaNumero(){
    let numero = Math.floor(Math.random() * 100 + 1);
    this.emiteEventoPai.emit(numero)
  }
}
