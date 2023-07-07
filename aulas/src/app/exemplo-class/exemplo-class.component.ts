import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-class',
  templateUrl: './exemplo-class.component.html',
  styleUrls: ['./exemplo-class.component.scss']
})
export class ExemploClassComponent implements OnInit{
    buttonClass: String = '';

    ngOnInit(){
      setInterval(()=>{
        this.changeButton();
      },1000)
    }

    changeButton(){
      this.buttonClass = this.buttonClass === 'yellow'?'black':'yellow';
    }
}
