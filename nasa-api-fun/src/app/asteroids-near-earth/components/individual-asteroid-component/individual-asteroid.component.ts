import { Component, Input } from '@angular/core';
import { Asteroid } from '../../models/asteroid-interface';

@Component({
  selector: 'individual-asteroid',
  templateUrl: './individual-asteroid.component.html',
  styleUrls: ['./individual-asteroid.component.css']
})
export class IndividualAsteroidComponent {
    @Input() individualNearEarthAsteroidInput: any;
}
