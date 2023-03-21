import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angulartest4Component } from './angulartest4.component';

describe('Angulartest4Component', () => {
  let component: Angulartest4Component;
  let fixture: ComponentFixture<Angulartest4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Angulartest4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Angulartest4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
