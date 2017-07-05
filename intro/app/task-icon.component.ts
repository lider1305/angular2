import {Component, Input, OnInit} from "@angular/core";
import {Task} from "./task";

@Component({
    selector: 'task-icon',
    template:`<img *ngFor="let icon of icons" src="../app/assets/img/icon.png" width="50px">`
})
export class TaskIconComponent implements OnInit{
    @Input() task: Task;
    icons: Object[] = [];

    ngOnInit() {
    this.icons.length = this.task.pomodorosRequired;
    this.icons.fill({ name: this.task.name });
}
}
