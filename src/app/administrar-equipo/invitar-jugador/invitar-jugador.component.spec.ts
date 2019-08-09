import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitarJugadorComponent } from './invitar-jugador.component';

describe('InvitarJugadorComponent', () => {
  let component: InvitarJugadorComponent;
  let fixture: ComponentFixture<InvitarJugadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitarJugadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitarJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
