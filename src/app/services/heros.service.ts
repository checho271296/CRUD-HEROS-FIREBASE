import { Injectable, Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroModel } from '../models/hero.model';
import { map,delay } from "rxjs/operators";

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

  getHerobyId(id:string){
    return this.httpClient.get(`${this.url}/heros/${id}.json`)
  }


  getHeros(){
    return this.httpClient.get(`${this.url}/heros.json`)
    .pipe(map(this.createArrayHeros),delay(0));
  }

  private createArrayHeros(herosObj: Object){
    
    const heros : HeroModel[] = [];
    if (herosObj == null){return [];}

    Object.keys(herosObj).forEach(key =>{
      const hero : HeroModel = herosObj[key];
      hero.id = key;
      heros.push(hero);
    });
    return heros;
  }

  deleteHero(id :string){
    return this.httpClient.delete(`${this.url}/heros/${id}.json`);
  }
}
