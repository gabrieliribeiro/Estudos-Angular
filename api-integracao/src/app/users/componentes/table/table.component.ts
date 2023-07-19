import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserServiceService } from '../../service/user-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  constructor(private service: UserServiceService) {}
  public users!: User[];
  public token: string = 'Bearer ';

  ngOnInit(): void {
    this.service.getToken().subscribe((data) => {
      this.token += data;
      console.log(this.token);
      this.service.listAll().subscribe((data) => {
        this.users = data;
      });
    });
    
  }

  public deleteItem(user: User) {
    this.service.delete(user).subscribe(() => {
      this.service.listAll().subscribe((data) => {
        this.users = data;
      });
    });
  }

  public editaUser(user: User) {
    this.service.selectUser(user);
  }
}
