import { Heart, Lock, ShoppingBag, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";

export const StatsCards = () => {
  return (
    <div className="grid grid-cols-4 gap-6">
      <Card className="bg-white dark:bg-[#151725] border border-gray-300 dark:border-none p-6">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <Heart className="text-purple-500" />
            <span>Save Products</span>
          </div>
          <button className="text-gray-400">•••</button>
        </div>
        <div className="mt-4">
          <span className="text-3xl font-bold">50.8K</span>
          <span className="ml-2 text-green-500 text-sm">28.4% ↑</span>
        </div>
      </Card>

      <Card className="bg-white dark:bg-[#151725] border border-gray-300 dark:border-none p-6">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <Lock className="text-purple-500" />
            <span>Stock Products</span>
          </div>
          <button className="text-gray-400">•••</button>
        </div>
        <div className="mt-4">
          <span className="text-3xl font-bold">23.6K</span>
          <span className="ml-2 text-red-500 text-sm">12.6% ↓</span>
        </div>
      </Card>

      <Card className="bg-white dark:bg-[#151725] border border-gray-300 dark:border-none p-6">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-purple-500" />
            <span>Sale Products</span>
          </div>
          <button className="text-gray-400">•••</button>
        </div>
        <div className="mt-4">
          <span className="text-3xl font-bold">756</span>
          <span className="ml-2 text-green-500 text-sm">3.1% ↑</span>
        </div>
      </Card>

      <Card className="bg-white dark:bg-[#151725] border border-gray-300 dark:border-none p-6">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <DollarSign className="text-purple-500" />
            <span>Average Revenue</span>
          </div>
          <button className="text-gray-400">•••</button>
        </div>
        <div className="mt-4">
          <span className="text-3xl font-bold">2.3K</span>
          <span className="ml-2 text-green-500 text-sm">11.3% ↑</span>
        </div>
      </Card>
    </div>
  );
};