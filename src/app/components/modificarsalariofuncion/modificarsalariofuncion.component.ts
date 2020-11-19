import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificarsalariofuncion',
  templateUrl: './modificarsalariofuncion.component.html',
  styleUrls: ['./modificarsalariofuncion.component.css'],
})
export class ModificarsalariofuncionComponent implements OnInit {
  public funciones: Array<string>;
  @ViewChild('funcion') funcion: ElementRef;
  @ViewChild('cantidad') cantidad: ElementRef;

  constructor(private _service: PersonaService, private _router: Router) {}

  modificarSalario() {
    this._service
      .modSalary(
        this.funcion.nativeElement.value,
        this.cantidad.nativeElement.value
      )
      .subscribe(
        (response) => {
          console.log(response);
          this._router.navigate(['/funcion', this.funcion.nativeElement.value]);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  ngOnInit(): void {
    this._service.getFunciones().subscribe(
      (resp) => {
        this.funciones = resp;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
