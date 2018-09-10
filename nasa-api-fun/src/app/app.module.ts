import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PlanetViewerModule } from './planet-viewer/planet-viewer.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PlanetViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
