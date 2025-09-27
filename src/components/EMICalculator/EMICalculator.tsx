"use client";

import { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import { Calculator, IndianRupee, TrendingUp, Clock, DollarSign, PieChart } from 'lucide-react';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

// Custom styles for sliders
const sliderStyles = `
  .slider::-webkit-slider-thumb {
    appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #3b82f6;
    cursor: pointer;
    border: 2px solid #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  .slider::-moz-range-thumb {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #3b82f6;
    cursor: pointer;
    border: 2px solid #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  .slider::-webkit-slider-track {
    height: 8px;
    background: #e5e7eb;
    border-radius: 4px;
  }
  
  .slider::-moz-range-track {
    height: 8px;
    background: #e5e7eb;
    border-radius: 4px;
    border: none;
  }
  
  .slider:focus {
    outline: none;
  }
  
  .slider:focus::-webkit-slider-thumb {
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }
`;

interface EMIResult {
  emi: number;
  totalInterest: number;
  totalPayment: number;
}

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState<string>("1000000");
  const [interestRate, setInterestRate] = useState<string>("8.5");
  const [loanTenure, setLoanTenure] = useState<string>("20");
  const [tenureType, setTenureType] = useState<"years" | "months">("years");
  const [result, setResult] = useState<EMIResult | null>(null);

  // EMI Calculation Logic
  const calculateEMI = (principal: number, rate: number, tenure: number): EMIResult => {
    const monthlyRate = rate / (12 * 100);
    const totalMonths = tenureType === "years" ? tenure * 12 : tenure;
    
    let emi = 0;
    if (monthlyRate > 0) {
      emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
            (Math.pow(1 + monthlyRate, totalMonths) - 1);
    } else {
      emi = principal / totalMonths;
    }
    
    const totalPayment = emi * totalMonths;
    const totalInterest = totalPayment - principal;
    
    return {
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalPayment: Math.round(totalPayment)
    };
  };

  // Update calculations when inputs change
  useEffect(() => {
    const principal = parseFloat(loanAmount) || 0;
    const rate = parseFloat(interestRate) || 0;
    const tenure = parseFloat(loanTenure) || 0;
    
    if (principal > 0 && rate >= 0 && tenure > 0) {
      setResult(calculateEMI(principal, rate, tenure));
    } else {
      setResult(null);
    }
  }, [loanAmount, interestRate, loanTenure, tenureType]);

  // Format currency
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Chart.js data for pie chart
  const pieChartData = {
    labels: ['Principal Amount', 'Total Interest'],
    datasets: [
      {
        data: result ? [parseFloat(loanAmount) || 0, result.totalInterest] : [0, 0],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(239, 68, 68, 0.8)',
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(239, 68, 68, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart.js data for bar chart
  const barChartData = {
    labels: ['Monthly EMI', 'Total Interest', 'Total Payment'],
    datasets: [
      {
        label: 'Amount (₹)',
        data: result ? [result.emi, result.totalInterest, result.totalPayment] : [0, 0, 0],
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(168, 85, 247, 0.8)',
        ],
        borderColor: [
          'rgba(34, 197, 94, 1)',
          'rgba(239, 68, 68, 1)',
          'rgba(168, 85, 247, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 15,
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.label}: ₹${new Intl.NumberFormat('en-IN').format(context.parsed)}`;
          }
        }
      }
    },
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `₹${new Intl.NumberFormat('en-IN').format(context.parsed.y)}`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value: any) {
            return '₹' + new Intl.NumberFormat('en-IN', { 
              notation: 'compact', 
              compactDisplay: 'short' 
            }).format(value);
          }
        }
      }
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: sliderStyles }} />
      <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600  text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-28">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white/20 mb-4 sm:mb-6 rounded-full">
              <Calculator className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">EMI Calculator</h1>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-2xl mx-auto px-4">
              Calculate your Equated Monthly Installments with precision and make informed financial decisions.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main Calculator Section */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-8 sm:mb-12">
          {/* Input Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
              <div className="flex items-center mb-6 sm:mb-8">
                <IndianRupee className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2 sm:mr-3" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Loan Details</h2>
              </div>
              
              {/* Loan Amount */}
              <div className="mb-6 sm:mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Amount
                </label>
                <div className="space-y-3">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm sm:text-base">₹</span>
                    <input
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-sm sm:text-base"
                      placeholder="Enter loan amount"
                      min="0"
                    />
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="10000000"
                    step="10000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>₹10K</span>
                    <span>₹1Cr</span>
                  </div>
                </div>
              </div>

              {/* Interest Rate */}
              <div className="mb-6 sm:mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Interest Rate
                </label>
                <div className="space-y-3">
                  <div className="relative">
                    <input
                      type="number"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-sm sm:text-base"
                      placeholder="Enter interest rate"
                      min="0"
                      step="0.1"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">% p.a.</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>1%</span>
                    <span>20%</span>
                  </div>
                </div>
              </div>

              {/* Loan Tenure */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Tenure
                </label>
                <div className="space-y-3">
                  <div className="flex gap-2 sm:gap-3">
                    <input
                      type="number"
                      value={loanTenure}
                      onChange={(e) => setLoanTenure(e.target.value)}
                      className="flex-1 px-3 sm:px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-sm sm:text-base"
                      placeholder="Enter tenure"
                      min="1"
                    />
                    <select
                      value={tenureType}
                      onChange={(e) => setTenureType(e.target.value as "years" | "months")}
                      className="px-3 sm:px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 text-sm sm:text-base"
                    >
                      <option value="years">Years</option>
                      <option value="months">Months</option>
                    </select>
                  </div>
                  <input
                    type="range"
                    min={tenureType === "years" ? "1" : "1"}
                    max={tenureType === "years" ? "30" : "360"}
                    step="1"
                    value={loanTenure}
                    onChange={(e) => setLoanTenure(e.target.value)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{tenureType === "years" ? "1 Year" : "1 Month"}</span>
                    <span>{tenureType === "years" ? "30 Years" : "360 Months"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-2">
            {result ? (
              <div className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div className=" text-black border-2 p-4 sm:p-6 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <DollarSign className="w-6 h-6 sm:w-8 sm:h-8" />
                      <span className="text-black text-xs sm:text-sm">Monthly</span>
                    </div>
                    <h3 className="text-sm sm:text-lg font-medium mb-1 sm:mb-2">EMI Amount</h3>
                    <p className="text-lg sm:text-2xl font-bold break-words">{formatCurrency(result.emi)}</p>
                  </div>
                  
                  <div className=" text-black border-2 p-4 sm:p-6 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />
                      <span className="text-black text-xs sm:text-sm">Total</span>
                    </div>
                    <h3 className="text-sm sm:text-lg font-medium mb-1 sm:mb-2">Interest Payable</h3>
                    <p className="text-lg sm:text-2xl font-bold break-words">{formatCurrency(result.totalInterest)}</p>s
                  </div>
                  
                  <div className="text-black border-2 p-4 sm:p-6 rounded-lg shadow-sm sm:col-span-2 lg:col-span-1">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <Clock className="w-6 h-6 sm:w-8 sm:h-8" />
                      <span className="text-black text-xs sm:text-sm">Overall</span>
                    </div>
                    <h3 className="text-sm sm:text-lg font-medium mb-1 sm:mb-2">Total Payment</h3>
                    <p className="text-lg sm:text-2xl font-bold break-words">{formatCurrency(result.totalPayment)}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
                    <div className="flex items-center mb-4 sm:mb-6">
                      <PieChart className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 mr-2 sm:mr-3" />
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800">Payment Breakdown</h3>
                    </div>
                    <div className="h-64 sm:h-80">
                      <Pie data={pieChartData} options={chartOptions} />
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
                    <div className="flex items-center mb-4 sm:mb-6">
                      <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mr-2 sm:mr-3" />
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800">Amount Comparison</h3>
                    </div>
                    <div className="h-64 sm:h-80">
                      <Bar data={barChartData} options={barChartOptions} />
                    </div>
                  </div>
                </div>

                {/* Detailed Breakdown */}
                {/* <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Detailed Breakdown</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 sm:p-4 bg-gray-100 border-l-4 border-gray-400 rounded-r-md">
                        <span className="font-medium text-gray-700 text-sm sm:text-base">Principal Amount:</span>
                        <span className="font-bold text-base sm:text-lg text-gray-800 break-words">
                          {formatCurrency(parseFloat(loanAmount))}
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 sm:p-4 bg-green-100 border-l-4 border-green-500 rounded-r-md">
                        <span className="font-medium text-gray-700 text-sm sm:text-base">Monthly EMI:</span>
                        <span className="font-bold text-base sm:text-lg text-green-600 break-words">
                          {formatCurrency(result.emi)}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 sm:p-4 bg-red-100 border-l-4 border-red-500 rounded-r-md">
                        <span className="font-medium text-gray-700 text-sm sm:text-base">Total Interest:</span>
                        <span className="font-bold text-base sm:text-lg text-red-600 break-words">
                          {formatCurrency(result.totalInterest)}
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 sm:p-4 bg-purple-100 border-l-4 border-purple-500 rounded-r-md">
                        <span className="font-medium text-gray-700 text-sm sm:text-base">Total Payment:</span>
                        <span className="font-bold text-base sm:text-lg text-purple-600 break-words">
                          {formatCurrency(result.totalPayment)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 sm:p-12 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 mb-4 sm:mb-6 rounded-full">
                  <Calculator className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Enter Loan Details</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Fill in your loan information to see detailed EMI calculations and payment breakdown.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Information Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 lg:p-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">Understanding EMI</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4">Everything you need to know about Equated Monthly Installments</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                  <div className="w-1 h-6 sm:h-8 bg-blue-500 mr-3 sm:mr-4"></div>
                  What is EMI?
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  EMI (Equated Monthly Installment) is a fixed payment amount made by a borrower to a lender 
                  at a specified date each calendar month. EMIs are used to pay off both interest and principal 
                  each month so that over a specified number of years, the loan is fully paid off.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                  <div className="w-1 h-6 sm:h-8 bg-green-500 mr-3 sm:mr-4"></div>
                  EMI Formula
                </h3>
                <div className="bg-gray-100 p-4 sm:p-6 rounded-lg">
                  <p className="text-gray-800 font-mono text-base sm:text-lg mb-2 break-all">
                    EMI = [P × R × (1+R)^N] / [(1+R)^N – 1]
                  </p>
                  <div className="text-xs sm:text-sm text-gray-600 space-y-1">
                    <p><strong>P</strong> = Principal loan amount</p>
                    <p><strong>R</strong> = Monthly interest rate</p> 
                    <p><strong>N</strong> = Number of monthly installments</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
                <div className="w-1 h-6 sm:h-8 bg-purple-500 mr-3 sm:mr-4"></div>
                Benefits of EMI Calculator
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {[
                  "Plan your budget effectively by knowing exact monthly payments",
                  "Compare different loan options and choose the best one", 
                  "Understand the total cost of your loan including interest",
                  "Make informed financial decisions for major purchases",
                  "Optimize loan tenure based on your financial capacity",
                  "Evaluate the impact of prepayments on your loan"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 sm:mr-4 flex-shrink-0"></div>
                    <p className="text-gray-600 text-sm sm:text-base">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default EMICalculator;