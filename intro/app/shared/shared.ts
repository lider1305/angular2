import {TimeFormatPipe} from "./pipe/timeFormat.pipe";
import {Task} from "./interfaces/task";

import {IconQueuedPipe} from "./pipe/icon.pipe";
import {SettingsService} from "./services/settings.service";
import {TaskService} from "./services/task.service";
import Queue from "./interfaces/queue";
const SHARED_PIPES: any[] = [
    TimeFormatPipe,
    IconQueuedPipe
];
const SHARED_PROVIDERS: any[] = [
    SettingsService,
    TaskService
];
export {
    Queue,
    Task,

    TimeFormatPipe,
    IconQueuedPipe,
    SHARED_PIPES,

    SettingsService,
    TaskService,
    SHARED_PROVIDERS
};