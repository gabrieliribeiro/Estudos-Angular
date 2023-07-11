import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Colaborador {
  nome: string;
  cargo: string;
  time: string;
  imagemNome: string;
  imagemURL: string;
}

@Component({
  selector: 'app-exemplo-for',
  templateUrl: './exemplo-for.component.html',
  styleUrls: ['./exemplo-for.component.scss']
})
export class ExemploForComponent {
  colaboradores: Colaborador[] = [];
  nome: string = '';
  cargo: string = '';
  time: string = '';
  imagemNome: string ='';
  imagemURL: string = '';
  cardCriado: boolean = false;

  itens: string[] = ['DevOps', 'Front-End', 'Back-End', 'FullStack'];

  handleFileInput(event: any) {
    const file = event.target.files[0];
    this.imagemNome = file ? file.name : '';
    this.createImageURL(file);
  }

  createImageURL(file: File) {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imagemURL = event.target.result;
    };
    reader.readAsDataURL(file);
  }

  criarCard() {
    const novoColaborador: Colaborador = {
      nome: this.nome,
      cargo: this.cargo,
      time: this.time,
      imagemNome: this.imagemNome,
      imagemURL: this.imagemURL
    };

    this.colaboradores.push(novoColaborador);

    this.nome = '';
    this.cargo = '';
    this.time = '';
    this.imagemNome = '';
    this.imagemURL = '';
  }

}
