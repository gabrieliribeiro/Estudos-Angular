import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../service/user-service.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  public id: number = 0;

  public user: any = {};

  constructor(private service: UserServiceService){}
  public users!: User[];

  public adicionaUser(id: number, name: string, email: string, password:string, roles: string){
    this.service.adiciona(id, name, email, password, roles);
    console.log(this.user)
    this.limpa();
  }

  public limpa(){
    this.user={};
  }

  ngOnInit(): void {
    this.service.emitEvent.subscribe((usuario: User) => {
      this.user = usuario;
    });
  }
}
