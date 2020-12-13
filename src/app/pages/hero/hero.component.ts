import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroModel } from '../../models/hero.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero = new HeroModel();

  constructor() { }

  ngOnInit(): void {
  }

  saveHero(forma:NgForm){
    if(forma.invalid){
      console.log("Form no valid!");
      return;
    }
    console.log(forma.value);
    console.log(this.hero);
  }

}
