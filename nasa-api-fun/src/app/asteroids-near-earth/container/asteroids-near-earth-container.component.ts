import { Component, OnInit } from '@angular/core';
import { AsteroidsNearEarthService } from '../asteroids-near-earth.service';

@Component({
  selector: 'asteroids-near-earth-container-component',
  templateUrl: './asteroids-near-earth-container.component.html',
  styleUrls: ['./asteroids-near-earth-container.component.css']
})
export class AsteroidsNearEarthContainerComponent implements OnInit{
  nearEarthAsteroids: any;
  today = new Date();
  todayModified: any;
  todayFinalModification: any;
  asteroidNearEarthArray: any[];

  constructor(private asteroidsNearEarthService: AsteroidsNearEarthService) {}
  ngOnInit() {
      this.callNearEarthAsteroidsService();
  }

  callNearEarthAsteroidsService() {
    this.asteroidsNearEarthService
      .getNearEarthAsteroids()
      .subscribe((data: any) => this.nearEarthAsteroids = data);
  }

  handleViewAsteroids(event) {
    this.todayModified = this.today.getFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate();
    this.getMonthZeroed(this.todayModified);
    this.asteroidNearEarthArray = this.nearEarthAsteroids.near_earth_objects[this.todayFinalModification].map(function (index){
      return index;
    });
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
  }
}