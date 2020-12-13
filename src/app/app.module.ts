import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HerosComponent } from './pages/heros/heros.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HerosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
