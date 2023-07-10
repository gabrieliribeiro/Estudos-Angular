import { Component } from '@angular/core';

interface Pessoa {
  nome: string;
  funcao: string;
  fotoUrl: string;
}

@Component({
  selector: 'app-exemplo-for',
  templateUrl: './exemplo-for.component.html',
  styleUrls: ['./exemplo-for.component.scss']
})
export class ExemploForComponent {
  nomeTime: string = '';
  corTime: string = '';
  nomePessoa: string = '';
  funcaoPessoa: string = '';
  fotoPessoa: File | null = null;
  pessoas: Pessoa[] = [];

  cadastrarTime() {
    // Lógica para cadastrar o time no servidor ou armazenar localmente
    console.log('Time cadastrado:', this.nomeTime, this.corTime);
  }

  cadastrarPessoa() {
    if (this.fotoPessoa) {
      // Lógica para fazer upload da foto da pessoa e obter a URL
      const fotoUrl = 'https://example.com/foto-pessoa.jpg';

      const pessoa: Pessoa = {
        nome: this.nomePessoa,
        funcao: this.funcaoPessoa,
        fotoUrl: fotoUrl
      };

      this.pessoas.push(pessoa);

      // Limpar os campos do formulário
      this.nomePessoa = '';
      this.funcaoPessoa = '';
      this.fotoPessoa = null;

      console.log('Pessoa cadastrada:', pessoa);
    }
  }

  handleFotoUpload(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.fotoPessoa = inputElement.files[0];
    }
  }
}
