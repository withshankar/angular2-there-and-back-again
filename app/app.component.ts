import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {BindingComponent} from './binding/binding.component';
import {CharactersComponent} from './characters/characters.component';
import {CharacterDetailComponent} from './characters/character-detail.component';
import {DashboardComponent} from './dashboard/dashboard.component';

@Component({
  selector: 'taba-app',
  template: `
    <a [routerLink]="['Dashboard']">Dashboard</a>
    <a [routerLink]="['Characters']">Characters</a>
    <a [routerLink]="['Binding']">Binding Demo</a>
    <router-outlet></router-outlet>
  `,
  styles: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  // { path: '/', redirectTo: ['Dashboard'] },
  { path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
	{ path: '/binding', name: 'Binding', component: BindingComponent	},
	{ path: '/characters', name: 'Characters', component: CharactersComponent	},
	{ path: '/detail/:id', name: 'CharacterDetail', component: CharacterDetailComponent }
])
export class AppComponent { }
