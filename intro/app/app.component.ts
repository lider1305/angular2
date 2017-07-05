import {Component} from "@angular/core";

@Component({
    selector:'app',
    templateUrl: "./app/main.html"
})
export class AppComponent{
    greeting: string;
    minutes: number;
    seconds: number;
    buttonLabel: string;
    isPaused: boolean;
    constructor(){
        this.greeting="Hello A2";
        this.resetTimer();
        setInterval(()=>this.tick(), 1000);
    }
    private tick(): void {
        if(!this.isPaused) {
            this.buttonLabel = "Pause";

            if (--this.seconds < 0) {
                this.seconds = 59;
                if (--this.minutes < 0) {
                    this.resetTimer();
                }
            }
        }
    }

    private resetTimer(): void {
        this.minutes=24;
        this.seconds=59;
        this.buttonLabel="Start";
        this.togglePause();
    }
    private togglePause(): void {
        this.isPaused = !this.isPaused;
        if(this.minutes<24 || this.seconds<59){
            this.buttonLabel= this.isPaused ? "Resume" : "Pause";
        }
    }
    countdownCompleted(){
        alert("End of time!");
    }
}
