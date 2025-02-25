
import React from "react";
import { Task, TaskStatus } from "@/types/task";
import { TaskCard } from "./TaskCard";

interface TaskColumnProps {
  title: string;
  tasks: Task[];
  status: TaskStatus;
}

export function TaskColumn({ title, tasks, status }: TaskColumnProps) {
  return (
    <div className="flex flex-col gap-4 min-w-[300px] w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">{title}</h2>
        <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-sm">
          {tasks.length}
        </span>
      </div>
      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
