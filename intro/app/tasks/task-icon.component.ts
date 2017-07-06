import {Component, Input, OnInit} from "@angular/core";
import {Task} from "../shared/shared";

@Component({
    selector: 'task-icon',
    template:`<img *ngFor="let icon of icons" src="app/shared/assets/img/icon.png" width="{{size}}">`
})
export class TaskIconComponent implements OnInit{
    @Input() task: Task;
    @Input() size: number;
    icons: Object[] = [];

    ngOnInit() {
    this.icons.length = this.task.pomodorosRequired;
    this.icons.fill({ name: this.task.name });
}
}
