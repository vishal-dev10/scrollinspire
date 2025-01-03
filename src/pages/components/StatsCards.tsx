import { TrendingUp, BarChart, LineChart, PieChart, ThumbsUp, ThumbsDown, UserCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

export const StatsCards = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-6">
        <Card className="bg-white dark:bg-[#151725] border border-gray-300 dark:border-none p-6">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <TrendingUp className="text-purple-500" />
              <span>Total Equity P&L</span>
            </div>
            <button className="text-gray-400">•••</button>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold">₹ 50.8K</span>
            <span className="ml-2 text-green-500 text-sm">28.4% ↑</span>
          </div>
        </Card>

        <Card className="bg-white dark:bg-[#151725] border border-gray-300 dark:border-none p-6">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <BarChart className="text-purple-500" />
              <span>Total FNO P&L</span>
            </div>
            <button className="text-gray-400">•••</button>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold">₹ 23.6K</span>
            <span className="ml-2 text-red-500 text-sm">12.6% ↓</span>
          </div>
        </Card>

        <Card className="bg-white dark:bg-[#151725] border border-gray-300 dark:border-none p-6">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <LineChart className="text-purple-500" />
              <span>Today's Equity P&L</span>
            </div>
            <button className="text-gray-400">•••</button>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold">₹ 756</span>
            <span className="ml-2 text-green-500 text-sm">3.1% ↑</span>
          </div>
        </Card>

        <Card className="bg-white dark:bg-[#151725] border border-gray-300 dark:border-none p-6">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <PieChart className="text-purple-500" />
              <span>Today's FNO P&L</span>
            </div>
            <button className="text-gray-400">•••</button>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold">₹ 2.3K</span>
            <span className="ml-2 text-green-500 text-sm">11.3% ↑</span>
          </div>
        </Card>

        <Card className="bg-white dark:bg-[#151725] border border-gray-300 dark:border-none p-6">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <TrendingUp className="text-purple-500" />
              <span>Profit factor</span>
            </div>
            <button className="text-gray-400">•••</button>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold">1.5</span>
            <span className="ml-2 text-green-500 text-sm">Stable</span>
          </div>
        </Card>

        <Card className="bg-white dark:bg-[#151725] border border-gray-300 dark:border-none p-6">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <ThumbsUp className="text-purple-500" />
              <span>Average winning trade</span>
            </div>
            <button className="text-gray-400">•••</button>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold">₹ 1.2K</span>
            <span className="ml-2 text-green-500 text-sm">Consistent</span>
          </div>
        </Card>

        <Card className="bg-white dark:bg-[#151725] border border-gray-300 dark:border-none p-6">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <ThumbsDown className="text-purple-500" />
              <span>Average losing trade</span>
            </div>
            <button className="text-gray-400">•••</button>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold">₹ 800</span>
            <span className="ml-2 text-red-500 text-sm">Manageable</span>
          </div>
        </Card>

        <Card className="bg-white dark:bg-[#151725] border border-gray-300 dark:border-none p-6">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <UserCheck className="text-purple-500" />
              <span>Trader Habit</span>
            </div>
            <button className="text-gray-400">•••</button>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold">Disciplined</span>
            <span className="ml-2 text-green-500 text-sm">Improving</span>
          </div>
        </Card>
      </div>
    </div>
  );
};