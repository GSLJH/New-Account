import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angulartest3Component } from './angulartest3.component';

describe('Angulartest3Component', () => {
  let component: Angulartest3Component;
  let fixture: ComponentFixture<Angulartest3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Angulartest3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Angulartest3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
