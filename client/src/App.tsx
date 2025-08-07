import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import SevenRealms from "@/pages/seven-realms";
import ReturningPath from "@/pages/returning-path";
import AdminDashboard from "@/pages/admin-dashboard";
import ParentPortal from "@/pages/parent-portal";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/seven-realms" component={SevenRealms} />
      <Route path="/returning-path" component={ReturningPath} />
      <Route path="/admin" component={AdminDashboard} />
      <Route path="/parent-portal" component={ParentPortal} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
