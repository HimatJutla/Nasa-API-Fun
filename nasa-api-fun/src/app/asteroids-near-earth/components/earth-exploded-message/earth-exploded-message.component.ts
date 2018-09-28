import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'earth-exploded-message',
  templateUrl: './earth-exploded-message.component.html',
  styleUrls: ['./earth-exploded-message.component.css']
})
export class EarthExplodedMessageComponent {

  @Output()
  restoreEarth: EventEmitter<any> = new EventEmitter<any>();

  saveThePlanet(event) {
    this.restoreEarth.emit();
  }

}
