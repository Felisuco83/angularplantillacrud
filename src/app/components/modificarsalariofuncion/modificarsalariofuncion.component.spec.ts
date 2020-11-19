import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarsalariofuncionComponent } from './modificarsalariofuncion.component';

describe('ModificarsalariofuncionComponent', () => {
  let component: ModificarsalariofuncionComponent;
  let fixture: ComponentFixture<ModificarsalariofuncionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarsalariofuncionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarsalariofuncionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
