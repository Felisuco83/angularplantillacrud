import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasfuncionComponent } from './personasfuncion.component';

describe('PersonasfuncionComponent', () => {
  let component: PersonasfuncionComponent;
  let fixture: ComponentFixture<PersonasfuncionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonasfuncionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonasfuncionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
