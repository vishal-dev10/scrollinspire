import { Card } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { PieChart, Pie, Cell } from "recharts";

const dataDays = [
  { name: "Profit Days", value: 60 },
  { name: "Loss Days", value: 40 },
];

const dataTrades = [
  { name: "Profit Trades", value: 70 },
  { name: "Loss Trades", value: 30 },
];

const COLORS = ["#22C55E", "#EF4444"];

export const VisitorsChart = () => {
  return (
    <Card className="bg-white dark:bg-[#151725] border border-gray-300 dark:border-none p-6">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-lg font-semibold">Win Rate</h3>
      </div>

      <div className="flex justify-around items-center mb-6 h-[300px]">
        <div className="relative">
          <ChartContainer className="w-full h-full" config={{}}>
            <>
              <PieChart width={200} height={200}>
                <Pie
                  data={dataDays}
                  cx="50%"
                  cy="50%"
                  innerRadius={75}
                  outerRadius={100}
                  startAngle={180}
                  endAngle={-180}
                  dataKey="value"
                >
                  {dataDays.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <ChartTooltip />
              </PieChart>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="text-xl font-bold">{dataDays[0].value}%</div>
                <div className="text-gray-400">{dataDays[0].name}</div>
                <div className="text-xl font-bold mt-2">{dataDays[1].value}%</div>
                <div className="text-gray-400">{dataDays[1].name}</div>
              </div>
            </>
          </ChartContainer>
          <div className="text-center mt-4">
            <div className="text-lg font-semibold">By Days</div>
          </div>
        </div>

        <div className="relative">
          <ChartContainer className="w-full h-full" config={{}}>
            <>
              <PieChart width={200} height={200}>
                <Pie
                  data={dataTrades}
                  cx="50%"
                  cy="50%"
                  innerRadius={75}
                  outerRadius={100}
                  startAngle={180}
                  endAngle={-180}
                  dataKey="value"
                >
                  {dataTrades.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <ChartTooltip />
              </PieChart>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="text-xl font-bold">{dataTrades[0].value}%</div>
                <div className="text-gray-400">{dataTrades[0].name}</div>
                <div className="text-xl font-bold mt-2">{dataTrades[1].value}%</div>
                <div className="text-gray-400">{dataTrades[1].name}</div>
              </div>
            </>
          </ChartContainer>
          <div className="text-center mt-4">
            <div className="text-lg font-semibold">By Trades</div>
          </div>
        </div>
      </div>
    </Card>
  );
};