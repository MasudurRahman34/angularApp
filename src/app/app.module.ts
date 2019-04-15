import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { PokemoneComponent } from './pokemone/pokemone.component';
import { DcComicsComponent } from './dc-comics/dc-comics.component';


import { RouterModule, Routes }   from '@angular/router';

const routeLists : Routes= [

	{path: "Pokemone", component:PokemoneComponent},
	{path: "DcComics", component:DcComicsComponent}
	
]

@NgModule({
  declarations: [
    AppComponent,
    PokemoneComponent,
    DcComicsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeLists)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
