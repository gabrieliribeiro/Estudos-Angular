import { Component } from '@angular/core';

@Component({
  selector: 'app-cal-imc',
  templateUrl: './cal-imc.component.html',
  styleUrls: ['./cal-imc.component.scss'],
})
export class CalImcComponent {
  public name: String = '';
  public sexo: string = '';
  public peso: number = 0;
  public altura: number = 0;

  public mensagem: String = '';
  public situacao: String = '';

  public calculaImc(): void {
    const imc = this.calcula();
    const situacao = '';
    if (this.sexo == 'feminino') {
      this.situacao = this.imcFeminino(imc);
    } else {
      this.situacao = this.imcMasculino(imc);
    }

    const classificacao = document.getElementById(
      'dados'
    ) as HTMLTextAreaElement;

    let msg = `Nome: ${this.name}\nSexo: ${this.sexo}\nAltura: ${
      this.altura
    }\nPeso: ${this.peso}\nSeu IMC é: ${imc.toFixed(2)} e a situação dele é: ${this.situacao}`;

    classificacao.value = msg;
  }

  private calcula(): number {
    return Number(this.peso) / (Number(this.altura) * Number(this.altura));
  }

  private imcFeminino(imc: number): string {
    if (imc < 19.2) {
      return 'Abaixo do peso';
    } else if (imc >= 19.2 && imc < 25.9) {
      return 'Peso ideal';
    } else if (imc >= 25.9 && imc < 27.4) {
      return 'Acima do peso ideal';
    } else if (imc >= 27.4 && imc < 32.4) {
      return 'Obesidade';
    } else {
      return 'Obesidade Mórbida';
    }
  }

  private imcMasculino(imc: number): string {
    if (imc < 20.8) {
      return 'Abaixo do peso';
    } else if (imc >= 20.8 && imc < 26.5) {
      return 'Peso ideal';
    } else if (imc >= 26.5 && imc < 27.9) {
      return 'Acima do peso ideal';
    } else if (imc >= 27.9 && imc < 31.2) {
      return 'Obesidade';
    } else {
      return 'Obesidade Mórbida';
    }
  }
}