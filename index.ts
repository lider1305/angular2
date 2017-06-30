import {Component} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
@Component({
    selector: 'hello',
    template: '<h1>{{greeting}}</h1>'
})
class HelloAngularComponent {
    greeting: string;
    constructor() {
        this.greeting = 'Hello Angular 2!';
    }
}
platformBrowserDynamic().bootstrapModule(HelloAngularComponent);