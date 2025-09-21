import { Switch, Route, useLocation } from "wouter";
import { useEffect, lazy, Suspense } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PageLoadingSpinner } from "@/components/ui/loading-spinner";
import { ThemeProvider } from "@/components/ThemeProvider";
import { BackToTop } from "@/components/ui/back-to-top";

// Core pages (loaded immediately for performance)
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

// Lazy load all other pages for better performance
const AllGames = lazy(() => import("@/pages/all-games"));
const MathGames = lazy(() => import("@/pages/math-games"));
const ScienceGames = lazy(() => import("@/pages/science-games"));
const LanguageGames = lazy(() => import("@/pages/language-games"));
const MemoryGames = lazy(() => import("@/pages/memory-games"));
const LogicGames = lazy(() => import("@/pages/logic-games"));
const HelpCenter = lazy(() => import("@/pages/help-center"));
const ContactUs = lazy(() => import("@/pages/contact-us"));
const PrivacyPolicy = lazy(() => import("@/pages/privacy-policy"));
const TermsOfService = lazy(() => import("@/pages/terms-of-service"));
const ToolPage = lazy(() => import("@/pages/tool-page"));
const AboutUs = lazy(() => import("@/pages/about-us"));




function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageLoadingSpinner />}>
        <Switch>
      <Route path="/" component={Home} />
      <Route path="/games" component={AllGames} />
      <Route path="/games/:toolId" component={ToolPage} />

      {/* Game category routes */}
      <Route path="/math-games" component={MathGames} />
      <Route path="/science-games" component={ScienceGames} />
      <Route path="/language-games" component={LanguageGames} />
      <Route path="/memory-games" component={MemoryGames} />
      <Route path="/logic-games" component={LogicGames} />

      {/* Support pages */}
      <Route path="/contact" component={ContactUs} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/terms" component={TermsOfService} />
      <Route path="/help" component={HelpCenter} />
      <Route path="/about" component={AboutUs} />
      <Route component={NotFound} />
        </Switch>
      </Suspense>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="dapsigames-ui-theme">
        <TooltipProvider>
          <Toaster />
          <Router />
          <BackToTop />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;