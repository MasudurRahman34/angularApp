import { Component, OnInit } from '@angular/core';
import {List} from './list';
import { HerosService } from './pokemone.service';



@Component({
  selector: 'app-pokemone',
  templateUrl: './pokemone.component.html',
  styleUrls: ['./pokemone.component.css'],
  providers: [HerosService]
})
export class PokemoneComponent implements OnInit {
	heros:string[];
	Name=List
	type= null
	getType(item){
	this.type=item.type
	}
	
	inputHero = null;
	btnDisable = false;
	Adding=false;
	changeHero(){
		this.heros.push(this.inputHero);
		this.Adding=false
	}
	addMore(){
		this.Adding=true
	}

  constructor(private ajax: HerosService) { 
   this.heros=this.ajax.heros
}
  ngOnInit() {
  }

}
