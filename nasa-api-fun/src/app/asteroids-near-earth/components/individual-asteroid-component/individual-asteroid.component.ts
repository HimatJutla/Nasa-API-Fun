import { Component, Input, OnInit } from '@angular/core';
import { Asteroid } from '../../models/asteroid-interface';
import { AsteroidNameFormatterPipe } from "../../custom-pipes/asteroid-name-formatter-pipe";
import { AsteroidDimensionalFormatterPipe } from "../../custom-pipes/asteroid-dimensional-formatter-pipe";

@Component({
  selector: 'individual-asteroid',
  templateUrl: './individual-asteroid.component.html',
  styleUrls: ['./individual-asteroid.component.css']
})
export class IndividualAsteroidComponent implements OnInit {
    @Input() individualNearEarthAsteroid: Asteroid;

    ngOnInit() {
      console.log('IVC:::', this.individualNearEarthAsteroid);
    }
}
