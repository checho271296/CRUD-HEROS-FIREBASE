import { Component, OnInit } from '@angular/core';


import { HeroModel } from 'src/app/models/hero.model';
import { HerosService } from '../../services/heros.service';


import Swal from 'sweetalert2';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heros : HeroModel[] = [];
  loading = false;
  constructor(private herosService: HerosService) { }

  ngOnInit(): void {
    this.loading = true;
    this.herosService.getHeros()
    .subscribe(res =>{
    
      this.loading = false;
      this.heros = res;
      
    });
  }

  deleteHero(hero:HeroModel,i : number){
    Swal.fire({
      icon : 'error',
      title: 'Are you sure',
      text: `you want to delete ${hero.name} ?`,
      showConfirmButton: true,
      showCancelButton: true
    }).then( res =>{
      if(res.value){
        this.herosService.deleteHero(hero.id)
          .subscribe(res =>{
             Swal.fire({
              icon : 'success',
              title: 'Hero',
              text: 'Deleted',
              allowOutsideClick: true
              });
          this.heros.splice(i,1);
         });
      }
    });
  }

}
