import {Component, View} from 'angular2/angular2';
import {CHARACTER_DIRECTIVES} from './character-directives';

@Component({ selector: 'my-dashboard' })
@View({
	template: `
		<h2>Dashboard</h2>

		<h4>One Way Binding</h4>
		<div>Hello {{firstName}}</div>

		<h4>Local Variables</h4>
		<input #mylocalvar "/>{{mylocalvar.value}}
		<button (click)="addThing(mylocalvar.value)">Add Local Var</button>

		<h4>Two-Way Binding (explicit)</h4>
		<input [ng-model]="firstName" (ng-model)="firstName=$event"/> {{firstName}}

		<h4>Two-Way Binding (sugar)</h4>
		<input [(ng-model)]="lastName" /> {{lastName}}

		<h4>Two-Way Binding (classic style)</h4>
		<input bind-ng-model="city" bindon-ng-model="city" /> {{city}}
		`,
  directives: [CHARACTER_DIRECTIVES]
})
export class DashboardComponent {
	firstName = 'john';
	lastName = 'papa';
	city = 'orlando';
	addThing(thing: string) {
		console.log(`adding ${thing}`);
	}
}
