import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-class',
  templateUrl: './exemplo-class.component.html',
  styleUrls: ['./exemplo-class.component.scss']
})
export class ExemploClassComponent{
  publication = {
    description: 'Clebinho está mandando um joinha para você! Favorite se gostou do Clebinho :)'
  };
  isFavorited = false;

  retornaImagem(): string {
    return "https://i0.wp.com/emotioncard.com.br/wp-content/uploads/2016/05/perfil-whatsapp.jpg?fit=600%2C600&ssl=1";
  }

  favorite(): string {
    return "https://img.icons8.com/?size=512&id=87&format=png";
  }

  notFavorited(): string {
    return "https://img.icons8.com/?size=512&id=7697&format=png";
  }

  toggleFavorite(): void {
    this.isFavorited = !this.isFavorited;
  }
}
