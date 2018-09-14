import { Component } from '@angular/core';

@Component({
  selector: 'sorter-component',
  templateUrl: './sorter.component.html',
  styleUrls: ['./sorter.component.css']
})
export class SorterComponent {

  sortTitle:string = 'SORT BY';
  sortFilterArray:string[] = [
    'Is it Hazardous?',
    'Distance From Earth?'
  ]
}