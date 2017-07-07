import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component"
import {SHARED_PIPES, SHARED_PROVIDERS} from "./shared/shared";
import {TIMER_DIRECTIVES} from "./timer/timer";
import {TASKS_DIRECTIVES, TaskEditorComponent,TasksComponent} from "./tasks/task";
import {HttpModule} from "@angular/http";
import {RouterModule, Routes} from '@angular/router';
import TimerWidgetComponent from "./timer/timer.component";

const appRoutes: Routes = [
    {   path: '', component: TasksComponent,pathMatch: 'full'},
    {   path: 'tasks/editor',  component: TaskEditorComponent},
    {   path: 'timer',   component: TimerWidgetComponent}
];
@NgModule({
    imports:[BrowserModule,HttpModule,RouterModule,RouterModule.forRoot(appRoutes)],
    declarations:[AppComponent,SHARED_PIPES,TIMER_DIRECTIVES,TASKS_DIRECTIVES],
    providers: [SHARED_PROVIDERS],
    bootstrap:[AppComponent]
})
export class AppModule{

}
