import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './components/contador/contador.component';
import { ListaCompraComponent } from './components/lista-compra/lista-compra.component';
import { FormsModule } from '@angular/forms';
import { MiListaComponent } from './pages/mi-lista/mi-lista.component';
import { MiContadorComponent } from './pages/mi-contador/mi-contador.component';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonCardV2Component } from './components/pokemon-card-v2/pokemon-card-v2.component';
import { EquipoPokemonComponent } from './pages/equipo-pokemon/equipo-pokemon.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ListaCompraComponent,
    MiListaComponent,
    MiContadorComponent,
    PokedexComponent,
    PokemonComponent,
    PokemonCardComponent,
    PokemonCardV2Component,
    EquipoPokemonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
