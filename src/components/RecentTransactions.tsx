import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowDownRight, ShoppingBag, Coffee, Car, Home, Gamepad2, MoreHorizontal } from "lucide-react";

const transactions = [
  {
    id: 1,
    title: "Grocery Shopping",
    category: "Food & Dining",
    amount: -85.50,
    date: "Today, 2:30 PM",
    icon: ShoppingBag,
  },
  {
    id: 2,
    title: "Salary Deposit",
    category: "Income",
    amount: 2500.00,
    date: "Today, 9:00 AM",
    icon: ArrowDownRight,
  },
  {
    id: 3,
    title: "Coffee Shop",
    category: "Food & Dining",
    amount: -12.50,
    date: "Yesterday, 4:15 PM",
    icon: Coffee,
  },
  {
    id: 4,
    title: "Gas Station",
    category: "Transportation",
    amount: -45.00,
    date: "Yesterday, 8:30 AM",
    icon: Car,
  },
  {
    id: 5,
    title: "Rent Payment",
    category: "Bills & Utilities",
    amount: -920.00,
    date: "Dec 1, 2024",
    icon: Home,
  },
  {
    id: 6,
    title: "Gaming Subscription",
    category: "Entertainment",
    amount: -14.99,
    date: "Dec 1, 2024",
    icon: Gamepad2,
  },
];

export const RecentTransactions = () => {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-semibold">Recent Transactions</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">Your latest activity</p>
          </div>
          <button className="text-sm text-primary hover:text-primary/80 font-medium transition-colors">
            View All
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => {
            const Icon = transaction.icon;
            const isIncome = transaction.amount > 0;
            
            return (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${isIncome ? 'bg-success/10' : 'bg-primary/10'} group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-5 w-5 ${isIncome ? 'text-success' : 'text-primary'}`} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{transaction.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-xs text-muted-foreground">{transaction.date}</p>
                      <span className="text-xs text-muted-foreground">•</span>
                      <Badge variant="secondary" className="text-xs">
                        {transaction.category}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${isIncome ? 'text-success' : 'text-foreground'}`}>
                    {isIncome ? '+' : ''}{transaction.amount < 0 ? '-' : ''}$
                    {Math.abs(transaction.amount).toFixed(2)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
