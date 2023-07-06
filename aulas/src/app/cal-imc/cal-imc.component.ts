import { Component } from '@angular/core';

@Component({
  selector: 'app-cal-imc',
  templateUrl: './cal-imc.component.html',
  styleUrls: ['./cal-imc.component.scss']
})
export class CalImcComponent {
  public name: String = "";
  public sexo = document.querySelector('input[name="genero"]:checked');
  public peso: number = 0;
  public altura: number = 0;

  public imc: number = 0;
  public mensagem: String = "";
  public situacao: String = "";
  
  public calculaImc(){
    if (!isNaN(this.peso) && !isNaN(this.altura) && this.altura > 0) {
      this.imc = this.peso / (this.altura * this.altura);
        if (this.imc < 18.5) {
          this.situacao = "Abaixo do peso";
        } else if (this.imc >= 18.5 && this.imc < 25) {
          this.situacao = "Peso normal";
        } else if (this.imc >= 25 && this.imc < 30) {
          this.situacao = "Sobrepeso";
        } else if (this.imc >= 30 && this.imc < 35) {
          this.situacao =
          this.situacao = "Obesidade grau 1";
        } else if (this.imc >= 35 && this.imc < 40) {
          this.situacao =
          this.situacao = "Obesidade grau 2";
        } else {
        this.situacao = "Obesidade grau 3";
        }
        this.mensagem = `Seu IMC é: ${this.imc.toFixed(2)} (${this.situacao})`;
  }
}

public n2: number = 15;

public retornaImagem():string{
  if (this.n2 >0){
    return "https://w7.pngwing.com/pngs/996/981/png-transparent-osu-hearts-of-iron-iv-scp-foundation-reddit-video-game-mouth-smile-miscellaneous-game-people.png";
  }else{
    return "https://qph.cf2.quoracdn.net/main-qimg-67f647b57a99f2d0a72d37f0c0b8170a-lq";
  }
}
}
