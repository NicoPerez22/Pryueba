import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarlogoComponent } from './cambiarlogo.component';

describe('CambiarlogoComponent', () => {
  let component: CambiarlogoComponent;
  let fixture: ComponentFixture<CambiarlogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiarlogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarlogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
