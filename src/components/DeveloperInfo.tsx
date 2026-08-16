import { Button } from "@/components/ui/button";
import { Mail, ExternalLink, Code2, Sparkles, GraduationCap } from "lucide-react";

export const DeveloperInfo = () => {
  return (
    <section className="mt-12 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8">
      <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <Code2 className="h-3.5 w-3.5" />
            About The Developer
          </div>
          <h2 className="mb-4 text-xl font-semibold tracking-tight text-foreground">
            Hello! I'm Istiak Khan 🎓
          </h2>

          <p className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            Who Am I:
          </p>
          <ul className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-accent" />
              Computer Science Student
            </li>
            <li className="flex items-center gap-2">
              <Code2 className="h-4 w-4 text-accent" />
              Passionate Developer
            </li>
            <li className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-accent" />
              Problem Solver
            </li>
            <li className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-accent" />
              Always Learning New Tech
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-center gap-4 rounded-xl border border-border bg-muted/40 p-5">
          <div>
            <p className="mb-1.5 flex items-center gap-2 text-sm font-medium text-foreground">
              <Mail className="h-4 w-4 text-primary" />
              Contact &amp; Feedback:
            </p>
            <p className="text-sm text-muted-foreground">
              Send your suggestions and feedback directly to me!
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button asChild size="sm">
              <a href="https://t.me/ik_051" target="_blank" rel="noopener noreferrer" className="gap-2">
                <Mail className="h-4 w-4" />
                Contact Developer
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://linktr.ee/istiak_khan_"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                More Links
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
