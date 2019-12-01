import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContactsComponent} from './contacts/contacts.component';
import {HeroesComponent} from './heroes/heroes.component';


const routes: Routes = [
  {path: '', component: HeroesComponent},
  {path: 'contacts', component: ContactsComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
