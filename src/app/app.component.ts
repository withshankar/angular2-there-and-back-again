import {Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ROUTES, ROUTE_NAMES} from './routes';

@Component({
  selector: 'taba-app',
  template: `
    <a [router-link]="[routes.dashboard]" class="router-link">Dashboard</a>
    <a [router-link]="[routes.characters]" class="router-link">Characters</a>
    <a [router-link]="[routes.binding]" class="router-link">Binding Demo</a>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .router-link {padding: 5px;text-decoration: none;}
    .router-link:visited, .router-link:link {color: #444;}
    .router-link:hover {color: white; background-color: #1171a3; text-decoration: none;}
    .router-link.router-link-active {color: white; background-color: #52b9e9; text-decoration: none;}
  `],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig(ROUTES)
export class AppComponent {}
