import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {
    transform(totalMinutes: number): string {
        let minutes: number = totalMinutes%60;
        let hours: number = Math.floor(totalMinutes/60);
        return `${hours}h : ${minutes}m`;
    }
}