import {Component, Input, Pipe, PipeTransform, Directive, OnInit, HostListener} from "@angular/core";

import {Task} from "./task";

export class TasksService{
    public taskStore: Array<Task> = [];

    constructor(){
        const tasks =[
            {
                name: "Code HTML",
                deadline: "Jun 23 2018",
                pomodorosRequired: 1
            },{
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

        this.taskStore = tasks.map(task=>{
            return{
                name:task.name,
                deadline: new Date(task.deadline),
                queued: false,
                pomodorosRequired: task.pomodorosRequired
            }
        });
    }
}

@Component({
    selector:'app',
    templateUrl: "./app/main.html",
    styleUrls: ['./app/style.css']
})
export class AppComponent{
    today:Date;
    tasks:Task[];
    queuedPomodoros: number;
    tasksService: TasksService;
    queueHeaderMapping: any = {
        '=0': 'No pomodoros',
        '=1': 'One pomodoro',
        'other': '# pomodoros'
    };
    constructor(){
        this.tasksService = new TasksService();
        this.tasks = this.tasksService.taskStore;
        this.today = new Date();
        this.updateQueuedPomodoros();
    }

    toggleTask(task: Task): void {
        task.queued = !task.queued;
        this.updateQueuedPomodoros();
    }

    private updateQueuedPomodoros(): void {
        this.queuedPomodoros = this.tasks
            .filter ((task: Task) => task.queued)
            .reduce((pomodoros: number, queuedTask: Task) => {
                return pomodoros + queuedTask.pomodorosRequired;
            }, 0);
    }
}
