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
  individualNearEarthAsteroid: any;
  expandedAsteroidViewBoolean: boolean = false;
  individualAstervoidViewFlag: boolean = false;
  userPreferredView: string = 'feet';
  sortTitle:string = 'SORT BY';
  sortFilterArray:string[] = [
    'Could Hit Earth',
    'Closest to Earth',
    'Fastest to Slowest',
    'Largest to Smallest'
];
sortCouldHitEarthArray: any[];
  

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
    this.expandedAsteroidViewBoolean = !this.expandedAsteroidViewBoolean;
    if (this.expandedAsteroidViewBoolean) {
      this.todayModified = this.today.getFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate();
      this.getMonthZeroed(this.todayModified);
      this.asteroidNearEarthArray = this.nearEarthAsteroids.near_earth_objects[this.todayFinalModification].map(function (index){
      return index;
    });
    console.log(this.asteroidNearEarthArray);
    }
  }

  handleOpenIndividualAsteroidExandedView(event) {
    this.individualNearEarthAsteroid = this.asteroidNearEarthArray.find((astroIndex) => {
      if (astroIndex.id == event) {
        return astroIndex;
      }
    });
    console.log(this.individualNearEarthAsteroid);
    this.individualAstervoidViewFlag = true;
  }

  handleDiameterChange(event: string) {
    if (event !== this.userPreferredView) {
      if (event === 'feet') {
        this.userPreferredView = 'feet';
      } else if (event === 'kilometers') {
        this.userPreferredView = 'kilometers';
      } else if ( event === 'meters') {
        this.userPreferredView = 'meters';
      } else {
        this.userPreferredView = 'miles';
      }
    }
  }

// NTS ->maybe just keep modifig the existing array instead of adding new ones
  handleSorting(event: string) {
    if (event === 'Could Hit Earth') {
      this.sortCouldHitEarthArray = this.asteroidNearEarthArray.map((index) => {
        if (index.is_potentially_hazardous_asteroid) {
          return index;
        }
        // make logic to return a message saying none are hazardous if none are
      });
      console.log(this.sortCouldHitEarthArray);
    } else if (event === 'Closest to Earth') {
      console.log(event);
    } else if (event === 'Fastest to Slowest') {
      console.log(event);
    } else if (event === 'Largest to Smallest') {
      console.log(event);
    } else {
      console.log('placeholder for remove all flters');
    }
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