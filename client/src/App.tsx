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
const AllTools = lazy(() => import("@/pages/all-tools"));
const LoanCalculator = lazy(() => import("@/pages/loan-calculator"));
const MortgageCalculator = lazy(() => import("@/pages/mortgage-calculator"));
const EMICalculator = lazy(() => import("@/pages/emi-calculator"));
const FinanceTools = lazy(() => import("@/pages/finance-tools"));
const TextTools = lazy(() => import("@/pages/text-tools"));
const HealthTools = lazy(() => import("@/pages/health-tools"));
const MemoryGames = lazy(() => import("@/pages/memory-games"));
const LogicGames = lazy(() => import("@/pages/logic-games"));
const HelpCenter = lazy(() => import("@/pages/help-center"));
const ContactUs = lazy(() => import("@/pages/contact-us"));
const PrivacyPolicy = lazy(() => import("@/pages/privacy-policy"));
const TermsOfService = lazy(() => import("@/pages/terms-of-service"));
const ToolPage = lazy(() => import("@/pages/tool-page"));
const AboutUs = lazy(() => import("@/pages/about-us"));

// Lazy load finance calculators
const CompoundInterestCalculator = lazy(() => import("@/pages/compound-interest-calculator"));
const SimpleInterestCalculator = lazy(() => import("@/pages/simple-interest-calculator"));
const ROICalculator = lazy(() => import("@/pages/roi-calculator"));
const TaxCalculator = lazy(() => import("@/pages/tax-calculator"));
const SalaryToHourlyCalculator = lazy(() => import("@/pages/salary-to-hourly-calculator"));
const TipCalculator = lazy(() => import("@/pages/tip-calculator"));
const InflationCalculator = lazy(() => import("@/pages/inflation-calculator"));
const SavingsGoalCalculator = lazy(() => import("@/pages/savings-goal-calculator"));
const DebtPayoffCalculator = lazy(() => import("@/pages/debt-payoff-calculator"));
const NetWorthCalculator = lazy(() => import("@/pages/net-worth-calculator"));
const StockProfitCalculator = lazy(() => import("@/pages/stock-profit-calculator"));
const RetirementCalculator = lazy(() => import("@/pages/retirement-calculator"));
const SIPCalculator = lazy(() => import("@/pages/sip-calculator"));
const InvestmentReturnCalculator = lazy(() => import("@/pages/investment-return-calculator"));
const BreakEvenCalculator = lazy(() => import("@/pages/break-even-calculator"));
const BusinessLoanCalculator = lazy(() => import("@/pages/business-loan-calculator"));
const LeaseCalculator = lazy(() => import("@/pages/lease-calculator"));
const CarLoanCalculator = lazy(() => import("@/pages/car-loan-calculator"));
const HomeLoanCalculator = lazy(() => import("@/pages/home-loan-calculator"));
const EducationLoanCalculator = lazy(() => import("@/pages/education-loan-calculator"));
const CreditCardInterestCalculator = lazy(() => import("@/pages/credit-card-interest-calculator"));
const PercentageCalculator = lazy(() => import("@/pages/percentage-calculator"));
const DiscountCalculator = lazy(() => import("@/pages/discount-calculator"));
const VATGSTCalculator = lazy(() => import("@/pages/vat-gst-calculator"));
const PayPalFeeCalculator = lazy(() => import("@/pages/paypal-fee-calculator"));
const CurrencyPercentageChangeCalculator = lazy(() => import("@/pages/currency-percentage-change-calculator"));
const FutureValueInvestmentCalculator = lazy(() => import("@/pages/future-value-investment-calculator"));

