import {bootstrap} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {FilterService} from './blocks/filter.service';
import {CharacterService} from './core/character.service';
import {AppComponent} from './app.component';

bootstrap(AppComponent, [
	HTTP_PROVIDERS,
	ROUTER_PROVIDERS,
	FilterService,
	CharacterService
]).then(
	success => console.log(`Bootstrap success`),
	error => console.log(error)
);
