import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jovemdev-title',
  templateUrl: './jovemdev-title.component.html',
  styleUrls: ['./jovemdev-title.component.scss']
})
export class JovemdevTitleComponent implements OnInit {
  
  public title: string = 'Jovem Dev';

  ngOnInit(): void {
    let hour = new Date().getHours();
    if (hour < 12) {
      this.title = this.title + " Matutino";
    }else{
      this.title = this.title + " Vespertino";
    }
  }
}
