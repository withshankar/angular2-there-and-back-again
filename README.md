# Angular 2 - There and Back Again

Example with a most of the major Angular concepts.

## Pre-Requisites

1. Must install pre-requisites

	```bash
	npm install -g typescript live-server
	```

## Getting Started

1. Run `npm install`

1. Run the TypeScript compiler and watch for changes `npm run tsc`

1. Open 2nd terminal and launch the app in the browser `npm start`

## Notes

- Add redirectTo and/or otherwise routes
- Fix http as it evolves
- Fix how typings work (currently copying the typings folder into src)
- Manual typings fix https://github.com/angular/angular/issues/4279


## From Scratch
(draft)

1. Create empty `package.json`

	```bash
	npm init -y
	```

1. Install npm packages

	```bash
	npm install --save angular2 systemjs traceur
	```

1. Make a source folder

	```bash
	mkdir -p src/app
	```

1. Install typings files

	```bash
	tsd install angular2 -rosa --config src/tsd.json
	```

1. Create a `tsconfig.json` file, in an editor

	```json
	{
		"compilerOptions": {
			"target": "ES5",
			"module": "commonjs",
			"sourceMap": true,
			"emitDecoratorMetadata": true,
			"experimentalDecorators": true,
			"removeComments": false,
			"noImplicitAny": true
		}
	}
	```

1. Create `app.ts` and enter

	```javascript
	import {bootstrap, Component, View} from 'angular2/angular2';

	@Component({
		selector: 'app'
	})
	@View({
		template: '<h1>Dashboard</h1>'
	})
	export class AppComponent { }

	bootstrap(AppComponent);
	```
