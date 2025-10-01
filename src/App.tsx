import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ErpOverview from "./components/module/ErpOverview/Index";
import AccountingFinance from "./components/module/AccountingFinance/Index";
import NotFound from "./pages/NotFound";
import Sales from "./components/module/Sales/Index";
import Buying from "./components/module/Buying/Index";
import CRM from "./components/module/Crm/Index";
import ProjectManagement from "./components/module/ProjectManagement/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/erpnext" element={<ErpOverview />} />
          <Route path="/accounting-finance" element={<AccountingFinance />} />
          <Route path="/Sales" element={<Sales />} />
          <Route path="/buying" element={<Buying />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/project-management" element={<ProjectManagement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
