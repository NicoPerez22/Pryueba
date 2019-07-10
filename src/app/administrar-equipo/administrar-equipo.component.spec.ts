import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarEquipoComponent } from './administrar-equipo.component';

describe('AdministrarEquipoComponent', () => {
  let component: AdministrarEquipoComponent;
  let fixture: ComponentFixture<AdministrarEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrarEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
