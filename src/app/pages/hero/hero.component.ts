import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroModel } from '../../models/hero.model';
import { HerosService } from '../../services/heros.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero = new HeroModel();

  constructor(private herosService: HerosService ) { }

  ngOnInit(): void {
  }

  saveHero(forma:NgForm){
    if(forma.invalid){
      console.log("Form no valid!");
      return;
    }

    Swal.fire({
      icon : 'info',
      title: 'Wait',
      text: 'Saving data',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let request : Observable<any>;

    if (this.hero.id){
      request =  this.herosService.updateHero(this.hero); // all objects in Javascript are passed by reference
    }else{
      request= this.herosService.createHero(this.hero); // all objects in Javascript are passed by reference
    }
    request.subscribe(resp =>{
      Swal.fire({
        icon : 'success',
        title: this.hero.name,
        text: 'Updated successfuly'
      });
    });
  }

}
