import { Component } from '@angular/core';
import { SpeedwayService } from '../../services/speedway.service';
import { Speedway } from '../../models/speedway';

@Component({
  selector: 'app-speedway-table',
  templateUrl: './speedway-table.component.html',
  styleUrls: ['./speedway-table.component.scss']
})
export class SpeedwayTableComponent {
  constructor(private service: SpeedwayService){}

  public pistas!: Speedway[];
  

  ngOnInit(): void {
    this.service.listAll().subscribe((data) => {
      this.pistas = data;
    });
  }

}
