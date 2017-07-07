import {Component,OnInit} from "@angular/core";
import {
    TaskService,
    SettingsService,
    Task,
    SHARED_PIPES
} from '../shared/shared';
import {Router} from "@angular/router";

@Component({
    selector:'tasks-div',
    pipes:[SHARED_PIPES],
    templateUrl: "app/tasks/task.component.html",
    styleUrls: ['app/tasks/task.component.css']
})
export class TasksComponent{
    today:Date;
    tasks:Task[];
    queuedPomodoros: number;
    queueHeaderMapping: any;
    timerMinutes:number;

    constructor(private taskService: TaskService,
                private settingsService: SettingsService,
                private router: Router ){
        this.tasks = this.taskService.taskStore;
        this.today = new Date();
        this.queueHeaderMapping = settingsService.pluralsMap.tasks;
        this.timerMinutes = settingsService.timerMinutes;
    }

    ngOnInit(): void {
        this.updateQueuedPomodoros();
        this.taskService.taskFeed.subscribe(newTask => {
            this.tasks.push(newTask);
            this.updateQueuedPomodoros();
        });
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
    workOn(): void {
        this.router.navigate(['timer']);
    }
}
