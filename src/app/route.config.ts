import {Route} from 'angular2/router';
import {BindingComponent} from './binding/binding.component';
import {CharactersComponent} from './characters/characters.component';
import {CharacterDetailComponent} from './character-detail/character-detail.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ParentComponent} from './parent.component';

export var Routes = {
  dashboard: new Route({path: '/', as: 'Dashboard', component: DashboardComponent}),
	binding: new Route({path: '/binding', as: 'Binding', component: BindingComponent}),
	characters: new Route({path: '/characters', as: 'Characters', component: CharactersComponent}),
	detail: new Route({path: '/detail/:id', as: 'Detail', component: CharacterDetailComponent}),
  parent: new Route({path: '/parent/...', as: 'Parent', component: ParentComponent}),
};

export const APP_ROUTES = [
	this.Routes.binding,
	this.Routes.dashboard,
	this.Routes.detail,
	this.Routes.characters,
	this.Routes.parent
];
