import { Component, OnInit } from '@angular/core';
import { PlanetViewerService } from '../planet-viewer.service';

@Component({
  selector: 'planet-viewer-component',
  templateUrl: './planet-viewer.component.html',
  styleUrls: ['./planet-viewer.component.css']
})
export class PlanetViewerComponent implements OnInit{
  nearEarthAsteroids: any;
  today = new Date();
  todayModified: any;
  todayFinalModification: any;
  myTestFlag: boolean = false;
  //nearEarthAsteroidsDisplay: any;

  constructor(private planetService: PlanetViewerService) {}
  ngOnInit() {
    this.planetService
      .getNearEarthAsteroids()
      .subscribe((data: any) => this.nearEarthAsteroids = data);
      this.todayModified = this.today.getFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate();
      this.getMonthZeroed(this.todayModified);

      // this.nearEarthAsteroidsDisplay = this.nearEarthAsteroids.this.todayFinalModification;
      // console.log(this.nearEarthAsteroidsDisplay);
  }

  logTestData() {
    console.log(this.nearEarthAsteroids);
    this.myTestFlag = true;
  }

  getMonthZeroed(date) {

    let originalDate = date;
    let monthCheck = date.charAt(5);
    let monthCheckIfOne = date.charAt(6);
    let position = 5;
    let zero = '0';
    
    if ((monthCheck >= 2 && monthCheck < 10) || (monthCheck == 1 && monthCheckIfOne == "-")) {
      let newModifiedDate = [originalDate.slice(0, position), zero, originalDate.slice(position)].join('');
      this.todayFinalModification = newModifiedDate;
    }

    console.log(this.todayFinalModification);
  }  
}