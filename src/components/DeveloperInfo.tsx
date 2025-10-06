import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, ExternalLink, Code2, Sparkles, GraduationCap } from "lucide-react";

export const DeveloperInfo = () => {
  return (
    <Card className="mt-16 border-primary/20 bg-gradient-to-br from-card to-card/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Code2 className="w-6 h-6 text-primary" />
          About The Developer
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">
            Hello! I'm Istiak Khan 🎓
          </h3>
          
          <div className="space-y-3">
            <h4 className="font-medium text-primary flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Who Am I:
            </h4>
            <ul className="space-y-2 ml-6">
              <li className="flex items-center gap-2 text-muted-foreground">
                <GraduationCap className="w-4 h-4 text-accent" />
                Computer Science Student
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Code2 className="w-4 h-4 text-accent" />
                Passionate Developer
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Sparkles className="w-4 h-4 text-accent" />
                Problem Solver
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Sparkles className="w-4 h-4 text-accent" />
                Always Learning New Tech
              </li>
            </ul>
          </div>

          <div className="space-y-3 pt-4">
            <h4 className="font-medium text-primary flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Contact & Feedback:
            </h4>
            <p className="text-muted-foreground ml-6">
              Send your suggestions and feedback directly to me!
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-4">
          <Button variant="default" asChild>
            <a 
              href="https://t.me/ik_051" 
              target="_blank" 
              rel="noopener noreferrer"
              className="gap-2"
            >
              <Mail className="w-4 h-4" />
              Contact Developer
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a 
              href="https://linktr.ee/istiak_khan_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              More Links
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
