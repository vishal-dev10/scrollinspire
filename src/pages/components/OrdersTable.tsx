import { Card } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Pencil, Trash } from "lucide-react";

const orders = [
  {
    id: "#1532",
    client: {
      name: "John Carter",
      email: "hello@johncarter.com",
    },
    date: "Jan 30, 2024",
    status: "Delivered",
    country: "United States",
    total: "$1,099.24",
  },
  {
    id: "#1531",
    client: {
      name: "Sophie Moore",
      email: "contact@sophiemoore.com",
    },
    date: "Jan 27, 2024",
    status: "Canceled",
    country: "United Kingdom",
    total: "$5,870.32",
  },
  {
    id: "#1530",
    client: {
      name: "Matt Cannon",
      email: "info@mattcannon.com",
    },
    date: "Jan 24, 2024",
    status: "Delivered",
    country: "Australia",
    total: "$13,899.48",
  },
  {
    id: "#1529",
    client: {
      name: "Graham Hills",
      email: "hi@grahamhills.com",
    },
    date: "Jan 21, 2024",
    status: "Pending",
    country: "India",
    total: "$1,559.12",
  },
  {
    id: "#1528",
    client: {
      name: "Sandy Houston",
      email: "contact@sandyhouston.com",
    },
    date: "Jan 18, 2024",
    status: "Delivered",
    country: "Canada",
    total: "$899.16",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Delivered":
      return "text-green-500 bg-green-500/10";
    case "Canceled":
      return "text-red-500 bg-red-500/10";
    case "Pending":
      return "text-yellow-500 bg-yellow-500/10";
    default:
      return "text-gray-500 bg-gray-500/10";
  }
};

export const OrdersTable = () => {
  return (
    <Card className="bg-white dark:bg-[#151725] border border-gray-300 dark:border-none p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Orders Status</h3>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search for..."
              className="pl-10 bg-white dark:bg-[#1A1E2D] border border-gray-300 dark:border-none text-black dark:text-white w-[240px]"
            />
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Create order
          </Button>
        </div>
      </div>
      

      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[50px]"></TableHead>
            <TableHead>Order</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Country</TableHead>
            <TableHead className="text-right">Total</TableHead>
            <TableHead className="w-[100px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id} className="hover:bg-gray-100 dark:hover:bg-[#1A1E2D]/50">
              <TableCell>
                <input type="checkbox" className="rounded border-gray-600" />
              </TableCell>
              <TableCell>{order.id}</TableCell>
              <TableCell>
                <div>
                  <div className="font-medium">{order.client.name}</div>
                  <div className="text-sm text-gray-400">{order.client.email}</div>
                </div>
              </TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(order.status)}`}>
                  • {order.status}
                </span>
              </TableCell>
              <TableCell>{order.country}</TableCell>
              <TableCell className="text-right">{order.total}</TableCell>
              <TableCell>
                <div className="flex items-center justify-end gap-2">
                  <Button variant="ghost" size="icon">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};