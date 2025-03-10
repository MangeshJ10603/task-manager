
import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface TaskSearchProps {
  onSearch: (query: string) => void;
}

export function TaskSearch({ onSearch }: TaskSearchProps) {
  return (
    <div className="relative">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search tasks..."
        className="pl-8"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
