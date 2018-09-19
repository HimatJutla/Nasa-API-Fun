import { Component, OnInit } from '@angular/core';
import { AsteroidsNearEarthService } from '../asteroids-near-earth.service';
import { Asteroid } from '../models/asteroid-interface';

@Component({
  selector: 'asteroids-near-earth-container-component',
  templateUrl: './asteroids-near-earth-container.component.html',
  styleUrls: ['./asteroids-near-earth-container.component.css']
})
export class AsteroidsNearEarthContainerComponent implements OnInit {
  nearEarthAsteroids: Array<Asteroid>;
  today = new Date();
  todayModified: any;
  todayFinalModification: any;
  asteroidNearEarthArray: Array<Asteroid>;
  individualNearEarthAsteroid: Asteroid;
  expandedAsteroidViewBoolean: boolean = false;
  individualAstervoidViewFlag: boolean = false;
  noPotentiallyHazardousAsteroidsFlag: boolean = false;
  userDiameterPreferredView: string = 'feet';
  userSpeedPreferredViewInput: string = 'kmh';
  userMissDistancePreferredViewInput: string = 'kilometers';
  explodeEarthFlag: boolean = false;
  sortTitle:string = 'SORT BY';
  sortFilterArray:string[] = [
    'Potentially Dangerous',
    'Closest Miss Distance',
    'Fastest to Slowest',
    'Largest to Smallest'
];
// sortCouldHitEarthArray: any[];
  

  constructor(private asteroidsNearEarthService: AsteroidsNearEarthService) {}
  ngOnInit() {
      this.callNearEarthAsteroidsService();
  }

  callNearEarthAsteroidsService() {
    this.asteroidsNearEarthService
      .getNearEarthAsteroids()
      .subscribe((data: any) => this.nearEarthAsteroids = data);
      console.log(this.nearEarthAsteroids);
  }

  handleViewAsteroids(event) {
    this.expandedAsteroidViewBoolean = !this.expandedAsteroidViewBoolean;
    if (this.expandedAsteroidViewBoolean) {
      this.createPresentationalArrayObject();
      console.log(this.asteroidNearEarthArray);
    } else {
      this.explodeEarth();
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
    console.log(this.individualAstervoidViewFlag);
  }

  handleUnitFilterChange(event: any) {

    console.log('Filters:::', event.filter, event.unit);

    if (event.filter === 'diameter') {
      if (event.unit !== this.userDiameterPreferredView) {
        if (event.unit === 'feet') {
          this.userDiameterPreferredView = 'feet';
        } else if (event.unit === 'kilometers') {
          this.userDiameterPreferredView = 'kilometers';
        } else if (event.unit === 'meters') {
          this.userDiameterPreferredView = 'meters';
        } else {
          this.userDiameterPreferredView = 'miles';
        }
      }
    }

    else if (event.filter === 'speed') {
      if (event.unit !== this.userSpeedPreferredViewInput) {
         if (event.unit === 'kmh') {
          this.userSpeedPreferredViewInput = 'kmh';
        } else if (event.unit === 'kms') {
          this.userSpeedPreferredViewInput = 'kms';
        }  else {
          this.userSpeedPreferredViewInput = 'mph';
        }
      }
    }

    else {
      if (event.unit !== this.userMissDistancePreferredViewInput) {
         if (event.unit === 'kilometers') {
          this.userMissDistancePreferredViewInput = 'kilometers';
        } else {
          this.userMissDistancePreferredViewInput = 'miles';
        }
      }
    }
  }

  handleSorting(event: string) {
    this.callNearEarthAsteroidsService();
    if (event === 'Potentially Dangerous') {
      this.asteroidNearEarthArray = this.asteroidNearEarthArray.filter((index) => {
          return index.is_potentially_hazardous_asteroid;
      });
      console.log(this.asteroidNearEarthArray);
      if (this.asteroidNearEarthArray.length == 0) {
        this.noPotentiallyHazardousAsteroidsFlag = true;
      }
    }
    
    else if (event === 'Closest Miss Distance') {
      this.noPotentiallyHazardousAsteroidsFlag = false;
      this.createPresentationalArrayObject();
      this.asteroidNearEarthArray = this.asteroidNearEarthArray.sort((a,b) => {
        if (a.close_approach_data[0].miss_distance.kilometers > b.close_approach_data[0].miss_distance.kilometers) {
          return 1;
        } else if (a.close_approach_data[0].miss_distance.kilometers < b.close_approach_data[0].miss_distance.kilometers) {
          return -1
        } else {
          return 0;
        }
      });
      console.log(this.asteroidNearEarthArray);
    } 
    
    else if (event === 'Fastest to Slowest') {
      this.noPotentiallyHazardousAsteroidsFlag = false;
      this.createPresentationalArrayObject();
      this.asteroidNearEarthArray = this.asteroidNearEarthArray.sort((a,b) => {
        if (a.close_approach_data[0].relative_velocity.kilometers_per_hour > b.close_approach_data[0].relative_velocity.kilometers_per_hour) {
          return -1;
        } else if (a.close_approach_data[0].relative_velocity.kilometers_per_hour < b.close_approach_data[0].relative_velocity.kilometers_per_hour) {
          return 1
        } else {
          return 0;
        }
      });
      console.log(this.asteroidNearEarthArray);
    } 
    
    else if (event === 'Largest to Smallest') {
      this.noPotentiallyHazardousAsteroidsFlag = false;
      this.createPresentationalArrayObject();
      this.asteroidNearEarthArray = this.asteroidNearEarthArray.sort((a,b) => {
        if (a.estimated_diameter.feet.estimated_diameter_max > b.estimated_diameter.feet.estimated_diameter_max) {
          return -1;
        } else if (a.estimated_diameter.feet.estimated_diameter_max < b.estimated_diameter.feet.estimated_diameter_max) {
          return 1
        } else {
          return 0;
        }
      });
      console.log(this.asteroidNearEarthArray);
    } 
    
    else {
      this.callNearEarthAsteroidsService();
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

  createPresentationalArrayObject() {
    this.todayModified = this.today.getFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate();
      this.getMonthZeroed(this.todayModified);
      console.log("nea",this.nearEarthAsteroids);
      this.asteroidNearEarthArray = this.nearEarthAsteroids.near_earth_objects[this.todayFinalModification].map(function (index){
      return index;
    });
    this.convertNeededStringToNumbers();
  }

  convertNeededStringToNumbers() {
    this.asteroidNearEarthArray.map((index) => {
      index.speedKiloPerHour = Number(index.close_approach_data[0].relative_velocity.kilometers_per_hour);
      index.speedKiloPerSecond = Number(index.close_approach_data[0].relative_velocity.kilometers_per_second);
      index.speedMilesPerHour = Number(index.close_approach_data[0].relative_velocity.miles_per_hour);
      index.missDistanceKm = Number(index.close_approach_data[0].miss_distance.kilometers);
      index.missDistanceMiles = Number(index.close_approach_data[0].miss_distance.miles);
      });
  }

  explodeEarth() {
    this.explodeEarthFlag = true;
  }
}