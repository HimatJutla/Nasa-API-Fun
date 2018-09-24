import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AsteroidsNearEarthModule } from './asteroids-near-earth/asteroids-near-earth.module';
import { HeaderComponent } from "./asteroids-near-earth/components/header-component/header.component";
import { FooterComponent } from "./asteroids-near-earth/components/footer-component/footer.component";

const COMPONENTS = [
  HeaderComponent,
  FooterComponent
]

@NgModule({
  declarations: [
    AppComponent,
    COMPONENTS
  ],
  imports: [
    BrowserModule,
    AsteroidsNearEarthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
