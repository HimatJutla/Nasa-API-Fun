import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { AsteroidNameFormatterPipe } from "../../custom-pipes/asteroid-name-formatter-pipe";
import { AsteroidDiameterFormatterPipe } from "../../custom-pipes/asteroid-diameter-formatter-pipe";

@Component({
  selector: 'asteroids-component',
  templateUrl: './asteroids.component.html',
  styleUrls: ['./asteroids.component.css']
})
export class AsteroidsComponent implements OnInit {

  @Input() asteroidsNearEarthInput: any[];
  @Input() expandedAsteroidView: boolean;
  @Input() userPreferredViewInput: string;
  @Input() individualNearEarthAsteroidInput: any;
  @Input() individualAstervoidViewFlagInput: boolean;
  @Input() sortTitle:string;
  @Input() sortFilterArray:string[];

  closedButtonText: string = "View Asteroids Near Earth Today";
  openButtonText: string = "Scared? Close this view";

  @Output()
  viewAsteroids: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  diameterTypeChange: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  viewIndividualAsteroidExpandedView: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  sortingParamDefined: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    console.log(this.userPreferredViewInput);
  }

  toggleAsteroidsView() {
      this.viewAsteroids.emit();
  }

  openExpandedView(event, asteroidId) {
    this.viewIndividualAsteroidExpandedView.emit(asteroidId);
  }

  diameterUnitDisplay(event, unit: string) {
    this.diameterTypeChange.emit(unit);
  }

  sortingParamApplied(sortingParam: string) {
    this.sortingParamDefined.emit(sortingParam);
  }

}
