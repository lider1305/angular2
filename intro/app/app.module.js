"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var shared_1 = require("./shared/shared");
var timer_1 = require("./timer/timer");
var task_1 = require("./tasks/task");
var http_1 = require("@angular/http");
var router_1 = require('@angular/router');
var timer_component_1 = require("./timer/timer.component");
var appRoutes = [
    { path: '', component: task_1.TasksComponent, pathMatch: 'full' },
    { path: 'tasks/editor', component: task_1.TaskEditorComponent },
    { path: 'timer', component: timer_component_1.default }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, router_1.RouterModule, router_1.RouterModule.forRoot(appRoutes)],
            declarations: [app_component_1.AppComponent, shared_1.SHARED_PIPES, timer_1.TIMER_DIRECTIVES, task_1.TASKS_DIRECTIVES],
            providers: [shared_1.SHARED_PROVIDERS],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map