import { Component } from '@angular/core';
import {SHARED_PROVIDERS} from "./shared/shared";
@Component({
    selector: 'app',
    providers: [SHARED_PROVIDERS],
    template:`
        <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
        <div class="navbar-header">
        <strong class="navbar-brand">My Pomodoro App</strong>
    </div>
    </div>
    </nav>
    <timer-widjet></timer-widjet>
    <tasks-div></tasks-div>
`
})
export class AppComponent {}
