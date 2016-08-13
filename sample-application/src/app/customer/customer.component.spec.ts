/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { CustomerComponent } from './customer.component';

describe('Component: Customer', () => {
  it('should create an instance', () => {
    let component = new CustomerComponent();
    expect(component).toBeTruthy();
  });
});
