import { Card } from "@/components/ui/card";
import { Smartphone, Watch } from "lucide-react";

const products = [
  {
    name: "iPhone 14 Pro Max",
    stock: "524 in stock",
    price: "$1,099.00",
    icon: Smartphone,
  },
  {
    name: "Apple Watch S8",
    stock: "320 in stock",
    price: "$799.00",
    icon: Watch,
  },
];

export const ProductsList = () => {
  return (
    <Card className="bg-[#151725] border-none p-6">
      <h3 className="text-lg font-semibold mb-6">Products</h3>

      <div className="space-y-4">
        <div className="flex justify-between text-sm text-gray-400">
          <span>Products</span>
          <span>Price</span>
        </div>

        {products.map((product) => (
          <div key={product.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#1A1E2D] rounded-lg flex items-center justify-center">
                <product.icon className="h-6 w-6" />
              </div>
              <div>
                <div className="font-medium">{product.name}</div>
                <div className="text-sm text-gray-400">{product.stock}</div>
              </div>
            </div>
            <div className="font-medium">{product.price}</div>
          </div>
        ))}
      </div>
    </Card>
  );
};