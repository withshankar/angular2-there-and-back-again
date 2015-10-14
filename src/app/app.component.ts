import {View, Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Routes, APP_ROUTES} from './route.config';
import { foo } from './foo';

@Component({ selector: 'taba-app' })
@View({
  template: `
    <a [router-link]="['/${Routes.dashboard.as}']" class="router-link">Dashboard</a>
    <a [router-link]="['/${Routes.characters.as}']" class="router-link">Characters</a>
    <a [router-link]="['/${Routes.binding.as}']" class="router-link">Binding Demo</a>
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
@RouteConfig(APP_ROUTES)
export class AppComponent {
  go() {}
}
