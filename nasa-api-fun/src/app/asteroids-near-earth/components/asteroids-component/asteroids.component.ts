import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'asteroids-component',
  templateUrl: './asteroids.component.html',
  styleUrls: ['./asteroids.component.css']
})
export class AsteroidsComponent {

  @Input() asteroidsNearEarthInput: any[];
  expandedAsteroidView: boolean = false;
}
