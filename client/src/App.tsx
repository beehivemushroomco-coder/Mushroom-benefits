import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/hooks/use-theme.tsx";
import HomePage from "@/pages/home.tsx";
import MushroomDetailPage from "@/pages/mushroom-detail.tsx";
import PrivacyPolicy from "@/pages/privacy-policy.tsx";
import Disclaimer from "@/pages/disclaimer.tsx";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/mushroom/:id" component={MushroomDetailPage} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/disclaimer" component={Disclaimer} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
