import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportarPartidoComponent } from './reportar-partido.component';

describe('ReportarPartidoComponent', () => {
  let component: ReportarPartidoComponent;
  let fixture: ComponentFixture<ReportarPartidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportarPartidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportarPartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
