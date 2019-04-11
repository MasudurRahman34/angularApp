import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemoneComponent } from './pokemone.component';

describe('PokemoneComponent', () => {
  let component: PokemoneComponent;
  let fixture: ComponentFixture<PokemoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
