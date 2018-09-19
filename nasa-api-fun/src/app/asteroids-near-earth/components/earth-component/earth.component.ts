import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'earth-component',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.css']
})
export class EarthComponent {
  @Input() explodeEarthFlag: boolean;

}
