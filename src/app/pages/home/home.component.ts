import { Component, OnInit } from '@angular/core';
import { GrupodeservicesService } from '../serviços/grupodeservices.service';
GrupodeservicesService
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private service: GrupodeservicesService) {}
  grupoData:any;


  ngOnInit(): void {

    this.grupoData = this.service.grupoServices;
  }



}
