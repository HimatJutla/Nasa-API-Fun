import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  

import { PlanetViewerComponent } from './container/planet-viewer.component';
import { HeaderComponent } from './components/header-component/header.component';
import { PlanetViewerService } from './planet-viewer.service';

export const COMPONENTS = [
  PlanetViewerComponent,
  HeaderComponent

];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    HttpModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    PlanetViewerComponent
  ],
  providers: [
    PlanetViewerService
  ]
})
export class PlanetViewerModule { }
