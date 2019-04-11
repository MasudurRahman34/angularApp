import { Component, OnInit } from '@angular/core';
import {List} from './list';


@Component({
  selector: 'app-pokemone',
  templateUrl: './pokemone.component.html',
  styleUrls: ['./pokemone.component.css']
})
export class PokemoneComponent implements OnInit {

	Name=List
  constructor() { }

  ngOnInit() {
  }

}
