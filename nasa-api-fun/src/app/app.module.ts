import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AsteroidsNearEarthModule } from './asteroids-near-earth/asteroids-near-earth.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AsteroidsNearEarthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
