import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-model',
  templateUrl: './exemplo-model.component.html',
  styleUrls: ['./exemplo-model.component.scss']
})
export class ExemploModelComponent implements OnInit {
  title: string = 'Exemplo Model';
  titulos: string[] = [];
  
  constructor(){}

  ngOnInit(): void{

  }

  adicionarTitulo(): void {
    if (this.title.trim() !== '') {
      this.titulos.push(this.title);
      this.title = '';
    }
  }
}
