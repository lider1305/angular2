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
var TasksService = (function () {
    function TasksService() {
        this.taskStore = [];
        var tasks = [
            {
                name: "Code HTML",
                deadline: "Jun 23 2018",
                pomodorosRequired: 1
            }, {
                name: "Sketch a wireframe for the new homepage",
                deadline: "Jun 24 2018",
                pomodorosRequired: 2
            }, {
                name: "Style table with Bootstrap styles",
                deadline: "Jun 25 2016",
                pomodorosRequired: 1
            }, {
                name: "Reinforce SEO with custom sitemap.xml",
                deadline: "Jun 26 2016",
                pomodorosRequired: 3
            }
        ];
        this.taskStore = tasks.map(function (task) {
            return {
                name: task.name,
                deadline: new Date(task.deadline),
                queued: false,
                pomodorosRequired: task.pomodorosRequired
            };
        });
    }
    return TasksService;
}());
exports.TasksService = TasksService;
var AppComponent = (function () {
    function AppComponent() {
        this.queueHeaderMapping = {
            '=0': 'No pomodoros',
            '=1': 'One pomodoro',
            'other': '# pomodoros'
        };
        this.tasksService = new TasksService();
        this.tasks = this.tasksService.taskStore;
        this.today = new Date();
        this.updateQueuedPomodoros();
    }
    AppComponent.prototype.toggleTask = function (task) {
        task.queued = !task.queued;
        this.updateQueuedPomodoros();
    };
    AppComponent.prototype.updateQueuedPomodoros = function () {
        this.queuedPomodoros = this.tasks
            .filter(function (task) { return task.queued; })
            .reduce(function (pomodoros, queuedTask) {
            return pomodoros + queuedTask.pomodorosRequired;
        }, 0);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: "./app/main.html",
            styleUrls: ['./app/style.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map