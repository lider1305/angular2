import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component"
import {SHARED_PROVIDERS, SHARED_PIPES} from "./shared/shared";
import {TIMER_DIRECTIVES} from "./timer/timer";
import {TASKS_DIRECTIVES} from "./tasks/task";
import {TaskIconComponent} from "./tasks/task-icon.component";


@NgModule({
    imports:[BrowserModule],
    declarations:[AppComponent,SHARED_PIPES,TIMER_DIRECTIVES,TASKS_DIRECTIVES,TaskIconComponent],
    bootstrap:[AppComponent]
})
export class AppModule{

}
