import { Component, OnInit } from '@angular/core';
import { AsteroidsNearEarthService } from '../asteroids-near-earth.service';

@Component({
  selector: 'asteroids-near-earth-container-component',
  templateUrl: './asteroids-near-earth-container.component.html',
  styleUrls: ['./asteroids-near-earth-container.component.css']
})
export class AsteroidsNearEarthContainerComponent implements OnInit {
  nearEarthAsteroids: any;
  today = new Date();
  todayModified: any;
  todayFinalModification: any;
  asteroidNearEarthArray: any[];
  individualNearEarthAsteroid: any;
  expandedAsteroidViewBoolean: boolean = false;
  individualAstervoidViewFlag: boolean = false;
  userDiameterPreferredView: string = 'feet';
  userSpeedPreferredViewInput: string = 'kmh';
  sortTitle:string = 'SORT BY';
  sortFilterArray:string[] = [
    'Could Hit Earth',
    'Closest to Earth',
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
      alert("called");
      console.log(this.nearEarthAsteroids);
  }

  handleViewAsteroids(event) {
    this.expandedAsteroidViewBoolean = !this.expandedAsteroidViewBoolean;
    if (this.expandedAsteroidViewBoolean) {
      this.todayModified = this.today.getFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate();
      this.getMonthZeroed(this.todayModified);
      console.log(this.nearEarthAsteroids);
      this.asteroidNearEarthArray = this.nearEarthAsteroids.near_earth_objects[this.todayFinalModification].map(function (index){
      return index;
    });
    this.convertNeededStringToNumbers();
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
    if (event !== this.userDiameterPreferredView) {
      if (event === 'feet') {
        this.userDiameterPreferredView = 'feet';
      } else if (event === 'kilometers') {
        this.userDiameterPreferredView = 'kilometers';
      } else if ( event === 'meters') {
        this.userDiameterPreferredView = 'meters';
      } else {
        this.userDiameterPreferredView = 'miles';
      }
    }
  }

// NTS ->maybe just keep modifig the existing array instead of adding new ones && FINDD A WAY TO CONSOLDATE ALL SORTING ITO THE ASTEROID SRT COMPARE FUNC
  handleSorting(event: string) {

    if (event === 'Could Hit Earth') {
      this.callNearEarthAsteroidsService();
      this.asteroidNearEarthArray = this.asteroidNearEarthArray.map((index) => {
        if (index.is_potentially_hazardous_asteroid) {
          return index;
        }
      });
      console.log(this.asteroidNearEarthArray);
    }
    
    else if (event === 'Closest to Earth') {
      // this.callNearEarthAsteroidsService();
      // this.asteroidNearEarthArray = this.asteroidNearEarthArray.map((index) => {
      //   if (index.is_potentially_hazardous_asteroid) {
      //     return index;
      //   }
      // });
      console.log('Cloest');
    } 
    
    else if (event === 'Fastest to Slowest') {
      this.callNearEarthAsteroidsService();
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

  asteroidComparisonFunction(a, b) {
   if (a > b) {
    return 1;
   } else if (a < b) {
     return -1
   } else {
     return 0;
   }
  }

  convertNeededStringToNumbers() {
    this.asteroidNearEarthArray.map((index) => {
      index.speedKiloPerHour = Number(index.close_approach_data[0].relative_velocity.kilometers_per_hour);
      index.speedKiloPerSecond = Number(index.close_approach_data[0].relative_velocity.kilometers_per_second);
      index.speedMilesPerHour = Number(index.close_approach_data[0].relative_velocity.miles_per_hour);
      });
  }
}