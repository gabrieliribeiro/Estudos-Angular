import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserServiceService } from '../../service/user-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
  
  constructor(private service: UserServiceService){}
  public users!: User[];

  public deleteItem(event: number) {
    return this.users.splice(event, 1);
  }

  ngOnInit(): void {
    this.service.getUser().subscribe((data) => {
      this.users = data;
    });
  }

}
