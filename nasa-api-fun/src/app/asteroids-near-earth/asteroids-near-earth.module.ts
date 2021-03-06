import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  

import { AsteroidsNearEarthContainerComponent } from './container/asteroids-near-earth-container.component';
import { HeaderComponent } from './components/header-component/header.component';
import { AsteroidsNearEarthService } from './asteroids-near-earth.service';
import { FooterComponent } from "./components/footer-component/footer.component";
import { EarthComponent } from "./components/earth-component/earth.component";
import { AsteroidsComponent } from "./components/asteroids-component/asteroids.component";
import { SorterComponent } from "./components/sorter-component/sorter.component";
import { AsteroidNameFormatterPipe } from "./custom-pipes/asteroid-name-formatter-pipe";
import { IndividualAsteroidComponent } from "./components/individual-asteroid-component/individual-asteroid.component";
import { AsteroidDimensionalFormatterPipe } from "./custom-pipes/asteroid-dimensional-formatter-pipe";
import { ChangeDisplayMetricsComponent } from "./components/change-display-metrics-component/change-display-metrics-component.component";
import { NoDangerousAsteroidsTodayComponent } from "./components/no-dangerous-asteroids-today/no-dangerous-asteroids-today.component";
import { EarthExplodedMessageComponent } from "./components/earth-exploded-message/earth-exploded-message.component";


export const COMPONENTSandPIPES = [
  AsteroidsNearEarthContainerComponent,
  EarthComponent,
  AsteroidsComponent,
  SorterComponent,
  ChangeDisplayMetricsComponent,
  IndividualAsteroidComponent,
  NoDangerousAsteroidsTodayComponent,
  EarthExplodedMessageComponent,
  AsteroidNameFormatterPipe,
  AsteroidDimensionalFormatterPipe
];

@NgModule({
  declarations: COMPONENTSandPIPES,
  imports: [
    HttpModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    AsteroidsNearEarthContainerComponent
  ],
  providers: [
    AsteroidsNearEarthService
  ]
})
export class AsteroidsNearEarthModule { }
