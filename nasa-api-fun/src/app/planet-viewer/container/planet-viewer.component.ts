import { Component, OnInit } from '@angular/core';
import { PlanetViewerService } from '../planet-viewer.service';

@Component({
  selector: 'planet-viewer-component',
  templateUrl: './planet-viewer.component.html',
  styleUrls: ['./planet-viewer.component.css']
})
export class PlanetViewerComponent implements OnInit{
  planet: any;
  myTestFlag: boolean = false;

  constructor(private planetService: PlanetViewerService) {}
  ngOnInit() {
    this.planetService
      .getTestUrl()
      .subscribe((data: any) => this.planet = data);
  }

  logTestData() {
    console.log(this.planet);
    this.myTestFlag = true;
  }
}