import Queue from "./queue";

export interface Task extends Queue{
    name: string;
    deadline: Date;
    pomodorosRequired: number;
}

export default Task;
