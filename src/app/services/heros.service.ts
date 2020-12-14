import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroModel } from '../models/hero.model';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HerosService {

  private url = "https://crud-heros-6b9ab-default-rtdb.firebaseio.com";
  constructor(private httpClient: HttpClient) { }

  createHero(hero: HeroModel){
    return this.httpClient.post(`${this.url}/heros.json`,hero)
    .pipe(
      map((resp:any) => {
        hero.id = resp.name
        return hero
      })
    );
  }

  updateHero(hero:HeroModel){
    const heroTemp = {
      ...hero
    };
    delete heroTemp.id;
    return this.httpClient.put(`${this.url}/heros/${hero.id}.json`,heroTemp);
  }
}