// Lazy load health calculators
const BMICalculator = lazy(() => import("@/pages/bmi-calculator"));
const BMRCalculator = lazy(() => import("@/pages/bmr-calculator"));
const CalorieCalculator = lazy(() => import("@/pages/calorie-calculator"));
const BodyFatCalculator = lazy(() => import("@/pages/body-fat-calculator"));
const IdealWeightCalculator = lazy(() => import("@/pages/ideal-weight-calculator"));
const PregnancyDueDateCalculator = lazy(() => import("@/pages/pregnancy-due-date-calculator"));
const WaterIntakeCalculator = lazy(() => import("@/pages/water-intake-calculator"));
const ProteinIntakeCalculator = lazy(() => import("@/pages/protein-intake-calculator"));
const CarbCalculator = lazy(() => import("@/pages/carb-calculator"));
const KetoMacroCalculator = lazy(() => import("@/pages/keto-macro-calculator"));
const IntermittentFastingTimer = lazy(() => import("@/pages/intermittent-fasting-timer"));
const DailyStepCalorieConverter = lazy(() => import("@/pages/daily-step-calorie-converter"));
const HeartRateCalculator = lazy(() => import("@/pages/heart-rate-calculator"));
const MaxHeartRateCalculator = lazy(() => import("@/pages/max-heart-rate-calculator"));
const BloodPressureTracker = lazy(() => import("@/pages/blood-pressure-tracker"));
const SleepCalculator = lazy(() => import("@/pages/sleep-calculator"));
const OvulationCalculator = lazy(() => import("@/pages/ovulation-calculator"));
const BabyGrowthChart = lazy(() => import("@/pages/baby-growth-chart"));
const TDEECalculator = lazy(() => import("@/pages/tdee-calculator"));
const LeanBodyMassCalculator = lazy(() => import("@/pages/lean-body-mass-calculator"));
const WaistToHeightRatioCalculator = lazy(() => import("@/pages/waist-to-height-ratio-calculator"));
const WHRCalculator = lazy(() => import("@/pages/whr-calculator"));
const LifeExpectancyCalculator = lazy(() => import("@/pages/life-expectancy-calculator"));
const CholesterolRiskCalculator = lazy(() => import("@/pages/cholesterol-risk-calculator"));
const RunningPaceCalculator = lazy(() => import("@/pages/running-pace-calculator"));
const CyclingSpeedCalculator = lazy(() => import("@/pages/cycling-speed-calculator"));
const SwimmingCalorieCalculator = lazy(() => import("@/pages/swimming-calorie-calculator"));
const AlcoholCalorieCalculator = lazy(() => import("@/pages/alcohol-calorie-calculator"));
const SmokingCostCalculator = lazy(() => import("@/pages/smoking-cost-calculator"));


