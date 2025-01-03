import React, { useState } from "react";
import Papa from "papaparse";
import { Card } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search } from "lucide-react";

const NewTradePage = () => {
  const [csvData, setCsvData] = useState([]);
  const [analysisData, setAnalysisData] = useState([]);
  const [winRate, setWinRate] = useState(0);
  const [totalTradeDays, setTotalTradeDays] = useState(0);
  const [profitDays, setProfitDays] = useState(0);
  const [lossDays, setLossDays] = useState(0);
  const [broker, setBroker] = useState("brokerAlpha");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          setCsvData(results.data);
        },
      });
    }
  };

  const handleAnalyse = () => {
    const analysis = {};
    csvData.forEach((trade) => {
      const { symbol, trade_type, quantity, price, trade_date } = getColumnNames(trade);
      if (symbol && trade_type) {
        if (!analysis[symbol]) {
          analysis[symbol] = {};
        }
        if (!analysis[symbol][trade_date]) {
          analysis[symbol][trade_date] = { buy: [], sell: [] };
        }
        analysis[symbol][trade_date][trade_type.toLowerCase()].push({ quantity, price });
      }
    });

    const result = [];
    let totalProfitTrades = 0;
    let totalLossTrades = 0;
    let totalDays = 0;
    let profitDaysCount = 0;
    let lossDaysCount = 0;

    Object.keys(analysis).forEach((symbol) => {
      Object.keys(analysis[symbol]).forEach((trade_date) => {
        const buys = analysis[symbol][trade_date].buy;
        const sells = analysis[symbol][trade_date].sell;
        let totalBuyQuantity = 0;
        let totalBuyCost = 0;
        buys.forEach((buy) => {
          totalBuyQuantity += Number(buy.quantity);
          totalBuyCost += Number(buy.quantity) * Number(buy.price);
        });
        const avgBuyPrice = totalBuyCost / totalBuyQuantity;

        let totalSellQuantity = 0;
        let totalSellRevenue = 0;
        sells.forEach((sell) => {
          totalSellQuantity += Number(sell.quantity);
          totalSellRevenue += Number(sell.quantity) * Number(sell.price);
        });
        const avgSellPrice = totalSellRevenue / totalSellQuantity;

        const profitLoss = (avgSellPrice - avgBuyPrice) * totalSellQuantity;
        result.push({
          symbol,
          trade_date,
          quantity: totalSellQuantity,
          price: avgSellPrice,
          profitLoss,
        });

        totalDays++;
        if (profitLoss >= 0) {
          totalProfitTrades++;
          profitDaysCount++;
        } else {
          totalLossTrades++;
          lossDaysCount++;
        }
      });
    });

    setAnalysisData(result);
    setWinRate((totalProfitTrades / (totalProfitTrades + totalLossTrades)) * 100);
    setTotalTradeDays(totalDays);
    setProfitDays(profitDaysCount);
    setLossDays(lossDaysCount);
  };

  const getColumnNames = (trade) => {
    switch (broker) {
      case "brokerAlpha":
        return {
          symbol: trade.symbol,
          trade_type: trade.trade_type,
          quantity: trade.quantity,
          price: trade.price,
          trade_date: trade.trade_date,
        };
      case "brokerBeta":
        return {
          symbol: trade.Symbol,
          trade_type: trade.Quantity > 0 ? "buy" : "sell",
          quantity: Math.abs(trade.Quantity),
          price: trade.Rate,
          trade_date: trade["Trade Date"],
        };
      default:
        return trade;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0B14] text-black dark:text-white">
      <div className="flex">
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-semibold">Upload Trade CSV</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search for..."
                  className="pl-10 bg-white dark:bg-[#151725] border border-gray-300 dark:border-none text-black dark:text-white w-[240px]"
                />
              </div>
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <ScrollArea className="h-[calc(100vh-120px)]">
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
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
              <input
                type="file"
                accept=".csv"
                onChange={handleFileUpload}
                className="mb-8 bg-white dark:bg-[#151725] border border-gray-300 dark:border-none text-black dark:text-white p-2 rounded"
              />
              {csvData.length > 0 && (
                <>
                  <Card className="bg-white dark:bg-[#151725] border border-gray-300 dark:border-none p-6">
                    <Table>
                      <TableHeader>
                        <TableRow className="hover:bg-transparent">
                          {Object.keys(csvData[0]).map((key) => (
                            <TableHead key={key} className="py-2 px-4 border-b border-gray-300 dark:border-gray-200 bg-gray-100 dark:bg-[#1A1E2D] text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                              {key}
                            </TableHead>
                          ))}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {csvData.map((row, index) => (
                          <TableRow key={index} className="hover:bg-gray-100 dark:hover:bg-[#1A1E2D]/50">
                            {Object.values(row).map((value, i) => (
                              <TableCell key={i} className="py-2 px-4 border-b border-gray-300 dark:border-gray-200 text-black dark:text-white">
                                {value}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Card>
                  <Button onClick={handleAnalyse} className="bg-purple-600 hover:bg-purple-700">
                    Analyse
                  </Button>
                </>
              )}
              {analysisData.length > 0 && (
                <>
                  <div className="grid grid-cols-3 gap-6">
                    <Card className="bg-white dark:bg-[#151725] border border-gray-300 dark:border-none p-6">
                      <h3 className="text-lg font-semibold">Win Rate</h3>
                      <p className="text-2xl">{winRate.toFixed(2)}%</p>
                    </Card>
                    <Card className="bg-white dark:bg-[#151725] border border-gray-300 dark:border-none p-6">
                      <h3 className="text-lg font-semibold">Total Trade Days</h3>
                      <p className="text-2xl">{totalTradeDays}</p>
                    </Card>
                    <Card className="bg-white dark:bg-[#151725] border border-gray-300 dark:border-none p-6">
                      <h3 className="text-lg font-semibold">Profit Days</h3>
                      <p className="text-2xl">{profitDays}</p>
                    </Card>
                    <Card className="bg-white dark:bg-[#151725] border border-gray-300 dark:border-none p-6">
                      <h3 className="text-lg font-semibold">Loss Days</h3>
                      <p className="text-2xl">{lossDays}</p>
                    </Card>
                  </div>
                  <Card className="bg-white dark:bg-[#151725] border border-gray-300 dark:border-none p-6 mt-6">
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
                </>
              )}
            </div>
          </ScrollArea>
        </main>
      </div>
    </div>
  );
};

export default NewTradePage;