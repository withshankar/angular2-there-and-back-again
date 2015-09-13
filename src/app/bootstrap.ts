import {bootstrap} from 'angular2/angular2';
import {HTTP_BINDINGS} from 'angular2/http';
import {ROUTER_BINDINGS} from 'angular2/router';
import {CharacterService} from './character-service';
import {FilterService} from './filter-service';
import {AppComponent} from './app-component';

bootstrap(AppComponent, [HTTP_BINDINGS, ROUTER_BINDINGS, FilterService, CharacterService]);
