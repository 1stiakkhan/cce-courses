import { GraduationCap, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

export const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-tight text-foreground sm:text-base">
              CCE Syllabus Explorer
            </p>
            <p className="hidden text-xs text-muted-foreground sm:block">
              International Islamic University Chittagong
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild className="hidden sm:inline-flex">
            <a href="https://www.iiuc.ac.bd" target="_blank" rel="noopener noreferrer">
              Academic Portal
              <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
