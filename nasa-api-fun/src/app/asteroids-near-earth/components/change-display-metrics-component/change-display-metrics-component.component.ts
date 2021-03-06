import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'change-display-metrics-component',
  templateUrl: './change-display-metrics-component.component.html',
  styleUrls: ['./change-display-metrics-component.component.css']
})
export class ChangeDisplayMetricsComponent {

  @Input() userDiameterPreferredView: string;
  @Input() userSpeedPreferredViewInput: string;
  @Input() userMissDistancePreferredViewInput: string;

  @Output()
  unitFilterTypeChange: EventEmitter<any> = new EventEmitter<any>();

  displayUnitChanged($event, filter: string, unit: string) {
    let unitAndFilterToEmit = {
      filter: filter,
      unit: unit
    };
    this.unitFilterTypeChange.emit(unitAndFilterToEmit);
  }
}
