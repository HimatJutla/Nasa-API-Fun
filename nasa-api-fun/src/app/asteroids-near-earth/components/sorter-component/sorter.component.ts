import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sorter-component',
  templateUrl: './sorter.component.html',
  styleUrls: ['./sorter.component.css']
})
export class SorterComponent {

  @Input() sortTitle:string;
  @Input() sortFilterArray:string[];

  @Output()
  sortingParamDefined: EventEmitter<any> = new EventEmitter<any>();

  sortingParamApplied(event, sortParam: string) {
    this.sortingParamDefined.emit(sortParam);
  }
}