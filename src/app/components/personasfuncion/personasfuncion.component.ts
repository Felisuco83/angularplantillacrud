import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-personasfuncion',
  templateUrl: './personasfuncion.component.html',
  styleUrls: ['./personasfuncion.component.css'],
})
export class PersonasfuncionComponent implements OnInit {
  public personas: Array<Persona>;
  constructor(
    private _service: PersonaService,
    private _activeRoute: ActivatedRoute
  ) {}
  buscarFuncion(funcion: string) {
    this._service.getByFuncion(funcion).subscribe(
      (resp) => {
        this.personas = resp;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      this.buscarFuncion(params.funcion);
    });
  }
}
