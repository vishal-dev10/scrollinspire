import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NewTradePage from "./pages/NewTradePage";
import DashboardPage from "./pages/DashboardPage";
import TradeLogPage from "./pages/TradeLogPage";
import InsightPage from "./pages/InsightPage";
// import NotebookPage from "./pages/NotebookPage";
import Layout from "./pages/components/Layout";
import AuthCallback from "./AuthCallback";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/new-trade" element={<NewTradePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/trade-log" element={<TradeLogPage />} />
            <Route path="/insight" element={<AuthCallback />} />
            <Route path="/notebook" element={<InsightPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App; 