import { Component, Input } from '@angular/core';

@Component({
  selector: 'individual-asteroid',
  templateUrl: './individual-asteroid.component.html',
  styleUrls: ['./individual-asteroid.component.css']
})
export class IndividualAsteroidComponent {
    @Input() individualNearEarthAsteroidInput: any;
}
