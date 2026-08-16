import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export type CourseTypeFilter = "all" | "theory" | "sessional";

interface SearchFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  typeFilter: CourseTypeFilter;
  onTypeFilterChange: (value: CourseTypeFilter) => void;
  resultCount: number;
}

const options: { value: CourseTypeFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "theory", label: "Theory" },
  { value: "sessional", label: "Sessional" },
];

export const SearchFilter = ({
  searchTerm,
  onSearchChange,
  typeFilter,
  onTypeFilterChange,
  resultCount,
}: SearchFilterProps) => {
  return (
    <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative w-full sm:max-w-md">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search courses by title, code, or content..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="h-11 rounded-xl bg-card pl-10 text-sm"
          aria-label="Search courses"
        />
      </div>

      <div className="flex items-center gap-3">
        <div className="flex gap-1 rounded-xl border border-border bg-card p-1">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => onTypeFilterChange(option.value)}
              className={cn(
                "rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors",
                typeFilter === option.value
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
        <span className="hidden text-sm text-muted-foreground sm:inline">
          {resultCount} {resultCount === 1 ? "course" : "courses"}
        </span>
      </div>
    </div>
  );
};