// Lazy load text tools
const WordCounter = lazy(() => import("@/pages/word-counter"));
const CharacterCounter = lazy(() => import("@/pages/character-counter"));
const SentenceCounter = lazy(() => import("@/pages/sentence-counter"));
const ParagraphCounter = lazy(() => import("@/pages/paragraph-counter"));
const CaseConverter = lazy(() => import("@/pages/case-converter"));
const PasswordGenerator = lazy(() => import("@/pages/password-generator"));
const FakeNameGenerator = lazy(() => import("@/pages/fake-name-generator"));
const UsernameGenerator = lazy(() => import("@/pages/username-generator"));
const FakeAddressGenerator = lazy(() => import("@/pages/fake-address-generator"));
const QRTextGenerator = lazy(() => import("@/pages/qr-text-generator"));
const FontStyleChanger = lazy(() => import("@/pages/font-style-changer"));
const ReverseTextTool = lazy(() => import("@/pages/reverse-text-tool"));
const TextToQRCode = lazy(() => import("@/pages/text-to-qr-code"));
const TextToBinaryConverter = lazy(() => import("@/pages/text-to-binary-converter"));
const BinaryToTextConverter = lazy(() => import("@/pages/binary-to-text-converter"));
const DecimalToTextConverter = lazy(() => import("@/pages/decimal-to-text-converter"));
const TextToDecimalConverter = lazy(() => import("@/pages/text-to-decimal-converter"));
const QRCodeScanner = lazy(() => import("@/pages/qr-code-scanner"));
const MarkdownToHTMLConverter = lazy(() => import("@/pages/markdown-to-html"));
const LoremIpsumGenerator = lazy(() => import("@/pages/lorem-ipsum-generator"));
const HexToTextConverter = lazy(() => import("@/pages/hex-to-text-converter"));
const TextToHexConverter = lazy(() => import("@/pages/text-to-hex-converter"));
const DuplicateLineRemover = lazy(() => import("@/pages/duplicate-line-remover"));
const TextScrambler = lazy(() => import("@/pages/text-scrambler"));
const TextDiffChecker = lazy(() => import("@/pages/text-diff-checker"));
const TextPatternGenerator = lazy(() => import("@/pages/text-pattern-generator"));
const TextFormatterBeautifier = lazy(() => import("@/pages/text-formatter-beautifier"));
const PasswordStrengthChecker = lazy(() => import("@/pages/password-strength-checker"));


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
      <Route path="/games" component={AllTools} />
      <Route path="/games/loan-calculator" component={LoanCalculator} />
      <Route path="/games/mortgage-calculator" component={MortgageCalculator} />
      <Route path="/games/emi-calculator" component={EMICalculator} />
      <Route path="/games/compound-interest-calculator" component={CompoundInterestCalculator} />
      <Route path="/games/simple-interest-calculator" component={SimpleInterestCalculator} />
      <Route path="/games/roi-calculator" component={ROICalculator} />
      <Route path="/games/tax-calculator" component={TaxCalculator} />
      <Route path="/games/salary-to-hourly-calculator" component={SalaryToHourlyCalculator} />
      <Route path="/games/tip-calculator" component={TipCalculator} />
      <Route path="/games/inflation-calculator" component={InflationCalculator} />
      <Route path="/games/savings-goal-calculator" component={SavingsGoalCalculator} />
      <Route path="/games/debt-payoff-calculator" component={DebtPayoffCalculator} />
      <Route path="/games/net-worth-calculator" component={NetWorthCalculator} />
      <Route path="/games/stock-profit-calculator" component={StockProfitCalculator} />
      <Route path="/games/retirement-calculator" component={RetirementCalculator} />
      <Route path="/games/sip-calculator" component={SIPCalculator} />
      <Route path="/games/investment-return-calculator" component={InvestmentReturnCalculator} />
      <Route path="/games/break-even-calculator" component={BreakEvenCalculator} />
      <Route path="/games/business-loan-calculator" component={BusinessLoanCalculator} />
      <Route path="/games/lease-calculator" component={LeaseCalculator} />
      <Route path="/games/car-loan-calculator" component={CarLoanCalculator} />
      <Route path="/games/home-loan-calculator" component={HomeLoanCalculator} />
      <Route path="/games/education-loan-calculator" component={EducationLoanCalculator} />
      <Route path="/games/credit-card-interest-calculator" component={CreditCardInterestCalculator} />
      <Route path="/games/percentage-calculator" component={PercentageCalculator} />
      <Route path="/games/discount-calculator" component={DiscountCalculator} />
      <Route path="/games/vat-gst-calculator" component={VATGSTCalculator} />
      <Route path="/games/paypal-fee-calculator" component={PayPalFeeCalculator} />
      <Route path="/games/currency-percentage-change-calculator" component={CurrencyPercentageChangeCalculator} />
      <Route path="/games/future-value-investment-calculator" component={FutureValueInvestmentCalculator} />
      <Route path="/games/bmi-calculator" component={BMICalculator} />
      <Route path="/games/bmr-calculator" component={BMRCalculator} />
      <Route path="/games/calorie-calculator" component={CalorieCalculator} />
      <Route path="/games/body-fat-calculator" component={BodyFatCalculator} />
      <Route path="/games/ideal-weight-calculator" component={IdealWeightCalculator} />
      <Route path="/games/pregnancy-due-date-calculator" component={PregnancyDueDateCalculator} />
      <Route path="/games/water-intake-calculator" component={WaterIntakeCalculator} />
      <Route path="/games/protein-intake-calculator" component={ProteinIntakeCalculator} />
      <Route path="/games/carb-calculator" component={CarbCalculator} />
      <Route path="/games/keto-macro-calculator" component={KetoMacroCalculator} />
      <Route path="/games/intermittent-fasting-timer" component={IntermittentFastingTimer} />
      <Route path="/games/daily-step-calorie-converter" component={DailyStepCalorieConverter} />
      <Route path="/games/heart-rate-calculator" component={HeartRateCalculator} />
      <Route path="/games/max-heart-rate-calculator" component={MaxHeartRateCalculator} />
      <Route path="/games/blood-pressure-tracker" component={BloodPressureTracker} />
      <Route path="/games/sleep-calculator" component={SleepCalculator} />
      <Route path="/games/ovulation-calculator" component={OvulationCalculator} />
      <Route path="/games/baby-growth-chart" component={BabyGrowthChart} />
      <Route path="/games/tdee-calculator" component={TDEECalculator} />
      <Route path="/games/lean-body-mass-calculator" component={LeanBodyMassCalculator} />
      <Route path="/games/waist-to-height-ratio-calculator" component={WaistToHeightRatioCalculator} />
      <Route path="/games/whr-calculator" component={WHRCalculator} />
      <Route path="/games/life-expectancy-calculator" component={LifeExpectancyCalculator} />
      <Route path="/games/cholesterol-risk-calculator" component={CholesterolRiskCalculator} />
      <Route path="/games/running-pace-calculator" component={RunningPaceCalculator} />
      <Route path="/games/cycling-speed-calculator" component={CyclingSpeedCalculator} />
      <Route path="/games/swimming-calorie-calculator" component={SwimmingCalorieCalculator} />
      <Route path="/games/alcohol-calorie-calculator" component={AlcoholCalorieCalculator} />
      <Route path="/games/smoking-cost-calculator" component={SmokingCostCalculator} />
      <Route path="/games/word-counter" component={WordCounter} />
      <Route path="/games/character-counter" component={CharacterCounter} />
        <Route path="/games/sentence-counter" component={SentenceCounter} />
        <Route path="/games/paragraph-counter" component={ParagraphCounter} />
        <Route path="/games/case-converter" component={CaseConverter} />
        <Route path="/games/password-generator" component={PasswordGenerator} />
        <Route path="/games/fake-name-generator" component={FakeNameGenerator} />
        <Route path="/games/username-generator" component={UsernameGenerator} />
        <Route path="/games/fake-address-generator" component={FakeAddressGenerator} />
        <Route path="/games/qr-text-generator" component={QRTextGenerator} />
        <Route path="/games/font-style-changer" component={FontStyleChanger} />
        <Route path="/games/reverse-text-tool" component={ReverseTextTool} />
        <Route path="/games/text-to-qr-code" component={TextToQRCode} />
        <Route path="/games/text-to-binary-converter" component={TextToBinaryConverter} />
        <Route path="/games/binary-to-text-converter" component={BinaryToTextConverter} />
        <Route path="/games/decimal-to-text-converter" component={DecimalToTextConverter} />
        <Route path="/games/text-to-decimal-converter" component={TextToDecimalConverter} />
        <Route path="/games/qr-code-scanner" component={QRCodeScanner} />
        <Route path="/games/markdown-to-html" component={MarkdownToHTMLConverter} />
        <Route path="/games/lorem-ipsum-generator" component={LoremIpsumGenerator} />
        <Route path="/games/hex-to-text-converter" component={HexToTextConverter} />
        <Route path="/games/text-to-hex-converter" component={TextToHexConverter} />
        <Route path="/games/duplicate-line-remover" component={DuplicateLineRemover} />
        <Route path="/games/text-scrambler" component={TextScrambler} />
        <Route path="/games/text-diff-checker" component={TextDiffChecker} />
        <Route path="/games/text-pattern-generator" component={TextPatternGenerator} />
        <Route path="/games/text-formatter-beautifier" component={TextFormatterBeautifier} />
        <Route path="/games/password-strength-checker" component={PasswordStrengthChecker} />
      <Route path="/games/:toolId" component={ToolPage} />

      {/* Game routes */}
      <Route path="/games" component={AllTools} />

      {/* Game category routes */}
      <Route path="/math-games" component={FinanceTools} />
      <Route path="/language-games" component={TextTools} />
      <Route path="/science-games" component={HealthTools} />
      <Route path="/memory-games" component={MemoryGames} />
      <Route path="/logic-games" component={LogicGames} />

      {/* Legacy routes for backward compatibility */}
      <Route path="/finance" component={FinanceTools} />
      <Route path="/text" component={TextTools} />
      <Route path="/health" component={HealthTools} />
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
      <ThemeProvider defaultTheme="light" storageKey="dapsiwow-ui-theme">
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