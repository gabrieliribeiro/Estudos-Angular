import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../service/user-service.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  public users!: User[];
  public user = {} as User;

  constructor(private service: UserServiceService) {}

  ngOnInit(): void {
    this.service.emitEvent.subscribe((data) => {
      this.user = data;
    });
  }

  //esse é um evento assincrono
  public getUserByName() {
    this.service.getUsersByName(this.user.name).subscribe((data) => {
      this.users = data;
    });
  }

  public insertUser(){
    if(this.user.id) {
      this.service.editUser(this.user).subscribe((data) => {
        console.log(data);
      })
    } else {
      this.service.saveUser(this.user).subscribe((data) => {
        console.log(data);
      });
    }
    this.user = {} as User;
  }
}
