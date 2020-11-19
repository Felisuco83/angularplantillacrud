import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { Persona } from '../../models/persona';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css'],
})
export class DetallesComponent implements OnInit {
  public persona: Persona;
  constructor(
    private _service: PersonaService,
    private _activeRoute: ActivatedRoute
  ) {}
  buscarPersona(id: string) {
    this._service.getOne(id).subscribe(
      (resp) => {
        this.persona = resp;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      this.buscarPersona(params.idpersona);
    });
  }
}
