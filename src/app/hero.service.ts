import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroesUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(
    private http: HttpClient
  ) {
  }


  getHeroData(): Observable<Hero[]> {

    return this.http.get<User[]>(this.heroesUrl).pipe(
      tap(data => console.log(data)),

      map((data) => {
        const heroes = data.map(elem => {

          const hero = new Hero();
          hero.id = elem.id;
          hero.name = elem.username;
          return hero;

        });

        return heroes;
      }),

      tap(data => console.log(data))
    );

  }

}
