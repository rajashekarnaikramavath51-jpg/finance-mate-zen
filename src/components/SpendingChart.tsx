import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
  { name: "Food & Dining", value: 850, color: "hsl(var(--primary))" },
  { name: "Transportation", value: 420, color: "hsl(var(--accent))" },
  { name: "Entertainment", value: 280, color: "hsl(var(--warning))" },
  { name: "Shopping", value: 650, color: "hsl(142 70% 45%)" },
  { name: "Bills & Utilities", value: 920, color: "hsl(199 70% 35%)" },
  { name: "Other", value: 727, color: "hsl(var(--muted-foreground))" },
];

export const SpendingChart = () => {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Spending Breakdown</CardTitle>
        <p className="text-sm text-muted-foreground">Current month overview</p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
              formatter={(value: number) => `$${value}`}
            />
            <Legend
              verticalAlign="bottom"
              height={36}
              iconType="circle"
              formatter={(value) => (
                <span className="text-sm text-foreground">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
