import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { AsteroidNameFormatterPipe } from "../../custom-pipes/asteroid-name-formatter-pipe";

@Component({
  selector: 'asteroids-component',
  templateUrl: './asteroids.component.html',
  styleUrls: ['./asteroids.component.css']
})
export class AsteroidsComponent implements OnInit {

  @Input() asteroidsNearEarthInput: any[];
  expandedAsteroidView: boolean = false;
  closedButtonText: string = "View Asteroids Near Earth Today";
  openButtonText: string = "Scared? Close this view"; 

  @Output()
  viewAsteroids: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
  }

  toggleAsteroidsView() {

    this.expandedAsteroidView = !this.expandedAsteroidView;

    if (this.expandedAsteroidView) {
      this.viewAsteroids.emit();
    }
  }

}
