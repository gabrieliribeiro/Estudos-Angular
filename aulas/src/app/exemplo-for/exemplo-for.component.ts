import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-exemplo-for',
  templateUrl: './exemplo-for.component.html',
  styleUrls: ['./exemplo-for.component.scss']
})
export class ExemploForComponent {
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
    this.cardCriado = true;
  }

}
