import { ComponentFixture, TestBed } from '@angular/core/testing';
import {paginaPokemon} from 'src/app/components/ejemplo-datos/pagina-pokemon';

import { PokedexComponent } from './pokedex.component';

describe('PokedexComponent', () => {
  let component: PokedexComponent;
  let fixture: ComponentFixture<PokedexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokedexComponent]
    });
    fixture = TestBed.createComponent(PokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
