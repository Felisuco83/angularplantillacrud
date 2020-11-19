import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public personas: Array<Persona>;
  constructor(private _service: PersonaService) {}
  ngOnInit(): void {
    this._service.getAll().subscribe(
      (resp) => {
        this.personas = resp;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
