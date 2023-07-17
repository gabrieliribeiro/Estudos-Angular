import { Component } from '@angular/core';
import { UserServiceService } from '../../service/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  constructor(private service: UserServiceService){}

  public getUsers(){
    this.service.getUser().subscribe((data)=>{
      console.log(data);
    });
  }
}
