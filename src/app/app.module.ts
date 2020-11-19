import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { PersonaService } from './services/persona.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { ModificarsalariofuncionComponent } from './components/modificarsalariofuncion/modificarsalariofuncion.component';
import { PersonasfuncionComponent } from './components/personasfuncion/personasfuncion.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, MenuComponent, DetallesComponent, ModificarsalariofuncionComponent, PersonasfuncionComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [PersonaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
