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
import HrPayroll from "./components/module/Hr/Index";
import WebisteEcommerce from "./components/module/Commerce/Index";
import AssetManagement from "./components/module/AssetManagement/Index";
import HelpDesk from "./components/module/HelpDesk/Index";
import Inventory from "./components/module/Inventory/Index";
import Manufacturing from "./components/module/Manufacture/Index";
import Lms from "./components/module/Lms/Index";
import ServiceMaintenance from "./components/module/ServiceMaintenance/Index";
import HealthCare from "./components/industry/HealthCare/Index";
import Government from "./components/industry/Government/Index";
import Finance from "./components/industry/Finance/Index";
import Property from "./components/industry/Property/Index";
import Education from "./components/industry/Education/Index";
import Retail from "./components/industry/Retail/Index";
import Agency from "./components/industry/Agency/Index";
import TravelTrasnportasi from "./components/industry/TravelTrasnportasi/Index";
import Hospitality from "./components/industry/Hospitality/Index";
import Utilities from "./components/industry/Utilitas/Index";
import LegalConsultant from "./components/industry/LegalKonsultan/Index";
import FoodBeverage from "./components/industry/fnb/Index";
import Ngo from "./components/industry/Ngo/Index";
import Cooperative from "./components/industry/Koperasi/Index";
import IntegrationSection from "./components/IntegrationSection";

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
          <Route path="/hr-payroll" element={<HrPayroll />} />
          <Route path="/website-ecommerce" element={<WebisteEcommerce />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/asset-management" element={<AssetManagement />} />
          <Route path="/help-desk" element={<HelpDesk />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/lms" element={<Lms />} />
          <Route path="/service-maintenance" element={<ServiceMaintenance />} />
          <Route path="/healthcare" element={<HealthCare />} />
          <Route path="/government" element={<Government />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/property" element={<Property />} />
          <Route path="/education" element={<Education />} />
          <Route path="/retail" element={<Retail />} />
          <Route path="/agency" element={<Agency />} />
          <Route path="/travel-trasnportasi" element={<TravelTrasnportasi />} />
          <Route path="/hospitality" element={<Hospitality />} />
          <Route path="/utilities" element={<Utilities />} />
          <Route path="/legal-consultant" element={<LegalConsultant />} />
          <Route path="/food-beverage" element={<FoodBeverage />} />
          <Route path="/ngo" element={<Ngo />} />
          <Route path="/koperasi" element={<Cooperative />} />
          <Route path="/integration" element={<IntegrationSection />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;