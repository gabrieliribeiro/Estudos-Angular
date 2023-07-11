import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-cp-form',
  templateUrl: './cp-form.component.html',
  styleUrls: ['./cp-form.component.scss']
})
export class CpFormComponent implements OnInit{
  public qt:number = 0;

  public medicamento = {
    nome: '',
    valor: 0
  }

  //Injeção de depedência do service
  constructor(private service: ServiceService){}

  public addItem(valor:string){
    return this.service.adiciona(valor);
  }

  ngOnInit(): void {
      this.service.emitEvent.subscribe({
        next:(res:number) => this.qt = res,
        error: (err:number) => this.qt = 0,
      });
  }
}
