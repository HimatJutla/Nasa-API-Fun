import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  

import { AsteroidsNearEarthContainerComponent } from './container/asteroids-near-earth-container.component';
import { HeaderComponent } from './components/header-component/header.component';
import { AsteroidsNearEarthService } from './asteroids-near-earth.service';

export const COMPONENTS = [
  AsteroidsNearEarthContainerComponent,
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
    AsteroidsNearEarthContainerComponent
  ],
  providers: [
    AsteroidsNearEarthService
  ]
})
export class AsteroidsNearEarthModule { }
