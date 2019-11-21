import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { C1Data } from 'src/app/models/C1Data';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-form-C1',
  templateUrl: './form-C1.component.html',
  styleUrls: ['./form-C1.component.css']
})
export class FormC1Component implements OnInit {
  @Input() c1Data: C1Data;
  listofLogoSize = ['Small', 'Medium', 'Large'];

  constructor() { }

  ngOnInit(): void {
  }

  onChangeLogoSize() {
    console.log(`C1 Logo size: ${this.c1Data.data.parameterValues['DE:Logo Size A1/CLP']}`);
  }

  onChangeLogo() {
    if (this.c1Data.data.parameterValues['DE:Logo required?'] === 'No') {
      this.c1Data.data.parameterValues['DE:Image path for logo'] = '';
    }
  }

  onChangeCallout() {
    if ((this.c1Data.data.parameterValues['DE:Sale Call-Out'] === 'Sale'
    || this.c1Data.data.parameterValues['DE:Sale Call-Out'] === 'No Sale')
    && this.c1Data.data.parameterValues['DE:Text for Sale Call-Out'] === '') {
      this.c1Data.data.parameterValues['DE:Text for Sale Call-Out'] = 'Call out goes here!';
    }
  }

  getBackgroundColor() {
    if (this.c1Data.data.parameterValues['DE:Background color behind text'] === 'White') {
      this.c1Data.data.parameterValues['DE:Hex #'] = '#FFFFFF';
    } else {
      this.c1Data.data.parameterValues['DE:Hex #'] = '#9e876b';
    }
  }

}
