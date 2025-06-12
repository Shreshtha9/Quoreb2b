'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import { ChevronDown, Mail, Phone, Target, TrendingUp, Users, Shield, BarChart3, Linkedin, ArrowUp, ArrowDown } from 'lucide-react';
import LogoScroll from '@/components/LogoScroll';

const AccountBasedMarketingPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredObjective, setHoveredObjective] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="hero" className="relative bg-gradient-to-br from-gray-50 to-white py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`space-y-8 transform transition-all duration-1000 ${isVisible.hero ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Account-Based<br />
                  Marketing (ABM) at<br />
                  <span className="text-emerald-400">QuoreB2B</span>
                </h1>
                <div className="w-20 h-1 bg-emerald-400 mt-4"></div>
              </div>
              
              <div className="text-lg text-gray-600 leading-relaxed space-y-4">
                <p>
                  At <span className="text-emerald-400 font-semibold">QuoreB2B</span>, we leverage <span className="font-semibold text-gray-800">Account-Based Marketing (ABM)</span> to help businesses engage and convert high-value accounts with precision. Our data-driven strategies focus on identifying key decision-makers, creating personalized outreach campaigns, and using multi-channel engagement to drive meaningful interactions.
                </p>
                <p>
                  By aligning sales and marketing efforts, we ensure higher conversion rates, improved customer relationships, and accelerated revenue growth. With our tailored ABM solutions, your business can achieve <span className="font-bold text-gray-800">greater efficiency, better ROI, and long-term success</span>.
                </p>
              </div>
            </div>

            {/* Right Image with Animation */}
            <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible.hero ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl transform rotate-6 group-hover:rotate-3 transition-transform duration-500 opacity-20"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl p-2 transform group-hover:-translate-y-2 transition-all duration-500">
                  <Image 
                    src="/images/service2.png" 
                    alt="Professional woman on phone with laptop"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-xl object-cover"
                    priority
                  />
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transform Your B2B Strategy Section */}
    <section id="strategy" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block bg-emerald-400 text-white px-6 py-2 rounded-full text-sm font-semibold">
              Account Based Marketing
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Transform Your <span className="text-emerald-400">B2B Strategy</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Elevate your B2B marketing strategy with our precision-focused account-based approach. We identify and engage high-value prospects through personalized content and targeted outreach. By aligning sales and marketing efforts toward specific accounts, we create deeper connections with decision-makers that matter most to your business.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center group">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="w-8 h-8 text-emerald-400 mr-2" />
                  <span className="text-3xl font-bold text-gray-900 group-hover:text-emerald-400 transition-colors">+92%</span>
                </div>
                <p className="text-sm text-gray-600">Account Engagement</p>
              </div>
              
              <div className="text-center group">
                <div className="flex items-center justify-center mb-2">
                  <BarChart3 className="w-8 h-8 text-emerald-400 mr-2" />
                  <span className="text-3xl font-bold text-gray-900 group-hover:text-emerald-400 transition-colors">3.5x</span>
                </div>
                <p className="text-sm text-gray-600">Deal Size Increase</p>
              </div>
              
              <div className="text-center group">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-8 h-8 text-emerald-400 mr-2" />
                  <span className="text-3xl font-bold text-gray-900 group-hover:text-emerald-400 transition-colors">97%</span>
                </div>
                <p className="text-sm text-gray-600">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
         <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image 
                src="/images/transform.webp" 
                alt="Business team collaboration"
                width={1000}
                height={384}
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              
              {/* Gradient overlay for better visual appeal */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating animation element */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-800 animate-pulse shadow-lg">
                B2B Success
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* ABM Process Section */}
      <section id="process" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-xl lg:text-2xl font-bold mb-16 text-emerald-400">
            Our ABM Process
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className={`transform transition-all duration-1000 ${isVisible.process ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-2xl font-bold text-emerald-400 mb-4">Identify</h3>
                <p className="text-gray-600 leading-relaxed">
                  Pinpoint your ideal accounts using firmographic, technographic, and intent data.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className={`transform transition-all duration-1000 delay-200 ${isVisible.process ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-2xl font-bold text-emerald-400 mb-4">Engage</h3>
                <p className="text-gray-600 leading-relaxed">
                  Create personalized campaigns across multiple channels to engage key stakeholders.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className={`transform transition-all duration-1000 delay-200 ${isVisible.process ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-2xl font-bold text-emerald-400 mb-4">Convert</h3>
                <p className="text-gray-600 leading-relaxed">
                  Foster meaningful relationships through personalized content and strategic outreach to enhance conversions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div 
              className={`transform transition-all duration-500 ${hoveredCard === 'predictive' ? 'scale-105 -translate-y-2' : ''}`}
              onMouseEnter={() => setHoveredCard('predictive')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl p-8 text-white h-full shadow-xl">
                <div className="flex items-center mb-6">
                  <Users className="w-8 h-8 mr-3" />
                  <h3 className="text-xl font-bold">Predictive Account Modeling</h3>
                </div>
                <p className="mb-6 opacity-90">
                  Advanced AI-driven predictive analytics that forecast potential high-value accounts with unprecedented accuracy and insight.
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-white/20">
                  <div>
                    <div className="text-2xl font-bold">92%</div>
                    <div className="text-sm opacity-75">Prediction Accuracy</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">250K</div>
                    <div className="text-sm opacity-75">Accounts Analyzed</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div 
              className={`transform transition-all duration-500 ${hoveredCard === 'personalization' ? 'scale-105 -translate-y-2' : ''}`}
              onMouseEnter={() => setHoveredCard('personalization')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-gradient-to-br from-teal-400 to-emerald-500 rounded-2xl p-8 text-white h-full shadow-xl">
                <div className="flex items-center mb-6">
                  <Shield className="w-8 h-8 mr-3" />
                  <h3 className="text-xl font-bold">Hyper-Personalization Engine</h3>
                </div>
                <p className="mb-6 opacity-90">
                  Create laser-focused marketing strategies that resonate deeply with individual decision-makers across target accounts.
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-white/20">
                  <div>
                    <div className="text-2xl font-bold">78%</div>
                    <div className="text-sm opacity-75">Engagement Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">125K</div>
                    <div className="text-sm opacity-75">Tailored Campaigns</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div 
              className={`transform transition-all duration-500 ${hoveredCard === 'intelligence' ? 'scale-105 -translate-y-2' : ''}`}
              onMouseEnter={() => setHoveredCard('intelligence')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl p-8 text-white h-full shadow-xl">
                <div className="flex items-center mb-6">
                  <BarChart3 className="w-8 h-8 mr-3" />
                  <h3 className="text-xl font-bold">Strategic Market Intelligence</h3>
                </div>
                <p className="mb-6 opacity-90">
                  Deep-dive strategic insights that uncover hidden opportunities and competitive advantages in your target market landscape.
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-white/20">
                  <div>
                    <div className="text-2xl font-bold">85%</div>
                    <div className="text-sm opacity-75">Insight Accuracy</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">75K</div>
                    <div className="text-sm opacity-75">Market Segments</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl lg:text-2xl font-bold text-center text-emerald-400  mb-16">
            Traditional Marketing vs. ABM
          </h2>
          
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-50">
              <div className="p-6"></div>
              <div className="p-6 bg-emerald-400 text-white text-center font-bold text-lg">Traditional</div>
              <div className="p-6 bg-gradient-to-r from-emerald-400 to-green-500 text-white text-center font-bold text-lg">ABM</div>
            </div>
            
            {[
              { label: 'Approach', traditional: 'Broad, quantity-focused', abm: 'Narrow, quality-focused' },
              { label: 'Targeting', traditional: 'Industry/role based', abm: 'Specific accounts & people' },
              { label: 'Content', traditional: 'Generic, one-size-fits-all', abm: 'Hyper-personalized' },
              { label: 'ROI', traditional: 'Lower, harder to measure', abm: 'Higher, clearly measurable' }
            ].map((row, index) => (
              <div key={index} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-emerald-50 transition-colors`}>
                <div className="p-6 font-semibold text-gray-900">{row.label}</div>
                <div className="p-6 text-gray-600">{row.traditional}</div>
                <div className="p-6 text-gray-900 font-medium">{row.abm}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channel Effectiveness */}
      <section id="channels" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl lg:text-2xl font-bold text-center text-emerald-400 mb-16">
           ABM Channel Effectiveness
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {/* Email */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
              <div className="text-center">
                <Mail className="w-12 h-12 text-emerald-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-gray-900 mb-6">Email</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-emerald-400">72%</div>
                    <div className="text-sm text-gray-600">Open Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-700">35%</div>
                    <div className="text-sm text-gray-600">Reply Rate</div>
                  </div>
                </div>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
              <div className="text-center">
                <Linkedin className="w-12 h-12 text-emerald-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-gray-900 mb-6">LinkedIn</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-emerald-400">68%</div>
                    <div className="text-sm text-gray-600">Accept Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-700">28%</div>
                    <div className="text-sm text-gray-600">Response Rate</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Outreach */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
              <div className="text-center">
                <Phone className="w-12 h-12 text-emerald-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-gray-900 mb-6">Direct Outreach</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-emerald-400">42%</div>
                    <div className="text-sm text-gray-600">Connect Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-700">18%</div>
                    <div className="text-sm text-gray-600">Meeting Rate</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Targeted Ads */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
              <div className="text-center">
                <Target className="w-12 h-12 text-emerald-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-gray-900 mb-6">Targeted Ads</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-emerald-400">5.2x</div>
                    <div className="text-sm text-gray-600">Engagement</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-700">62%</div>
                    <div className="text-sm text-gray-600">Brand Lift</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="abm-dashboard" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xl lg:text-2xl font-bold text-emerald-400 mb-4">
            ABM Performance Dashboard
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Monitor and optimize your account-based marketing campaigns with real-time insights and strategic objectives.
          </p>
        </div>
        
        {/* Top Section - Performance and ABM Understanding */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Current Campaign Performance Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="flex justify-between items-start mb-8">
              <h3 className="text-2xl font-bold text-gray-800">Current Campaign Performance</h3>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">Last 30 Days</span>
            </div>
            
   
    <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-2xl">
      <div className="flex justify-between items-start gap-8">
        
        {/* Left: Circular Progress + Bar */}
  <div className="w-full  max-w-sm">
  {/* Circular Progress */}
  <div className="relative w-48 h-48 mx-auto">
    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
      {/* Background Circle */}
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="#e5e7eb"
        strokeWidth="8"
        fill="transparent"
      />
      {/* Foreground (Progress) Circle */}
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="url(#gradient)"
        strokeWidth="8"
        fill="transparent"
        strokeDasharray="251.2"
        strokeDashoffset="70.3"
        strokeLinecap="round"
        className="transition-all duration-1000 ease-out"
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#facc15" />
        </linearGradient>
      </defs>
    </svg>
    {/* Center Text */}
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-4xl font-bold text-gray-800">72%</span>
    </div>
  </div>

  {/* Target Progress Bar */}
  <div className="mt-6">
    <div className="flex justify-between text-sm text-gray-600 mb-2">
      <span>Target: 85%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div className="bg-gradient-to-r from-emerald-400 to-emerald-500 h-2 rounded-full w-[85%]"></div>
    </div>
  </div>
</div>




        {/* Right: Metric List */}
        <div className="flex flex-col gap-8 pt-6 pr-2">
          {/* Open Rate */}
          <div>
            <div className="text-emerald-500 text-sm font-medium">45%</div>
            <div className="text-gray-700 text-sm">Open Rate</div>
            <div className="mt-1 inline-flex items-center bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full text-xs font-medium">
              <ArrowUp className="w-3 h-3 mr-1" />
              +12%
            </div>
          </div>

          {/* Response Rate */}
          <div>
            <div className="text-emerald-500 text-sm font-medium">28%</div>
            <div className="text-gray-700 text-sm">Response Rate</div>
            <div className="mt-1 inline-flex items-center bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full text-xs font-medium">
              <ArrowUp className="w-3 h-3 mr-1" />
              +5%
            </div>
          </div>

          {/* Avg. Touchpoints */}
          <div>
            <div className="text-emerald-500 text-sm font-medium">3.2</div>
            <div className="text-gray-700 text-sm">Avg. Touchpoints</div>
            <div className="mt-1 inline-flex items-center bg-red-100 text-red-600 px-2 py-0.5 rounded-full text-xs font-medium">
              <ArrowDown className="w-3 h-3 mr-1" />
              -0.4
            </div>
          </div>
        </div>

      </div>
    </div>
 

          </div>

          {/* Understanding ABM Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Understanding Account-Based Marketing (ABM)</h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Account-Based Marketing is a strategic approach that aligns marketing and sales efforts to target high-value accounts with personalized campaigns.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-emerald-400 mb-4">Key ABM Principles:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start group">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                    <div>
                      <span className="font-semibold text-gray-800">Account Selection:</span>
                      <span className="text-gray-600 ml-1">Focus on high-potential accounts rather than broad markets</span>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                    <div>
                      <span className="font-semibold text-gray-800">Personalization:</span>
                      <span className="text-gray-600 ml-1">Tailor messaging to specific account needs and pain points</span>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                    <div>
                      <span className="font-semibold text-gray-800">Alignment:</span>
                      <span className="text-gray-600 ml-1">Tight coordination between marketing and sales teams</span>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                    <div>
                      <span className="font-semibold text-gray-800">Multi-channel:</span>
                      <span className="text-gray-600 ml-1">Coordinated outreach across multiple platforms</span>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                    <div>
                      <span className="font-semibold text-gray-800">Metrics:</span>
                      <span className="text-gray-600 ml-1">Measure success by account engagement rather than lead volume</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-emerald-400 mb-3">Why ABM Matters:</h4>
                <p className="text-gray-600 leading-relaxed">
                  ABM delivers higher ROI than traditional marketing by focusing resources on accounts most likely to convert and provide significant lifetime value. It's particularly effective for B2B companies with complex sales cycles and high-value contracts.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic ABM Objectives Section */}
 <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="grid lg:grid-cols-2 gap-8 items-start">

        {/* Left Side - ABM Goals Image (No extra wrapper div) */}
        <Image
          src="/images/strategic.jpg" // Ensure this is in /public/images
          alt="ABM Goals Visualization"
          width={800}
          height={800}
          
        />

        {/* Right Side - Strategic ABM Objectives */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Strategic ABM Objectives</h3>

          <div className="space-y-6">

            {/* Objective 1 */}
            <div 
              className="group p-6 rounded-xl border-l-4 border-emerald-400 bg-gray-50 hover:bg-emerald-50 transition-all duration-300 cursor-pointer transform hover:scale-105"
              onMouseEnter={() => setHoveredObjective(1)}
              onMouseLeave={() => setHoveredObjective(null)}
            >
              <div className="flex items-start">
                <div className="text-3xl font-bold text-emerald-400 mr-4 group-hover:scale-125 transition-transform duration-300">90%</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                    Focus on New Business Generation
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Prioritize acquiring high-value target accounts through precision marketing strategies.
                  </p>
                </div>
              </div>
              {hoveredObjective === 1 && (
                <div className="mt-4 flex items-center text-emerald-500 text-sm animate-fade-in">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  <span>Primary focus area for maximum impact</span>
                </div>
              )}
            </div>

            {/* Objective 2 */}
            <div 
              className="group p-6 rounded-xl border-l-4 border-emerald-400 bg-gray-50 hover:bg-emerald-50 transition-all duration-300 cursor-pointer transform hover:scale-105"
              onMouseEnter={() => setHoveredObjective(2)}
              onMouseLeave={() => setHoveredObjective(null)}
            >
              <div className="flex items-start">
                <div className="text-3xl font-bold text-emerald-400 mr-4 group-hover:scale-125 transition-transform duration-300">63%</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                    Pipeline Acceleration
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Streamline and expedite the sales process for identified key accounts.
                  </p>
                </div>
              </div>
              {hoveredObjective === 2 && (
                <div className="mt-4 flex items-center text-emerald-500 text-sm animate-fade-in">
                  <Target className="w-4 h-4 mr-2" />
                  <span>Accelerate deal velocity and conversion</span>
                </div>
              )}
            </div>

            {/* Objective 3 */}
            <div 
              className="group p-6 rounded-xl border-l-4 border-emerald-400 bg-gray-50 hover:bg-emerald-50 transition-all duration-300 cursor-pointer transform hover:scale-105"
              onMouseEnter={() => setHoveredObjective(3)}
              onMouseLeave={() => setHoveredObjective(null)}
            >
              <div className="flex items-start">
                <div className="text-3xl font-bold text-emerald-400 mr-4 group-hover:scale-125 transition-transform duration-300">50%</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                    Customer Retention
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Develop personalized engagement strategies to maintain and grow existing relationships.
                  </p>
                </div>
              </div>
              {hoveredObjective === 3 && (
                <div className="mt-4 flex items-center text-emerald-500 text-sm animate-fade-in">
                  <Users className="w-4 h-4 mr-2" />
                  <span>Expand and strengthen current partnerships</span>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>

        {/* Bottom Results Banner */}
        <div className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-green-500 rounded-2xl p-8 text-white shadow-xl ">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            
            <div className="group">
              <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">73%</div>
              <div className="text-emerald-100 text-lg">Higher Engagement</div>
            </div>
            
            <div className="group">
              <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">2.5x</div>
              <div className="text-emerald-100 text-lg">More Pipeline</div>
            </div>
            
            <div className="group">
              <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">68%</div>
              <div className="text-emerald-100 text-lg">Larger Deal Size</div>
            </div>
          </div>
        </div>
      </div>
    </section>
      

      
    </div>

    <LogoScroll/>

    </>
  );
};

export default AccountBasedMarketingPage;