import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { ModificarsalariofuncionComponent } from './components/modificarsalariofuncion/modificarsalariofuncion.component';
import { PersonasfuncionComponent } from './components/personasfuncion/personasfuncion.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detalles/:idpersona', component: DetallesComponent },
  { path: 'modificar', component: ModificarsalariofuncionComponent },
  { path: 'funcion/:funcion', component: PersonasfuncionComponent },
  // { path: 'modificar/:iddepartamento', component: ModificarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
