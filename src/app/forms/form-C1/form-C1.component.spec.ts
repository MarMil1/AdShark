/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormC1Component } from './form-C1.component';

describe('FormC1Component', () => {
  let component: FormC1Component;
  let fixture: ComponentFixture<FormC1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormC1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
