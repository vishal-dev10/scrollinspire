import { Card } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", current: 30000, subscribers: 25000, new: 20000 },
  { month: "Feb", current: 40000, subscribers: 35000, new: 30000 },
  { month: "Mar", current: 45000, subscribers: 40000, new: 35000 },
  { month: "Apr", current: 50000, subscribers: 45000, new: 40000 },
  { month: "May", current: 35000, subscribers: 30000, new: 25000 },
  { month: "Jun", current: 55000, subscribers: 50000, new: 45000 },
  { month: "Jul", current: 25000, subscribers: 20000, new: 15000 },
  { month: "Aug", current: 45000, subscribers: 40000, new: 35000 },
  { month: "Sep", current: 35000, subscribers: 30000, new: 25000 },
  { month: "Oct", current: 40000, subscribers: 35000, new: 30000 },
  { month: "Nov", current: 30000, subscribers: 25000, new: 20000 },
  { month: "Dec", current: 45000, subscribers: 40000, new: 35000 },
];

export const RevenueChart = () => {
  return (
    <Card className="bg-white dark:bg-[#151725] border border-gray-300 dark:border-none p-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-lg font-semibold">Revenue by customer type</h3>
          <div className="text-3xl font-bold mt-2">
            $240.8K
            <span className="text-sm text-green-500 ml-2">14.8% ↑</span>
          </div>
        </div>
        <div className="text-sm text-gray-400">Jan 2024</div>
      </div>

      <div className="h-[300px]">
        <ChartContainer className="w-full h-full" config={{}}>
          <ResponsiveContainer>
            <BarChart data={data}>
              <XAxis dataKey="month" stroke="#666" />
              <YAxis stroke="#666" />
              <Bar dataKey="current" fill="#8B5CF6" stackId="stack" />
              <Bar dataKey="subscribers" fill="#60A5FA" stackId="stack" />
              <Bar dataKey="new" fill="#34D399" stackId="stack" />
              <ChartTooltip />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>

      <div className="mt-6 flex gap-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-purple-500" />
          <span>Current clients</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500" />
          <span>Subscribers</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span>New customers</span>
        </div>
      </div>
    </Card>
  );
};