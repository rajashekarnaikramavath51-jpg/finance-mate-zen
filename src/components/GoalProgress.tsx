import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Target } from "lucide-react";

const goals = [
  { name: "Emergency Fund", current: 3200, target: 5000, color: "primary" },
  { name: "Vacation", current: 1500, target: 3000, color: "accent" },
  { name: "New Laptop", current: 650, target: 1200, color: "warning" },
];

export const GoalProgress = () => {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Target className="h-5 w-5 text-primary" />
          <CardTitle className="text-xl font-semibold">Financial Goals</CardTitle>
        </div>
        <p className="text-sm text-muted-foreground">Track your progress</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {goals.map((goal, index) => {
          const percentage = (goal.current / goal.target) * 100;
          return (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">
                  {goal.name}
                </span>
                <span className="text-sm text-muted-foreground">
                  ${goal.current} / ${goal.target}
                </span>
              </div>
              <Progress value={percentage} className="h-2" />
              <p className="text-xs text-muted-foreground text-right">
                {percentage.toFixed(0)}% complete
              </p>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};
