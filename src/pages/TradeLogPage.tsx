import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

const TradeLogPage = () => {
  const [broker, setBroker] = useState("brokerAlpha");
  const [analysisData, setAnalysisData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const storedData = JSON.parse(localStorage.getItem(`analysisData_${broker}`));
      if (storedData) {
        setAnalysisData(storedData);
      } else {
        setAnalysisData([]);
      }
    };
    fetchData();
  }, [broker]);

  return (
    <div className="p-6 transition-transform duration-300 ease-in-out">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Trade Log</h1>
        <div className="flex items-center gap-4">
          <label htmlFor="broker" className="text-lg font-semibold">Select Broker:</label>
          <select
            id="broker"
            value={broker}
            onChange={(e) => setBroker(e.target.value)}
            className="bg-white dark:bg-[#151725] border border-gray-300 dark:border-none text-black dark:text-white p-2 rounded"
          >
            <option value="brokerAlpha">Broker Alpha</option>
            <option value="brokerBeta">Broker Beta</option>
            {/* Add more brokers as needed */}
          </select>
        </div>
      </div>
      {analysisData.length > 0 ? (
        <Card className="bg-white dark:bg-[#151725] border border-gray-300 dark:border-none p-6">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="py-2 px-4 border-b border-gray-300 dark:border-gray-200 bg-gray-100 dark:bg-[#1A1E2D] text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Symbol</TableHead>
                <TableHead className="py-2 px-4 border-b border-gray-300 dark:border-gray-200 bg-gray-100 dark:bg-[#1A1E2D] text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Trade Date</TableHead>
                <TableHead className="py-2 px-4 border-b border-gray-300 dark:border-gray-200 bg-gray-100 dark:bg-[#1A1E2D] text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Quantity</TableHead>
                <TableHead className="py-2 px-4 border-b border-gray-300 dark:border-gray-200 bg-gray-100 dark:bg-[#1A1E2D] text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Price</TableHead>
                <TableHead className="py-2 px-4 border-b border-gray-300 dark:border-gray-200 bg-gray-100 dark:bg-[#1A1E2D] text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Profit/Loss</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {analysisData.map((row, index) => (
                <TableRow key={index} className="hover:bg-gray-100 dark:hover:bg-[#1A1E2D]/50">
                  <TableCell className="py-2 px-4 border-b border-gray-300 dark:border-gray-200 text-black dark:text-white">{row.symbol}</TableCell>
                  <TableCell className="py-2 px-4 border-b border-gray-300 dark:border-gray-200 text-black dark:text-white">{row.trade_date}</TableCell>
                  <TableCell className="py-2 px-4 border-b border-gray-300 dark:border-gray-200 text-black dark:text-white">{row.quantity}</TableCell>
                  <TableCell className="py-2 px-4 border-b border-gray-300 dark:border-gray-200 text-black dark:text-white">{row.price}</TableCell>
                  <TableCell className={`py-2 px-4 border-b border-gray-300 dark:border-gray-200 ${row.profitLoss >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {row.profitLoss.toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      ) : (
        <p>No data available for the selected broker.</p>
      )}
    </div>
  );
};

export default TradeLogPage;