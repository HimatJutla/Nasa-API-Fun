import { Component, Input, Output, EventEmitter, OnInit, ViewEncapsulation } from '@angular/core';
import { AsteroidNameFormatterPipe } from "../../custom-pipes/asteroid-name-formatter-pipe";
import { AsteroidDimensionalFormatterPipe } from "../../custom-pipes/asteroid-dimensional-formatter-pipe";
import { Asteroid } from '../../models/asteroid-interface';

@Component({
  selector: 'asteroids-component',
  templateUrl: './asteroids.component.html',
  styleUrls: ['./asteroids.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AsteroidsComponent implements OnInit {

  @Input() asteroidsNearEarthInput: Array<Asteroid>;
  @Input() expandedAsteroidView: boolean;
  @Input() noPotentiallyHazardousAsteroidsFlag: boolean;
  @Input() displayViewAsteroidsButton: boolean;
  @Input() userDiameterPreferredView: string;
  @Input() userSpeedPreferredViewInput: string;
  @Input() userMissDistancePreferredViewInput: string;
  @Input() sortTitle:string;
  @Input() sortFilterArray:string[];

  closedButtonText: string = "View Asteroids Near Earth Today";
  openButtonText: string = "Scared? Close this view";

  @Output()
  viewAsteroids: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  unitFilterTypeChange: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  viewIndividualAsteroidExpandedView: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  sortingParamDefined: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {}

  toggleAsteroidsView() {
      this.viewAsteroids.emit();
  }

  openExpandedView(event, asteroidId) {
    this.viewIndividualAsteroidExpandedView.emit(asteroidId);
  }

  unitFilterDisplayChangeDisplay(event) {
    this.unitFilterTypeChange.emit(event);
  }

  sortingParamApplied(sortingParam: string) {
    this.sortingParamDefined.emit(sortingParam);
  }

}
