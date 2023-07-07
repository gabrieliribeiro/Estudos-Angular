import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-for',
  templateUrl: './exemplo-for.component.html',
  styleUrls: ['./exemplo-for.component.scss']
})
export class ExemploForComponent {
  nameSelected : string = "";
  roleSelected: string = "";


  users = [
    { name: 'João', role: 'Administrador' },
    { name: 'Maria', role: 'Moderador' },
    { name: 'Pedro', role: 'Usuário' }
  ];

  getUserClass(role: string) {
    switch (role) {
      case 'Administrador':
        return 'admin';
      case 'Moderador':
        return 'moderator';
      case 'Usuário':
        return 'user';
      default:
        return '';
    }
  }

  changeBackground(user: any) {
    this.nameSelected = user.name;
    this.roleSelected = user.role;
  }
}
