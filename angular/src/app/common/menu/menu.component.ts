import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/primeng";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Home'

      },
      {
        label: 'O Curso'
      },
      {
        label: 'Oportunidades'
      },
      {
        label: 'Projetos'
      },
      {
        label: 'Spotted'
      },
      {
        label: 'Ouvidoria'
      }
    ];
  }

}
