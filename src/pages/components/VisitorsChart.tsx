import { Card } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Organic", value: 80 },
  { name: "Social", value: 60 },
  { name: "Direct", value: 50 },
];

const COLORS = ["#8B5CF6", "#60A5FA", "#34D399"];

export const VisitorsChart = () => {
  return (
    <Card className="bg-white dark:bg-[#151725] border border-gray-300 dark:border-none p-6">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-lg font-semibold">Website Visitors</h3>
        <button className="text-sm text-purple-500">Export ↓</button>
      </div>

      <div className="h-[300px] flex items-center justify-center">
        <ChartContainer className="w-full h-full" config={{}}>
          <>
            <PieChart width={300} height={300}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                startAngle={180}
                endAngle={-180}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <ChartTooltip />
            </PieChart>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-3xl font-bold">150k</div>
              <div className="text-gray-400">Total Visitors</div>
            </div>
          </>
        </ChartContainer>
      </div>

      <div className="mt-6 space-y-2">
        {data.map((item, index) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}%</span>
          </div>
        ))}
      </div>
    </Card>
  );
};