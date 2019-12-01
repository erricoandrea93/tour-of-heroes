import {Injectable} from '@angular/core';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() {
  }

  getHeroData(): Observable<Hero[]> {
    // HTTP call for get data

    return of(HEROES);
  }
}
