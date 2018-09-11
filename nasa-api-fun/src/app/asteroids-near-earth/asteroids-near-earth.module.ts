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

export const COMPONENTS = [
  AsteroidsNearEarthContainerComponent,
  HeaderComponent,
  FooterComponent,
  EarthComponent
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
