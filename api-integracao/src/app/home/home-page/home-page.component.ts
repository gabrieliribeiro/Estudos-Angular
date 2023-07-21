import { Component } from '@angular/core';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  public email: string = "";
  public password: string = "";

  constructor(private service: HomeService){}

  public entrar(){
    this.service.getToken(this.email, this.password);
  }

}
