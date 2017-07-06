import {Pipe, PipeTransform} from "@angular/core";
import {Queue} from "../shared";

@Pipe({
    name: 'QueuedIcons',
    pure: false
})
export class IconQueuedPipe implements PipeTransform {
    transform(queueableItems: Queue[], ...args:any[]): Queue[]{
        return queueableItems.filter((queueableItem:Queue)=>{
            return queueableItem.queued === args[0];
        });
    }
}
