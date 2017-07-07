import {Injectable} from "@angular/core";
import {Task} from "../shared";
import {Response, Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs";

@Injectable()
export class TaskService{
    taskStore: Task[] = [];
    taskFeed: Observable<Task>;
    taskObserver: any;
    private dataUrl = "/app/shared/data/raw-tasks.json";

    constructor(private http: Http){
        this.taskFeed = new Observable((observer: Observer<string>) =>{
            this.taskObserver = observer;
        });
        this.fetchTasks();
    }

    private fetchTasks(): void {
        this.http.get(this.dataUrl)
            .map(response => response.json())
            .map(stream => stream.map((res: Task) => {
                return {
                    name: res.name,
                    deadline: new Date(res.deadline),
                    pomodorosRequired: res.pomodorosRequired,
                    queued: res.queued
                }
            }))
            .subscribe(
                tasks => {
                    this.taskStore = tasks;
                    tasks.forEach((task: Task) => this.taskObserver.next(task))
                },
                error => console.log(error)
            );
    }

}
