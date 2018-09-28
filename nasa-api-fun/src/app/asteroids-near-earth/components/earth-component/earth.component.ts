import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'earth-component',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.css']
})
export class EarthComponent {

  @Input() explodeEarthFlag: boolean;
  @Input() displayNasaMessage: boolean;

  @Output()
  restoreEarth: EventEmitter<any> = new EventEmitter<any>();

  emitRestoreEarth(event) {
    this.restoreEarth.emit();
  }

}
