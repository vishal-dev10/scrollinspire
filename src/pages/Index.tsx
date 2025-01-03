import { Bell, Search, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sidebar } from "./components/Sidebar";
import { StatsCards } from "./components/StatsCards";
import { VisitorsChart } from "./components/VisitorsChart";
import { RevenueChart } from "./components/RevenueChart";
import { ProductsList } from "./components/ProductsList";
import { OrdersTable } from "./components/OrdersTable";
import { CompletedTasksChart } from "./components/CompletedTasksChart";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0B14] text-black dark:text-white">
      <div className="flex">
        {/* <Sidebar /> */}
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-semibold">Analytics</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search for..."
                  className="pl-10 bg-white dark:bg-[#151725] border border-gray-300 dark:border-none text-black dark:text-white w-[240px]"
                />
              </div>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2">
                <img src="/lovable-uploads/ae943dd7-fc9a-4b11-9f4d-c35a778fb499.png" alt="Profile" className="h-8 w-8 rounded-full" />
                <span>Mr John</span>
              </div>
            </div>
          </div>

          <ScrollArea className="h-[calc(100vh-120px)]">
            <div className="space-y-6">
              <StatsCards />
              
              <div className="grid grid-cols-2 gap-6">
                <VisitorsChart />
                <RevenueChart />
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <ProductsList />
                <CompletedTasksChart />
              </div>
              
              <OrdersTable />
            </div>
          </ScrollArea>
        </main>
      </div>
    </div>
  );
};

export default Index;