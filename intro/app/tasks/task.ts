
import {TasksComponent} from "./tasks.component";
import {TaskTooltipDirective} from './task-tooltip.directive';
import {TaskIconComponent} from "./task-icon.component";
import {TaskEditorComponent} from "./task-editor.component";
const TASKS_DIRECTIVES: any[] = [
    TasksComponent,
    TaskEditorComponent,
    TaskIconComponent,
    TaskTooltipDirective

];
export {
    TASKS_DIRECTIVES,
    TaskIconComponent,
    TaskEditorComponent,
    TasksComponent,
    TaskTooltipDirective
};
