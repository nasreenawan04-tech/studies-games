
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ROIResult {
  roi: number;
  totalGain: number;
  totalReturn: number;
  initialInvestment: number;
  finalValue: number;
  annualizedROI: number;
  breakEvenTime: number;
}

export default function ROICalculator() {
  const [calculationType, setCalculationType] = useState('basic');
  
  // Basic ROI
  const [initialInvestment, setInitialInvestment] = useState('10000');
  const [finalValue, setFinalValue] = useState('12000');
  const [timePeriod, setTimePeriod] = useState('1');
  const [timeUnit, setTimeUnit] = useState('years');
  
  // Investment ROI
  const [investmentAmount, setInvestmentAmount] = useState('10000');
  const [monthlyContribution, setMonthlyContribution] = useState('500');
  const [annualReturn, setAnnualReturn] = useState('8');
  const [investmentYears, setInvestmentYears] = useState('5');
  
  // Business ROI
  const [projectCost, setProjectCost] = useState('50000');
  const [annualRevenue, setAnnualRevenue] = useState('20000');
  const [annualCosts, setAnnualCosts] = useState('5000');
  const [projectDuration, setProjectDuration] = useState('3');
  
  const [currency, setCurrency] = useState('USD');
  const [result, setResult] = useState<ROIResult | null>(null);

  const currencies = [
    { code: 'USD', name: 'US Dollar' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'British Pound' },
    { code: 'JPY', name: 'Japanese Yen' },
    { code: 'CNY', name: 'Chinese Yuan' },
    { code: 'INR', name: 'Indian Rupee' },
    { code: 'CAD', name: 'Canadian Dollar' },
    { code: 'AUD', name: 'Australian Dollar' },
    { code: 'CHF', name: 'Swiss Franc' },
    { code: 'BRL', name: 'Brazilian Real' },
    { code: 'MXN', name: 'Mexican Peso' },
    { code: 'KRW', name: 'South Korean Won' },
    { code: 'SGD', name: 'Singapore Dollar' },
    { code: 'HKD', name: 'Hong Kong Dollar' },
    { code: 'NZD', name: 'New Zealand Dollar' }
  ];

  const calculateBasicROI = () => {
    const initial = parseFloat(initialInvestment);
    const final = parseFloat(finalValue);
    const time = timeUnit === 'years' ? parseFloat(timePeriod) : parseFloat(timePeriod) / 12;

    if (initial <= 0 || final <= 0 || time <= 0) return;

    const totalGain = final - initial;
    const roi = (totalGain / initial) * 100;
    const annualizedROI = time !== 0 ? (Math.pow(final / initial, 1 / time) - 1) * 100 : roi;
    const breakEvenTime = totalGain >= 0 ? 0 : Math.abs(initial / (totalGain / time));

    setResult({
      roi,
      totalGain,
      totalReturn: final,
      initialInvestment: initial,
      finalValue: final,
      annualizedROI,
      breakEvenTime
    });
  };

  const calculateInvestmentROI = () => {
    const initial = parseFloat(investmentAmount);
    const monthly = parseFloat(monthlyContribution);
    const rate = parseFloat(annualReturn) / 100;
    const years = parseFloat(investmentYears);

    if (initial <= 0 || rate <= 0 || years <= 0) return;

    const monthlyRate = rate / 12;
    const months = years * 12;
    
    // Future value of initial investment
    const futureValueInitial = initial * Math.pow(1 + rate, years);
    
    // Future value of monthly contributions (annuity)
    const futureValueMonthly = monthly * (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate;
    
    const finalValue = futureValueInitial + futureValueMonthly;
    const totalInvested = initial + (monthly * months);
    const totalGain = finalValue - totalInvested;
    const roi = (totalGain / totalInvested) * 100;
    const annualizedROI = (Math.pow(finalValue / totalInvested, 1 / years) - 1) * 100;

    setResult({
      roi,
      totalGain,
      totalReturn: finalValue,
      initialInvestment: totalInvested,
      finalValue,
      annualizedROI,
      breakEvenTime: 0
    });
  };

  const calculateBusinessROI = () => {
    const cost = parseFloat(projectCost);
    const revenue = parseFloat(annualRevenue);
    const costs = parseFloat(annualCosts);
    const duration = parseFloat(projectDuration);

    if (cost <= 0 || revenue <= 0 || duration <= 0) return;

    const annualProfit = revenue - costs;
    const totalProfit = annualProfit * duration;
    const totalGain = totalProfit - cost;
    const roi = (totalGain / cost) * 100;
    const annualizedROI = roi / duration;
    const breakEvenTime = cost / annualProfit;

    setResult({
      roi,
      totalGain,
      totalReturn: totalProfit,
      initialInvestment: cost,
      finalValue: cost + totalGain,
      annualizedROI,
      breakEvenTime
    });
  };

  const resetCalculator = () => {
    setInitialInvestment('10000');
    setFinalValue('12000');
    setTimePeriod('1');
    setTimeUnit('years');
    setInvestmentAmount('10000');
    setMonthlyContribution('500');
    setAnnualReturn('8');
    setInvestmentYears('5');
    setProjectCost('50000');
    setAnnualRevenue('20000');
    setAnnualCosts('5000');
    setProjectDuration('3');
    setCurrency('USD');
    setResult(null);
  };

  const formatCurrency = (amount: number) => {
    const currencyMap: { [key: string]: { locale: string; currency: string } } = {
      USD: { locale: 'en-US', currency: 'USD' },
      EUR: { locale: 'de-DE', currency: 'EUR' },
      GBP: { locale: 'en-GB', currency: 'GBP' },
      INR: { locale: 'en-IN', currency: 'INR' },
      JPY: { locale: 'ja-JP', currency: 'JPY' },
      CAD: { locale: 'en-CA', currency: 'CAD' },
      AUD: { locale: 'en-AU', currency: 'AUD' },
      CNY: { locale: 'zh-CN', currency: 'CNY' },
      BRL: { locale: 'pt-BR', currency: 'BRL' },
      MXN: { locale: 'es-MX', currency: 'MXN' },
      KRW: { locale: 'ko-KR', currency: 'KRW' },
      SGD: { locale: 'en-SG', currency: 'SGD' },
      HKD: { locale: 'zh-HK', currency: 'HKD' },
      NZD: { locale: 'en-NZ', currency: 'NZD' },
      CHF: { locale: 'de-CH', currency: 'CHF' }
    };

    const config = currencyMap[currency] || currencyMap.USD;
    
    return new Intl.NumberFormat(config.locale, {
      style: 'currency',
      currency: config.currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  const formatPercentage = (percentage: number) => {
    return `${percentage >= 0 ? '+' : ''}${percentage.toFixed(2)}%`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Helmet>
        <title>ROI Calculator - Calculate Return on Investment | DapsiWow</title>
        <meta name="description" content="Free ROI Calculator - Calculate Return on Investment for stocks, business projects, real estate, and financial decisions. Get instant ROI analysis with our comprehensive investment calculator tool." />
        <meta name="keywords" content="roi calculator, return on investment calculator, investment calculator, business roi calculator, investment analysis, financial calculator" />
        <meta property="og:title" content="ROI Calculator - Calculate Return on Investment | DapsiWow" />
        <meta property="og:description" content="Free ROI Calculator to calculate return on investment for stocks, business projects, real estate, and financial decisions." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://dapsiwow.com/roi-calculator" />
      </Helmet>
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 text-center">
            <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
              <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 text-xs sm:text-sm md:text-base">
                <span className="font-medium text-blue-700">Professional ROI Calculator</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-slate-900 leading-tight tracking-tight">
                <span className="block">Smart ROI</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Calculator
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-600 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto leading-relaxed px-2 sm:px-4 md:px-6">
                Calculate return on investment for stocks, business projects, real estate, and financial decisions with precision
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Main Calculator Card */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-0 rounded-3xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                {/* Input Section */}
                <div className="lg:col-span-2 p-8 lg:p-12 space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">ROI Configuration</h2>
                    <p className="text-gray-600">Enter your investment details to calculate return on investment</p>
                  </div>
                  
                  {/* Currency Selection */}
                  <div className="space-y-3">
                    <Label htmlFor="currency" className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
                      Currency
                    </Label>
                    <Select value={currency} onValueChange={setCurrency}>
                      <SelectTrigger className="h-14 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-blue-500" data-testid="select-currency">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {currencies.map((curr) => (
                          <SelectItem key={curr.code} value={curr.code}>
                            {curr.code} - {curr.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Calculation Type Tabs */}
                  <Tabs value={calculationType} onValueChange={setCalculationType} className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="basic">Basic ROI</TabsTrigger>
                      <TabsTrigger value="investment">Investment</TabsTrigger>
                      <TabsTrigger value="business">Business</TabsTrigger>
                    </TabsList>

                    <TabsContent value="basic" className="space-y-6 mt-6">
                      <div className="space-y-3">
                        <Label htmlFor="initial-investment" className="text-sm font-medium text-gray-700">
                          Initial Investment
                        </Label>
                        <Input
                          id="initial-investment"
                          type="number"
                          value={initialInvestment}
                          onChange={(e) => setInitialInvestment(e.target.value)}
                          className="h-12 text-base border-gray-200 rounded-lg"
                          placeholder="10,000"
                        />
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="final-value" className="text-sm font-medium text-gray-700">
                          Final Value
                        </Label>
                        <Input
                          id="final-value"
                          type="number"
                          value={finalValue}
                          onChange={(e) => setFinalValue(e.target.value)}
                          className="h-12 text-base border-gray-200 rounded-lg"
                          placeholder="12,000"
                        />
                      </div>

                      <div className="space-y-3">
                        <Label className="text-sm font-medium text-gray-700">Time Period</Label>
                        <div className="grid grid-cols-2 gap-3">
                          <Input
                            type="number"
                            value={timePeriod}
                            onChange={(e) => setTimePeriod(e.target.value)}
                            className="h-12 text-base border-gray-200 rounded-lg"
                            placeholder="1"
                            min="1"
                          />
                          <Select value={timeUnit} onValueChange={setTimeUnit}>
                            <SelectTrigger className="h-12 border-gray-200 rounded-lg">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="years">Years</SelectItem>
                              <SelectItem value="months">Months</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="investment" className="space-y-6 mt-6">
                      <div className="space-y-3">
                        <Label htmlFor="investment-amount" className="text-sm font-medium text-gray-700">
                          Initial Investment
                        </Label>
                        <Input
                          id="investment-amount"
                          type="number"
                          value={investmentAmount}
                          onChange={(e) => setInvestmentAmount(e.target.value)}
                          className="h-12 text-base border-gray-200 rounded-lg"
                          placeholder="10,000"
                        />
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="monthly-contribution" className="text-sm font-medium text-gray-700">
                          Monthly Contribution
                        </Label>
                        <Input
                          id="monthly-contribution"
                          type="number"
                          value={monthlyContribution}
                          onChange={(e) => setMonthlyContribution(e.target.value)}
                          className="h-12 text-base border-gray-200 rounded-lg"
                          placeholder="500"
                        />
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="annual-return" className="text-sm font-medium text-gray-700">
                          Expected Annual Return (%)
                        </Label>
                        <Input
                          id="annual-return"
                          type="number"
                          value={annualReturn}
                          onChange={(e) => setAnnualReturn(e.target.value)}
                          className="h-12 text-base border-gray-200 rounded-lg"
                          placeholder="8"
                          step="0.01"
                        />
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="investment-years" className="text-sm font-medium text-gray-700">
                          Investment Period (Years)
                        </Label>
                        <Input
                          id="investment-years"
                          type="number"
                          value={investmentYears}
                          onChange={(e) => setInvestmentYears(e.target.value)}
                          className="h-12 text-base border-gray-200 rounded-lg"
                          placeholder="5"
                          min="1"
                        />
                      </div>
                    </TabsContent>

                    <TabsContent value="business" className="space-y-6 mt-6">
                      <div className="space-y-3">
                        <Label htmlFor="project-cost" className="text-sm font-medium text-gray-700">
                          Project Cost
                        </Label>
                        <Input
                          id="project-cost"
                          type="number"
                          value={projectCost}
                          onChange={(e) => setProjectCost(e.target.value)}
                          className="h-12 text-base border-gray-200 rounded-lg"
                          placeholder="50,000"
                        />
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="annual-revenue" className="text-sm font-medium text-gray-700">
                          Annual Revenue
                        </Label>
                        <Input
                          id="annual-revenue"
                          type="number"
                          value={annualRevenue}
                          onChange={(e) => setAnnualRevenue(e.target.value)}
                          className="h-12 text-base border-gray-200 rounded-lg"
                          placeholder="20,000"
                        />
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="annual-costs" className="text-sm font-medium text-gray-700">
                          Annual Operating Costs
                        </Label>
                        <Input
                          id="annual-costs"
                          type="number"
                          value={annualCosts}
                          onChange={(e) => setAnnualCosts(e.target.value)}
                          className="h-12 text-base border-gray-200 rounded-lg"
                          placeholder="5,000"
                        />
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="project-duration" className="text-sm font-medium text-gray-700">
                          Project Duration (Years)
                        </Label>
                        <Input
                          id="project-duration"
                          type="number"
                          value={projectDuration}
                          onChange={(e) => setProjectDuration(e.target.value)}
                          className="h-12 text-base border-gray-200 rounded-lg"
                          placeholder="3"
                          min="1"
                        />
                      </div>
                    </TabsContent>
                  </Tabs>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-6">
                    <Button
                      onClick={calculationType === 'basic' ? calculateBasicROI : calculationType === 'investment' ? calculateInvestmentROI : calculateBusinessROI}
                      className="flex-1 h-14 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-lg"
                      data-testid="button-calculate-roi"
                    >
                      Calculate ROI
                    </Button>
                    <Button
                      onClick={resetCalculator}
                      variant="outline"
                      className="h-12 px-8 border-gray-200 text-gray-600 hover:bg-gray-50 font-medium rounded-lg"
                    >
                      Reset
                    </Button>
                  </div>
                </div>

                {/* Results Section */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 lg:p-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">ROI Analysis</h2>
                  
                  {result ? (
                    <div className="space-y-6">
                      {/* ROI Display */}
                      <div className="bg-white rounded-lg p-6 border border-gray-100">
                        <div className="text-center space-y-2">
                          <div className="text-sm text-gray-600">Return on Investment</div>
                          <div className={`text-4xl font-bold ${result.roi >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {formatPercentage(result.roi)}
                          </div>
                        </div>
                      </div>

                      {/* Summary */}
                      <div className="space-y-4">
                        <div className="flex justify-between items-center py-3 border-b border-gray-200">
                          <span className="text-gray-600">Initial Investment</span>
                          <span className="font-semibold text-gray-900">
                            {formatCurrency(result.initialInvestment)}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-gray-200">
                          <span className="text-gray-600">Final Value</span>
                          <span className="font-semibold text-green-600">
                            {formatCurrency(result.finalValue)}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-gray-200">
                          <span className="text-gray-600">Total Gain/Loss</span>
                          <span className={`font-semibold ${result.totalGain >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {result.totalGain >= 0 ? '+' : ''}{formatCurrency(result.totalGain)}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-gray-200">
                          <span className="text-gray-600">Annualized ROI</span>
                          <span className={`font-semibold ${result.annualizedROI >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {formatPercentage(result.annualizedROI)}
                          </span>
                        </div>
                        {calculationType === 'business' && result.breakEvenTime > 0 && (
                          <div className="flex justify-between items-center py-3">
                            <span className="text-gray-600">Break-even Time</span>
                            <span className="font-semibold text-gray-900">
                              {result.breakEvenTime.toFixed(1)} years
                            </span>
                          </div>
                        )}
                      </div>

                      {/* ROI Interpretation */}
                      <div className="mt-8">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Interpretation</h3>
                        <div className={`p-4 rounded-lg border ${
                          result.roi >= 20 ? 'bg-green-50 border-green-200' :
                          result.roi >= 10 ? 'bg-yellow-50 border-yellow-200' :
                          result.roi >= 0 ? 'bg-blue-50 border-blue-200' :
                          'bg-red-50 border-red-200'
                        }`}>
                          <div className={`text-sm ${
                            result.roi >= 20 ? 'text-green-700' :
                            result.roi >= 10 ? 'text-yellow-700' :
                            result.roi >= 0 ? 'text-blue-700' :
                            'text-red-700'
                          }`}>
                            {result.roi >= 20 ? 'Excellent ROI - This is a very profitable investment' :
                             result.roi >= 10 ? 'Good ROI - This investment shows solid returns' :
                             result.roi >= 0 ? 'Positive ROI - This investment is profitable' :
                             'Negative ROI - This investment results in a loss'}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-blue-600">%</span>
                      </div>
                      <p className="text-gray-500 text-lg">Enter investment details and click calculate to see ROI analysis</p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Educational Content */}
          <div className="mt-12 space-y-12">
            {/* What is ROI Section */}
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What is ROI (Return on Investment)?</h2>
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p className="text-lg leading-relaxed mb-6">
                    <strong>Return on Investment (ROI)</strong> is a fundamental financial metric used to evaluate the efficiency and profitability of an investment. 
                    ROI measures how much profit or loss an investment generates relative to its cost, expressed as a percentage. 
                    This powerful calculation helps investors, businesses, and individuals make informed financial decisions by comparing the potential returns of different investment opportunities.
                  </p>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">ROI Formula</h3>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-700 mb-2">
                        ROI = (Gain from Investment - Cost of Investment) / Cost of Investment × 100%
                      </div>
                      <p className="text-blue-600">Also expressed as: ROI = (Net Profit / Investment Cost) × 100%</p>
                    </div>
                  </div>

                  <p className="text-lg leading-relaxed">
                    Our free ROI calculator simplifies this process by automatically computing returns for various investment types, 
                    including basic investments, compound investment strategies, and business projects. Whether you're evaluating 
                    stock market investments, real estate opportunities, business ventures, or educational investments, 
                    understanding ROI is crucial for maximizing your financial success.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* How to Use Section */}
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Use the ROI Calculator</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl font-bold text-blue-600">1</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Basic ROI Calculation</h3>
                    <p className="text-gray-600">
                      Enter your initial investment amount and final value to calculate simple ROI. 
                      Perfect for evaluating stock trades, bond investments, or any straightforward investment scenario.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl font-bold text-green-600">2</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Investment ROI</h3>
                    <p className="text-gray-600">
                      Calculate returns for investments with regular contributions, such as 401(k) plans, 
                      monthly savings, or systematic investment plans (SIP) with compound growth.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl font-bold text-purple-600">3</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Business ROI</h3>
                    <p className="text-gray-600">
                      Evaluate business projects by entering project costs, expected revenue, and operating expenses. 
                      Essential for capital allocation decisions and project prioritization.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits for Different Audiences */}
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">ROI Calculator Benefits by Audience</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white text-xl font-bold">📚</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Students & New Investors</h3>
                    <div className="space-y-3 text-gray-700">
                      <p><strong>Learn Investment Fundamentals:</strong> Understand how returns work across different investment types and time horizons.</p>
                      <p><strong>Education Planning:</strong> Calculate the return on investment for college courses, certifications, or educational programs.</p>
                      <p><strong>First-Time Investing:</strong> Compare potential returns from stocks, bonds, and compound interest investments.</p>
                      <p><strong>Goal Setting:</strong> Plan for financial milestones like buying a car or saving for a down payment.</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-xl">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white text-xl font-bold">💼</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Working Professionals</h3>
                    <div className="space-y-3 text-gray-700">
                      <p><strong>Retirement Planning:</strong> Optimize 401(k) and IRA contributions for long-term wealth building.</p>
                      <p><strong>Career Investment:</strong> Evaluate the ROI of professional certifications, MBA programs, or skill development courses.</p>
                      <p><strong>Home Ownership:</strong> Analyze real estate investments and mortgage decisions.</p>
                      <p><strong>Stock Portfolio Management:</strong> Track and optimize your investment portfolio performance with detailed ROI analysis.</p>
                      <p><strong>Debt Management:</strong> Compare investment returns with debt payoff strategies.</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-6 rounded-xl">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white text-xl font-bold">🏢</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Owners & Entrepreneurs</h3>
                    <div className="space-y-3 text-gray-700">
                      <p><strong>Business Financing:</strong> Evaluate loan options and capital investments.</p>
                      <p><strong>Marketing ROI:</strong> Measure advertising campaign effectiveness and customer acquisition costs across different channels.</p>
                      <p><strong>Equipment & Technology:</strong> Justify capital expenditures on machinery, software, or technology upgrades.</p>
                      <p><strong>Expansion Analysis:</strong> Evaluate new location openings, product launches, or market expansion opportunities.</p>
                      <p><strong>Investment Decisions:</strong> Compare business reinvestment options with external investment opportunities.</p>
                      <p><strong>Break-Even Planning:</strong> Determine project viability and time to profitability.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Use Cases Section */}
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive ROI Calculator Use Cases</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900">📈 Investment Analysis</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                        <div>
                          <strong className="text-gray-900">Stock Market Investments:</strong>
                          <span className="text-gray-600"> Calculate returns on individual stocks, ETFs, or mutual funds with dividend reinvestment</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                        <div>
                          <strong className="text-gray-900">Real Estate Investments:</strong>
                          <span className="text-gray-600"> Evaluate rental properties, REITs, and property appreciation</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                        <div>
                          <strong className="text-gray-900">Cryptocurrency Trading:</strong>
                          <span className="text-gray-600"> Analyze digital asset investment performance and trading strategies</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                        <div>
                          <strong className="text-gray-900">Retirement Accounts:</strong>
                          <span className="text-gray-600"> Project 401(k), IRA, and pension growth</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                        <div>
                          <strong className="text-gray-900">SIP Investments:</strong>
                          <span className="text-gray-600"> Calculate systematic investment plan returns</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900">🏢 Business Applications</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                        <div>
                          <strong className="text-gray-900">Marketing Campaigns:</strong>
                          <span className="text-gray-600"> Measure advertising spend effectiveness, customer acquisition costs, and campaign performance</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                        <div>
                          <strong className="text-gray-900">Equipment & Technology:</strong>
                          <span className="text-gray-600"> Justify capital expenditures on machinery, software, and technology upgrades</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                        <div>
                          <strong className="text-gray-900">Employee Training:</strong>
                          <span className="text-gray-600"> Calculate returns on employee development, certification programs, and skill training</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                        <div>
                          <strong className="text-gray-900">Business Loans:</strong>
                          <span className="text-gray-600"> Evaluate financing options and loan terms</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                        <div>
                          <strong className="text-gray-900">Process Optimization:</strong>
                          <span className="text-gray-600"> Assess efficiency initiatives, automation projects, and operational improvements</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Understanding Results Section */}
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Your ROI Results</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900">ROI Interpretation Guide</h3>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4 bg-green-50 border-green-200">
                        <div className="flex items-center mb-2">
                          <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                          <strong className="text-green-800">Excellent ROI (20%+)</strong>
                        </div>
                        <p className="text-green-700 text-sm">Outstanding investment performance, significantly above market averages</p>
                      </div>
                      
                      <div className="border rounded-lg p-4 bg-blue-50 border-blue-200">
                        <div className="flex items-center mb-2">
                          <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                          <strong className="text-blue-800">Good ROI (10-20%)</strong>
                        </div>
                        <p className="text-blue-700 text-sm">Solid returns that beat inflation and many traditional investments</p>
                      </div>
                      
                      <div className="border rounded-lg p-4 bg-yellow-50 border-yellow-200">
                        <div className="flex items-center mb-2">
                          <div className="w-4 h-4 bg-yellow-500 rounded-full mr-3"></div>
                          <strong className="text-yellow-800">Average ROI (5-10%)</strong>
                        </div>
                        <p className="text-yellow-700 text-sm">Modest returns, comparable to market indices and savings accounts</p>
                      </div>
                      
                      <div className="border rounded-lg p-4 bg-red-50 border-red-200">
                        <div className="flex items-center mb-2">
                          <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                          <strong className="text-red-800">Poor ROI (Below 5% or Negative)</strong>
                        </div>
                        <p className="text-red-700 text-sm">Underperforming investments that may require reassessment</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900">Key Metrics Explained</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <strong className="text-gray-900">Annualized ROI:</strong>
                        <p className="text-gray-600 text-sm">
                          Shows the equivalent yearly return rate, essential for comparing investments over different time periods.
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <strong className="text-gray-900">Total Gain/Loss:</strong>
                        <p className="text-gray-600 text-sm">
                          The absolute dollar amount gained or lost, helping you understand the actual financial impact.
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <strong className="text-gray-900">Break-even Time:</strong>
                        <p className="text-gray-600 text-sm">
                          For business investments, this shows how long it takes to recover your initial investment.
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <strong className="text-gray-900">Final Value:</strong>
                        <p className="text-gray-600 text-sm">
                          The total worth of your investment at the end of the period, including principal and gains.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tips and Best Practices */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white border-0 shadow-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">ROI Best Practices</h3>
                  <div className="space-y-4">
                    <div className="space-y-3 text-gray-600">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                        <div>
                          <strong className="text-gray-900">Consider Time Value:</strong>
                          <span> Account for inflation and opportunity costs when evaluating long-term investments</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                        <div>
                          <strong className="text-gray-900">Include All Costs:</strong>
                          <span> Factor in fees, taxes, maintenance costs, and other expenses</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                        <div>
                          <strong className="text-gray-900">Risk Assessment:</strong>
                          <span> Balance high ROI potential with investment risk tolerance</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                        <div>
                          <strong className="text-gray-900">Regular Reviews:</strong>
                          <span> Monitor and recalculate ROI periodically to track performance</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                        <div>
                          <strong className="text-gray-900">Diversification:</strong>
                          <span> Use ROI analysis to build a balanced investment portfolio</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Common ROI Mistakes to Avoid</h3>
                  <div className="space-y-4">
                    <div className="space-y-3 text-gray-600">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                        <div>
                          <strong className="text-gray-900">Ignoring Inflation:</strong>
                          <span> Not accounting for purchasing power erosion over time</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                        <div>
                          <strong className="text-gray-900">Short-term Focus:</strong>
                          <span> Making decisions based solely on recent performance</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                        <div>
                          <strong className="text-gray-900">Hidden Costs:</strong>
                          <span> Overlooking transaction fees, management fees, and taxes</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                        <div>
                          <strong className="text-gray-900">Cherry-picking Data:</strong>
                          <span> Selecting favorable time periods that don't represent true performance</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                        <div>
                          <strong className="text-gray-900">Unrealistic Expectations:</strong>
                          <span> Expecting consistently high returns without considering market volatility</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Types of ROI Calculations */}
            <section className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Types of ROI Calculations and Investment Strategies</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {/* Simple ROI */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Simple ROI Calculation</h3>
                  <div className="space-y-4 text-gray-700">
                    <p className="font-medium">Best suited for straightforward investments with clear start and end points.</p>
                    <div className="bg-white rounded-xl p-4">
                      <h4 className="font-bold text-blue-800 mb-2">Perfect For:</h4>
                      <div className="space-y-2 text-sm">
                        <p>• Stock purchases and sales</p>
                        <p>• Bond investments to maturity</p>
                        <p>• Property flipping projects</p>
                        <p>• Short-term business ventures</p>
                        <p>• Cryptocurrency trading</p>
                      </div>
                    </div>
                    <div className="bg-blue-600 text-white rounded-xl p-4">
                      <p className="text-sm font-medium">ROI = (Final Value - Initial Investment) / Initial Investment × 100%</p>
                    </div>
                  </div>
                </div>

                {/* Compound ROI */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Compound ROI Analysis</h3>
                  <div className="space-y-4 text-gray-700">
                    <p className="font-medium">Advanced calculations for investments with reinvested earnings and regular contributions.</p>
                    <div className="bg-white rounded-xl p-4">
                      <h4 className="font-bold text-green-800 mb-2">Ideal For:</h4>
                      <div className="space-y-2 text-sm">
                        <p>• 401(k) and retirement accounts</p>
                        <p>• Dividend reinvestment plans (DRIPs)</p>
                        <p>• Systematic investment plans (SIP)</p>
                        <p>• Long-term mutual fund investing</p>
                        <p>• Educational savings accounts</p>
                      </div>
                    </div>
                    <div className="bg-green-600 text-white rounded-xl p-4">
                      <p className="text-sm font-medium">Accounts for reinvestment and compound growth over multiple periods</p>
                    </div>
                  </div>
                </div>

                {/* Business ROI */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Business ROI Evaluation</h3>
                  <div className="space-y-4 text-gray-700">
                    <p className="font-medium">Comprehensive analysis incorporating revenues, costs, and operational factors.</p>
                    <div className="bg-white rounded-xl p-4">
                      <h4 className="font-bold text-purple-800 mb-2">Essential For:</h4>
                      <div className="space-y-2 text-sm">
                        <p>• Capital expenditure decisions</p>
                        <p>• Marketing campaign effectiveness</p>
                        <p>• Technology implementation projects</p>
                        <p>• Business expansion initiatives</p>
                        <p>• Employee training programs</p>
                      </div>
                    </div>
                    <div className="bg-purple-600 text-white rounded-xl p-4">
                      <p className="text-sm font-medium">Includes break-even analysis and cash flow considerations</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Advanced ROI Calculation Techniques</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">Risk-Adjusted ROI</h4>
                      <p className="text-gray-700 mb-3">
                        Factor in investment risk by adjusting returns based on volatility and uncertainty. This method provides a more accurate picture of investment performance by considering the risk taken to achieve returns.
                      </p>
                      <div className="bg-white rounded-xl p-4">
                        <p className="text-sm text-gray-600"><strong>Formula:</strong> Risk-Adjusted ROI = (ROI - Risk-Free Rate) / Standard Deviation</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">Tax-Adjusted ROI</h4>
                      <p className="text-gray-700 mb-3">
                        Calculate after-tax returns to understand your real investment performance. This is crucial for comparing taxable vs. tax-advantaged investments and making optimal allocation decisions.
                      </p>
                      <div className="bg-white rounded-xl p-4">
                        <p className="text-sm text-gray-600"><strong>Consider:</strong> Capital gains tax, dividend tax, interest tax, and tax-deferred accounts</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">Inflation-Adjusted ROI</h4>
                      <p className="text-gray-700 mb-3">
                        Account for purchasing power erosion over time to determine real returns. This "real ROI" shows whether your investments are actually building wealth or just keeping pace with inflation.
                      </p>
                      <div className="bg-white rounded-xl p-4">
                        <p className="text-sm text-gray-600"><strong>Formula:</strong> Real ROI = [(1 + Nominal ROI) / (1 + Inflation Rate)] - 1</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">Opportunity Cost ROI</h4>
                      <p className="text-gray-700 mb-3">
                        Compare your investment returns against alternative opportunities to ensure optimal capital allocation. This helps identify whether your investment strategy is truly maximizing potential returns.
                      </p>
                      <div className="bg-white rounded-xl p-4">
                        <p className="text-sm text-gray-600"><strong>Compare:</strong> Stock market averages, bond yields, real estate returns, and business opportunities</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Industry-Specific ROI Applications */}
            <section className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Industry-Specific ROI Applications and Benchmarks</h2>
              
              <div className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Technology Sector */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Technology & Software</h3>
                    <div className="space-y-4">
                      <div className="bg-white rounded-xl p-4">
                        <h4 className="font-bold text-blue-800 mb-2">Typical ROI Ranges</h4>
                        <div className="space-y-2 text-sm text-gray-700">
                          <p>• Software Development: 200-500% ROI</p>
                          <p>• Cloud Infrastructure: 100-300% ROI</p>
                          <p>• Automation Projects: 150-400% ROI</p>
                          <p>• AI/ML Implementations: 250-600% ROI</p>
                        </div>
                      </div>
                      <div className="bg-blue-600 text-white rounded-xl p-4">
                        <h4 className="font-semibold mb-2">Key Metrics</h4>
                        <p className="text-sm">Focus on user acquisition cost, lifetime value, and subscription renewal rates for software businesses.</p>
                      </div>
                    </div>
                  </div>

                  {/* Real Estate */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Real Estate Investment</h3>
                    <div className="space-y-4">
                      <div className="bg-white rounded-xl p-4">
                        <h4 className="font-bold text-green-800 mb-2">Expected Returns</h4>
                        <div className="space-y-2 text-sm text-gray-700">
                          <p>• Rental Properties: 8-15% annual ROI</p>
                          <p>• House Flipping: 10-30% per project</p>
                          <p>• Commercial Real Estate: 6-12% ROI</p>
                          <p>• REITs: 4-10% dividend yield</p>
                        </div>
                      </div>
                      <div className="bg-green-600 text-white rounded-xl p-4">
                        <h4 className="font-semibold mb-2">Calculation Factors</h4>
                        <p className="text-sm">Include property taxes, maintenance costs, vacancy rates, and appreciation in your ROI analysis.</p>
                      </div>
                    </div>
                  </div>

                  {/* Manufacturing */}
                  <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Manufacturing & Industrial</h3>
                    <div className="space-y-4">
                      <div className="bg-white rounded-xl p-4">
                        <h4 className="font-bold text-orange-800 mb-2">Equipment ROI</h4>
                        <div className="space-y-2 text-sm text-gray-700">
                          <p>• Production Equipment: 15-25% ROI</p>
                          <p>• Automation Systems: 20-40% ROI</p>
                          <p>• Energy Efficiency: 10-30% ROI</p>
                          <p>• Safety Improvements: 50-200% ROI</p>
                        </div>
                      </div>
                      <div className="bg-orange-600 text-white rounded-xl p-4">
                        <h4 className="font-semibold mb-2">Success Factors</h4>
                        <p className="text-sm">Consider productivity gains, quality improvements, and reduced downtime in manufacturing ROI calculations.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Marketing & Advertising */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Marketing & Advertising ROI</h3>
                    <div className="space-y-4">
                      <div className="bg-white rounded-xl p-6">
                        <h4 className="font-bold text-purple-800 mb-4">Channel-Specific ROI Benchmarks</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                          <div>
                            <p className="font-semibold">Digital Channels:</p>
                            <p>• Google Ads: 200-800% ROI</p>
                            <p>• Facebook Ads: 150-400% ROI</p>
                            <p>• Email Marketing: 3600-4200% ROI</p>
                            <p>• Content Marketing: 300-500% ROI</p>
                          </div>
                          <div>
                            <p className="font-semibold">Traditional Media:</p>
                            <p>• TV Advertising: 100-300% ROI</p>
                            <p>• Radio Ads: 150-250% ROI</p>
                            <p>• Print Media: 100-200% ROI</p>
                            <p>• Direct Mail: 120-180% ROI</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-purple-600 text-white rounded-xl p-4">
                        <h4 className="font-semibold mb-2">ROI Optimization Tips</h4>
                        <p className="text-sm">Track customer acquisition cost (CAC), lifetime value (LTV), and attribution models for accurate marketing ROI measurement.</p>
                      </div>
                    </div>
                  </div>

                  {/* Education & Training */}
                  <div className="bg-gradient-to-br from-yellow-50 to-amber-100 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Education & Professional Development</h3>
                    <div className="space-y-4">
                      <div className="bg-white rounded-xl p-6">
                        <h4 className="font-bold text-yellow-800 mb-4">Investment ROI by Education Type</h4>
                        <div className="space-y-3 text-sm text-gray-700">
                          <div className="flex justify-between">
                            <span>• College Degree:</span>
                            <span className="font-semibold">200-400% lifetime ROI</span>
                          </div>
                          <div className="flex justify-between">
                            <span>• Professional Certification:</span>
                            <span className="font-semibold">150-300% ROI</span>
                          </div>
                          <div className="flex justify-between">
                            <span>• Technical Bootcamp:</span>
                            <span className="font-semibold">300-500% ROI</span>
                          </div>
                          <div className="flex justify-between">
                            <span>• MBA Program:</span>
                            <span className="font-semibold">100-250% ROI</span>
                          </div>
                          <div className="flex justify-between">
                            <span>• Online Courses:</span>
                            <span className="font-semibold">200-600% ROI</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-yellow-600 text-white rounded-xl p-4">
                        <h4 className="font-semibold mb-2">Career Impact Factors</h4>
                        <p className="text-sm">Consider salary increases, promotion opportunities, and long-term career advancement when calculating education ROI.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ROI vs Other Financial Metrics */}
            <section className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">ROI vs Other Financial Metrics: Complete Comparison Guide</h2>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-2xl shadow-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                      <th className="border border-gray-200 p-4 text-left font-bold">Metric</th>
                      <th className="border border-gray-200 p-4 text-left font-bold">Purpose</th>
                      <th className="border border-gray-200 p-4 text-left font-bold">Best For</th>
                      <th className="border border-gray-200 p-4 text-left font-bold">Calculation</th>
                      <th className="border border-gray-200 p-4 text-left font-bold">Time Consideration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="border border-gray-200 p-4 font-semibold text-blue-800">ROI (Return on Investment)</td>
                      <td className="border border-gray-200 p-4">Measure investment efficiency</td>
                      <td className="border border-gray-200 p-4">All investment types</td>
                      <td className="border border-gray-200 p-4">(Gain - Cost) / Cost × 100%</td>
                      <td className="border border-gray-200 p-4">Any time period</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50 transition-colors">
                      <td className="border border-gray-200 p-4 font-semibold text-green-800">IRR (Internal Rate of Return)</td>
                      <td className="border border-gray-200 p-4">Find break-even interest rate</td>
                      <td className="border border-gray-200 p-4">Complex cash flows</td>
                      <td className="border border-gray-200 p-4">NPV = 0 discount rate</td>
                      <td className="border border-gray-200 p-4">Considers timing</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="border border-gray-200 p-4 font-semibold text-purple-800">NPV (Net Present Value)</td>
                      <td className="border border-gray-200 p-4">Absolute value creation</td>
                      <td className="border border-gray-200 p-4">Capital budgeting</td>
                      <td className="border border-gray-200 p-4">Sum of discounted cash flows</td>
                      <td className="border border-gray-200 p-4">Time value of money</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50 transition-colors">
                      <td className="border border-gray-200 p-4 font-semibold text-orange-800">Payback Period</td>
                      <td className="border border-gray-200 p-4">Time to recover investment</td>
                      <td className="border border-gray-200 p-4">Risk assessment</td>
                      <td className="border border-gray-200 p-4">Investment / Annual Cash Flow</td>
                      <td className="border border-gray-200 p-4">Linear time calculation</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="border border-gray-200 p-4 font-semibold text-red-800">CAGR (Compound Annual Growth Rate)</td>
                      <td className="border border-gray-200 p-4">Annualized growth rate</td>
                      <td className="border border-gray-200 p-4">Long-term investments</td>
                      <td className="border border-gray-200 p-4">(End Value / Start Value)^(1/years) - 1</td>
                      <td className="border border-gray-200 p-4">Smooths volatility</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">When to Use ROI vs IRR</h3>
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-4">
                      <h4 className="font-bold text-blue-800 mb-2">Use ROI When:</h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p>• Comparing investments of similar duration</p>
                        <p>• Simple, straightforward investments</p>
                        <p>• Quick decision-making needed</p>
                        <p>• Communicating to non-financial audiences</p>
                        <p>• Evaluating past performance</p>
                      </div>
                    </div>
                    <div className="bg-blue-600 text-white rounded-xl p-4">
                      <h4 className="font-semibold mb-2">Use IRR When:</h4>
                      <div className="space-y-2 text-sm">
                        <p>• Multiple cash flows over time</p>
                        <p>• Comparing different investment durations</p>
                        <p>• Complex project evaluations</p>
                        <p>• Capital budgeting decisions</p>
                        <p>• Seeking optimal reinvestment rate</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">ROI vs CAGR: Key Differences</h3>
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-4">
                      <h4 className="font-bold text-green-800 mb-2">ROI Characteristics:</h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p>• Total return over entire period</p>
                        <p>• Doesn't account for time</p>
                        <p>• Simple percentage calculation</p>
                        <p>• Good for short-term analysis</p>
                        <p>• Includes all gains and losses</p>
                      </div>
                    </div>
                    <div className="bg-green-600 text-white rounded-xl p-4">
                      <h4 className="font-semibold mb-2">CAGR Characteristics:</h4>
                      <div className="space-y-2 text-sm">
                        <p>• Annualized growth rate</p>
                        <p>• Smooths out volatility</p>
                        <p>• Time-adjusted returns</p>
                        <p>• Perfect for long-term comparisons</p>
                        <p>• Assumes steady growth rate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Investment Analysis Framework</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-bold text-yellow-800 mb-3">Step 1: Initial Screening</h4>
                    <p className="text-sm text-gray-700 mb-3">Use ROI for quick evaluation and comparison of potential investments.</p>
                    <div className="bg-yellow-100 rounded-lg p-3">
                      <p className="text-xs text-yellow-800 font-medium">Filter investments with ROI below your minimum threshold</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-bold text-orange-800 mb-3">Step 2: Detailed Analysis</h4>
                    <p className="text-sm text-gray-700 mb-3">Apply IRR, NPV, and payback period for comprehensive evaluation.</p>
                    <div className="bg-orange-100 rounded-lg p-3">
                      <p className="text-xs text-orange-800 font-medium">Consider risk, timing, and opportunity costs</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-bold text-red-800 mb-3">Step 3: Final Decision</h4>
                    <p className="text-sm text-gray-700 mb-3">Combine all metrics with qualitative factors for optimal decisions.</p>
                    <div className="bg-red-100 rounded-lg p-3">
                      <p className="text-xs text-red-800 font-medium">Align with overall investment strategy and risk tolerance</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">ROI Calculator - Frequently Asked Questions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">What is a good ROI percentage?</h4>
                      <p className="text-gray-600">A good ROI depends on the investment type and risk level. Stock market investments averaging 10-15% annually are excellent, while business projects often target 20%+ ROI. Real estate typically yields 8-12%, which can help you understand long-term growth potential.</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">How do I calculate ROI for multiple investments?</h4>
                      <p className="text-gray-600">Calculate ROI for each investment separately, then determine your portfolio's weighted average ROI based on investment amounts and individual returns for comprehensive portfolio analysis.</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Should I include dividends in ROI calculations?</h4>
                      <p className="text-gray-600">Yes, always include dividends, interest payments, rental income, and other cash flows generated by your investment to get the total return on investment. This provides a complete picture of your investment performance.</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">How does ROI differ from simple and compound interest?</h4>
                      <p className="text-gray-600">ROI measures overall investment performance, while interest calculations focus on growth rates. Simple interest provides basic growth calculations, while compound interest accounts for reinvested earnings.</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">What's the best ROI calculator for business decisions?</h4>
                      <p className="text-gray-600">Our business ROI feature handles project costs, revenues, and operating expenses for comprehensive business analysis including break-even calculations.</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">What's the difference between ROI and annualized ROI?</h4>
                      <p className="text-gray-600">ROI shows total return over the entire period, while annualized ROI converts this to an equivalent yearly rate, making it easier to compare investments with different time horizons. Annualized ROI is crucial for comparing short-term vs. long-term investments.</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Can ROI be negative?</h4>
                      <p className="text-gray-600">Yes, negative ROI indicates a loss on your investment. This occurs when the final value is less than the initial investment amount. Compare paying down debt vs. investing to make optimal financial decisions.</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">How often should I calculate ROI?</h4>
                      <p className="text-gray-600">Review ROI quarterly for active investments and annually for long-term investments. However, avoid making frequent changes based on short-term fluctuations for long-term planning.</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">How do I factor in taxes when calculating ROI?</h4>
                      <p className="text-gray-600">Calculate ROI using after-tax returns for accurate analysis. Consider capital gains taxes, dividend taxes, and tax-advantaged accounts like 401(k)s and IRAs. Understanding pre-tax vs. post-tax scenarios is crucial for accurate analysis.</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Is this ROI calculator suitable for real estate investments?</h4>
                      <p className="text-gray-600">Yes! Use our basic ROI calculator for property appreciation or the business ROI feature for rental properties. Understanding financing costs is essential for real estate investment analysis.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">💡 Pro Tip: Maximize Your ROI Analysis</h3>
                  <p className="text-blue-800 mb-3">
                    Get the most accurate ROI calculations by considering all aspects of your financial strategy:
                  </p>
                  <ul className="text-blue-700 space-y-2 text-sm">
                    <li>• Set clear investment targets and goals</li>
                    <li>• Consider compound growth for long-term projections</li>
                    <li>• Factor in loan impacts and financing costs</li>
                    <li>• Plan for retirement and long-term wealth building</li>
                    <li>• Track your progress and net worth over time</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
