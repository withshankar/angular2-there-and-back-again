import {Component, FORM_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'taba-binding',
  templateUrl: 'app/binding/binding.component.html',
  directives: [FORM_DIRECTIVES]
})
export class BindingComponent {
  firstName = 'john';
  lastName = 'papa';
  city = 'orlando';
  dataAsync: Promise<string>;

  constructor() {
    this.dataAsync = new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve('data from promise');
      }, 500)
    });
  }

  addThing(thing: string) {
    console.log(`adding ${thing}`);
  }
}
