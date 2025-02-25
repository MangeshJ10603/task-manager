
import React, { useState, useMemo } from "react";
import { TaskProvider } from "@/context/TaskContext";
import { TaskColumn } from "@/components/TaskColumn";
import { useTaskContext } from "@/context/TaskContext";
import { TaskSearch } from "@/components/TaskSearch";
import { CreateTaskDialog } from "@/components/CreateTaskDialog";

function TaskBoard() {
  const { tasks } = useTaskContext();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTasks = useMemo(() => {
    return tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [tasks, searchQuery]);

  const todoTasks = filteredTasks.filter((task) => task.status === "todo");
  const inProgressTasks = filteredTasks.filter((task) => task.status === "in-progress");
  const doneTasks = filteredTasks.filter((task) => task.status === "done");
  const expiredTasks = filteredTasks.filter((task) => task.status === "expired");

  return (
    <div className="p-6 space-y-8">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-3xl font-bold">Task Manager</h1>
        <div className="flex items-center gap-4">
          <TaskSearch onSearch={setSearchQuery} />
          <CreateTaskDialog />
        </div>
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
