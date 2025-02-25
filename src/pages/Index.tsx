
import React from "react";
import { TaskProvider } from "@/context/TaskContext";
import { TaskColumn } from "@/components/TaskColumn";
import { useTaskContext } from "@/context/TaskContext";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

function TaskBoard() {
  const { tasks } = useTaskContext();

  const todoTasks = tasks.filter((task) => task.status === "todo");
  const inProgressTasks = tasks.filter((task) => task.status === "in-progress");
  const doneTasks = tasks.filter((task) => task.status === "done");
  const expiredTasks = tasks.filter((task) => task.status === "expired");

  return (
    <div className="p-6 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Task Manager</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" /> Add Task
        </Button>
      </div>
      <div className="flex gap-6 overflow-x-auto pb-6">
        <TaskColumn title="To Do" tasks={todoTasks} status="todo" />
        <TaskColumn
          title="In Progress"
          tasks={inProgressTasks}
          status="in-progress"
        />
        <TaskColumn title="Done" tasks={doneTasks} status="done" />
        <TaskColumn title="Expired" tasks={expiredTasks} status="expired" />
      </div>
    </div>
  );
}

const Index = () => {
  return (
    <TaskProvider>
      <TaskBoard />
    </TaskProvider>
  );
};

export default Index;
