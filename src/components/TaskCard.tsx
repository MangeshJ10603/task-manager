
import React from "react";
import { Task } from "@/types/task";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTaskContext } from "@/context/TaskContext";
import { MoreVertical, Calendar } from "lucide-react";
import { format } from "date-fns";

interface TaskCardProps {
  task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
  const { updateTask, deleteTask, moveTask } = useTaskContext();

  const priorityColors = {
    low: "bg-task-low",
    medium: "bg-task-medium",
    high: "bg-task-high",
  };

  return (
    <Card className="w-full p-4 space-y-4 animate-fade-in hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span
              className={`w-2 h-2 rounded-full ${priorityColors[task.priority]}`}
            />
            <span className="text-sm text-muted-foreground capitalize">
              {task.priority}
            </span>
          </div>
          <h3 className="font-semibold">{task.title}</h3>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="hover:bg-accent p-1 rounded">
            <MoreVertical className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => moveTask(task.id, "todo")}>
              Move to Todo
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => moveTask(task.id, "in-progress")}>
              Move to In Progress
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => moveTask(task.id, "done")}>
              Move to Done
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-destructive"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <p className="text-sm text-muted-foreground">{task.description}</p>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Calendar className="h-4 w-4" />
        <span>
          Due {format(new Date(task.deadline), "MMM d, yyyy")}
        </span>
      </div>
    </Card>
  );
}
