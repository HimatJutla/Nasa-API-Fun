import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'asteroids-component',
  templateUrl: './asteroids.component.html',
  styleUrls: ['./asteroids.component.css']
})
export class AsteroidsComponent implements OnInit {

  @Input() asteroidsNearEarthInput: any[];
  expandedAsteroidView: boolean = false;

  @Output()
  viewAsteroids: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {}

  toggleAsteroidsView() {
    this.expandedAsteroidView = !this.expandedAsteroidView;

    if (this.expandedAsteroidView) {
      this.viewAsteroids.emit();
    }
  }

}
