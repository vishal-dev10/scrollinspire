import { Card } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { useTheme } from "next-themes";

const data = [
  { date: "Jan1", tasks: 50 },
  { date: "Jan8", tasks: 120 },
  { date: "Jan16", tasks: 130 },
  { date: "Jan24", tasks: 250 },
  { date: "Jan31", tasks: 100 },
  { date: "Feb1", tasks: 200 },
  { date: "Feb8", tasks: 180 },
  { date: "Feb16", tasks: 220 },
  { date: "Feb24", tasks: 150 },
];

export const CompletedTasksChart = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <Card className={`p-6 ${isDarkMode ? "bg-[#151725] border-none" : "bg-white border-gray-200"}`}>
      <div className="flex justify-between items-start mb-6">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <h3 className="text-lg font-semibold">Completed tasks over time</h3>
          </div>
          <div className="text-3xl font-bold mt-2">
            257
            <span className="text-sm text-green-500 ml-2">16.8% ↑</span>
          </div>
        </div>
        <div className="text-sm text-gray-400">Jan 2024</div>
      </div>

      <div className="h-[200px]">
        <ChartContainer className="w-full h-full" config={{}}>
          <ResponsiveContainer>
            <LineChart data={data}>
              <XAxis dataKey="date" stroke={isDarkMode ? "#666" : "#333"} />
              <YAxis stroke={isDarkMode ? "#666" : "#333"} />
              <Line
                type="monotone"
                dataKey="tasks"
                stroke="#60A5FA"
                strokeWidth={2}
                dot={false}
              />
              <ChartTooltip />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </Card>
  );
};