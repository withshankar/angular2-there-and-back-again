import {Component} from 'angular2/angular2';
import {Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Child1Component} from './child1.component';
import {Child2Component} from './child2.component';

@RouteConfig([
	new Route({ path: '/child1', as: 'Child1', component: Child1Component }),
	new Route({ path: '/child2', as: 'Child2', component: Child2Component })
])
@Component({
  selector: 'my-parent',
	template: `
		<h2>Parent Template</h2>
    <a [router-link]="['/Parent/Child1']" class="router-link">child 1</a>
    <a [router-link]="['/Parent/Child2']" class="router-link">child 2</a>
		<router-outlet></router-outlet>
	`,
	directives: [ROUTER_DIRECTIVES]
})
export class ParentComponent { }
