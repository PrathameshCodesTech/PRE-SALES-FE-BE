import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import MasterLayout from "./layouts/MasterLayout";
import ProjectsList from "./pages/Setup/ProjectsList";
import SetupPage from "./pages/Setup/SetupPage";
import LeadSetupPage from "./pages/LeadSetup/LeadSetupPage";
import Auth from "./features/auth/Auth";
import Dashboard from "./pages/Dashboard/Dashboard";

import LeadsList from "./pages/PreSalesCRM/Leads/LeadsList";
// import LeadForm from "./pages/PreSalesCRM/Leads/LeadForm";
import LeadStaticPage from "./pages/PreSalesCRM/Leads/LeadStaticPage";
import SaleAddLead from "./pages/PreSalesCRM/Leads/SaleAddLead";


import InventoryList from "./pages/Inventory/InventoryList";
import InventoryCreate from "./pages/Inventory/InventoryCreate";
import ChannelPartnerPage from "./pages/ChannelPartner/ChannelPartnerPage";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<Auth />} />

          {/* Protected Routes with MasterLayout */}
          <Route element={<ProtectedRoute />}>
            <Route element={<MasterLayout />}>
              {/* Dashboard */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />

              {/* Projects */}
              <Route path="/sales/projects" element={<ProjectsList />} />

              {/* Master Setup */}
              <Route path="/setup" element={<SetupPage />} />

              {/* Lead Setup */}
              <Route path="/lead-setup" element={<LeadSetupPage />} />

              {/* Leads - Standardized under /leads */}
              {/* <Route path="/leads" element={<LeadsList />} />
             
              <Route path="/leads/new" element={<LeadForm />} />
              <Route path="/leads/:id" element={<LeadDetails />} />
              <Route path="/leads/:id/edit" element={<LeadForm />} /> */}
              <Route path="/leads/:id" element={<LeadStaticPage />} />
              <Route path="/leads/new" element={< SaleAddLead/>} />
              <Route path="/leads" element={<LeadsList />} />

              <Route path="/sales/inventory" element={<InventoryList />} />
              <Route path="/sales/inventory/new" element={<InventoryCreate />} />

              <Route path="/channel-partner-setup" element={<ChannelPartnerPage />} />
              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}