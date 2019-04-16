import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { ServerService } from './server.service';
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
    RouterModule.forRoot(routeLists),
    HttpModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
