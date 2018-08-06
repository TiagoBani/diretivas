import { DiretivaNgifService } from './diretiva-ngif.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {
  teste: String;

  constructor(private service: DiretivaNgifService) {
    this.teste = this.service.getService();
  }

  ngOnInit() {
  }

}
