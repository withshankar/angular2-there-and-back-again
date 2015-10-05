import {Component, View, FORM_DIRECTIVES} from 'angular2/angular2';

@Component({ selector: 'taba-binding' })
@View({
    templateUrl: 'app/binding/binding.component.html',
    directives: [FORM_DIRECTIVES]
})
export class BindingComponent {
    firstName = 'john';
    lastName = 'papa';
    city = 'orlando';

    addThing(thing: string) {
        console.log(`adding ${thing}`);
    }
}
