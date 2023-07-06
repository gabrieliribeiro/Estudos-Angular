import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-binding',
  templateUrl: './exemplo-binding.component.html',
  styleUrls: ['./exemplo-binding.component.scss']
})
export class ExemploBindingComponent {
  public n1: number = 20
  public n2: number = 15;

  public alteraValores() {
    if (this.n1 == 10){
      this.n1 = 20;
      this.n2 = 25;
    }else{
      this.n1 = 10;
      this.n2 = 15;
    }
  }
  public diminuiN1() {
    --this.n1; 
  }

public retornaImagem():string{
    if (this.n1 >0){
      return "https://w7.pngwing.com/pngs/996/981/png-transparent-osu-hearts-of-iron-iv-scp-foundation-reddit-video-game-mouth-smile-miscellaneous-game-people.png";
    }else{
      return "https://qph.cf2.quoracdn.net/main-qimg-67f647b57a99f2d0a72d37f0c0b8170a-lq";
    }
  }
}
