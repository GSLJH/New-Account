import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTest2Component } from './angular-test2.component';

describe('AngularTest2Component', () => {
  let component: AngularTest2Component;
  let fixture: ComponentFixture<AngularTest2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularTest2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
