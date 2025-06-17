"use client";

import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  TrendingUp,
  Users,
  Target,
  Database,
  Globe,
  ChevronRight,
  ArrowUpRight,
  Megaphone,
  User,
  Laptop,
} from "lucide-react";
import Image from 'next/image';

import { motion } from 'framer-motion';
import Head from "next/head";
import dynamic from "next/dynamic";


const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const [animationClass, setAnimationClass] = useState("");

 
  const LogoScroll = dynamic(() => import('@/components/LogoScroll'), {
    loading: () => <p>Loading...</p>,
    ssr: false
  });

  // Services data for cards section
  const services = [
    {
      icon: <Megaphone size={24} className="text-green-500" />,
      title: "Display Advertisement",
      description:
        "With our expertise in creating compelling digital campaigns, we are dedicated to helping businesses achieve unparalleled success in lead generation and customer acquisition.",
    },
    {
      icon: <User size={24} className="text-green-500" />,
      title: "Account-Based Marketing",
      description:
        "Account-based marketing (ABM) strategy encompasses a holistic approach that combines data-driven insights, cutting-edge technology, and personalized touch to help you win over target accounts and achieve exceptional ROI.",
    },
    {
      icon: <Target size={24} className="text-green-500" />,
      title: "Lead Generation",
      description:
        "Elevate your lead generation efforts and expand your reach through strategic content syndication with Quora B2B Marketing. Partner with us to drive quality leads and maximize your marketing impact.",
    },
    {
      icon: <Database size={24} className="text-green-500" />,
      title: "Data Solutions",
      description:
        "Why settle for outdated and unreliable data when you can harness the power of our Verified Database Solutions? Partner with Quora B2B Marketing today and unlock the potential of accurate and reliable data for your B2B marketing success.",
    },
    {
      icon: <Laptop size={24} className="text-green-500" />,
      title: "Web Development",
      description:
        "We provide end-to-end web development solutions, ensuring secure, scalable, and user-friendly digital experiences. Our expertise in modern technologies helps businesses establish a strong online presence and drive growth. From design to deployment, we deliver seamless and efficient web solutions.",
    },
  ];

  // Sample data for different service graphs
  const displayAdvertisementData = [
    { month: "Jan", impressions: 45000, clicks: 2300, conversions: 180 },
    { month: "Feb", impressions: 52000, clicks: 2800, conversions: 220 },
    { month: "Mar", impressions: 48000, clicks: 2600, conversions: 200 },
    { month: "Apr", impressions: 61000, clicks: 3200, conversions: 280 },
    { month: "May", impressions: 55000, clicks: 2900, conversions: 240 },
    { month: "Jun", impressions: 67000, clicks: 3600, conversions: 320 },
  ];

  const accountBasedMarketingData = [
    { stage: "Awareness", accounts: 1000, engaged: 650 },
    { stage: "Interest", accounts: 650, engaged: 420 },
    { stage: "Consideration", accounts: 420, engaged: 280 },
    { stage: "Intent", accounts: 280, engaged: 180 },
    { stage: "Purchase", accounts: 180, engaged: 120 },
  ];

  const leadGenerationData = [
    { source: "Organic Search", leads: 320, quality: 85 },
    { source: "Paid Ads", leads: 280, quality: 78 },
    { source: "Social Media", leads: 180, quality: 72 },
    { source: "Email", leads: 220, quality: 88 },
    { source: "Referrals", leads: 150, quality: 92 },
  ];

  const dataSolutionsData = [
    { category: "Data Collection", efficiency: 95 },
    { category: "Data Processing", efficiency: 88 },
    { category: "Data Analysis", efficiency: 92 },
    { category: "Reporting", efficiency: 90 },
    { category: "Insights", efficiency: 85 },
    { category: "Automation", efficiency: 93 },
  ];

  const webDesignData = [
    { metric: "Page Load Speed", score: 98, benchmark: 85, unit: "ms" },
    { metric: "SEO Optimization", score: 95, benchmark: 80, unit: "%" },
    { metric: "User Experience", score: 92, benchmark: 75, unit: "%" },
    { metric: "Mobile Responsiveness", score: 96, benchmark: 88, unit: "%" },
    { metric: "Accessibility Score", score: 89, benchmark: 70, unit: "%" },
    { metric: "Core Web Vitals", score: 94, benchmark: 82, unit: "%" },
    { metric: "Security Rating", score: 97, benchmark: 85, unit: "%" },
    { metric: "Browser Compatibility", score: 93, benchmark: 78, unit: "%" },
  ];

  const servicesData = [
    {
      id: 0,
      title: "Display Advertisement",
      description:
        "Boost your brand visibility with targeted display campaigns that drive engagement and conversions across all digital platforms.",
      icon: <Target className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      stats: "2.3x ROI Increase",
      graph: (
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={displayAdvertisementData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
            <XAxis
              dataKey="month"
              stroke="#6b7280"
              fontSize={12}
              tick={{ fill: "#6b7280" }}
            />
            <YAxis stroke="#6b7280" fontSize={12} tick={{ fill: "#6b7280" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              }}
            />
            <Area
              type="monotone"
              dataKey="impressions"
              stackId="1"
              stroke="#3b82f6"
              fill="#3b82f6"
              fillOpacity={0.3}
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="clicks"
              stackId="2"
              stroke="#10b981"
              fill="#10b981"
              fillOpacity={0.6}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      ),
    },
    {
      id: 1,
      title: "Account Based Marketing",
      description:
        "Personalized marketing strategies that target high-value accounts with precision and measurable impact on your bottom line.",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      stats: "68% Higher Conversion",
      graph: (
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={accountBasedMarketingData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
            <XAxis
              dataKey="stage"
              stroke="#6b7280"
              fontSize={12}
              tick={{ fill: "#6b7280" }}
            />
            <YAxis stroke="#6b7280" fontSize={12} tick={{ fill: "#6b7280" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              }}
            />
            <Bar dataKey="accounts" fill="#10b981" radius={[4, 4, 0, 0]} />
            <Bar dataKey="engaged" fill="#059669" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      ),
    },
    {
      id: 2,
      title: "Lead Generation",
      description:
        "Generate high-quality leads through multi-channel campaigns that convert prospects into loyal customers effectively.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-amber-500 to-amber-600",
      stats: "5x Lead Quality",
      graph: (
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={leadGenerationData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
            <XAxis
              dataKey="source"
              stroke="#6b7280"
              fontSize={12}
              tick={{ fill: "#6b7280" }}
            />
            <YAxis stroke="#6b7280" fontSize={12} tick={{ fill: "#6b7280" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              }}
            />
            <Line
              type="monotone"
              dataKey="leads"
              stroke="#f59e0b"
              strokeWidth={3}
              dot={{ fill: "#f59e0b", strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, fill: "#f59e0b" }}
            />
            <Line
              type="monotone"
              dataKey="quality"
              stroke="#d97706"
              strokeWidth={2}
              dot={{ fill: "#d97706", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: "#d97706" }}
            />
          </LineChart>
        </ResponsiveContainer>
      ),
    },
    {
      id: 3,
      title: "Data Solutions",
      description:
        "Transform raw data into actionable insights with our comprehensive analytics and intelligent reporting solutions.",
      icon: <Database className="w-8 h-8" />,
      color: "from-red-500 to-red-600",
      stats: "90% Data Accuracy",
      graph: (
        <ResponsiveContainer width="100%" height={280}>
          <RadarChart data={dataSolutionsData}>
            <PolarGrid stroke="#e0e7ff" />
            <PolarAngleAxis
              dataKey="category"
              tick={{ fontSize: 12, fill: "#6b7280" }}
            />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 100]}
              tick={{ fontSize: 10, fill: "#6b7280" }}
            />
            <Radar
              name="Efficiency"
              dataKey="efficiency"
              stroke="#ef4444"
              fill="#ef4444"
              fillOpacity={0.3}
              strokeWidth={2}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      ),
    },
    {
      id: 4,
      title: "Web Design",
      description:
        "Create stunning, responsive websites that deliver exceptional user experiences and drive measurable business results.",
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
      stats: "98% Performance Score",
      graph: (
        <ResponsiveContainer width="100%" height={280}>
          <BarChart
            data={webDesignData}
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
            <XAxis
              dataKey="metric"
              stroke="#6b7280"
              fontSize={11}
              tick={{ fill: "#6b7280" }}
              angle={-45}
              textAnchor="end"
              height={80}
              interval={0}
            />
            <YAxis
              stroke="#6b7280"
              fontSize={12}
              tick={{ fill: "#6b7280" }}
              domain={[0, 100]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              }}
              formatter={(value, name) => [
                `${value}${
                  name === "benchmark" ? "% (Industry Avg)" : "% (Our Score)"
                }`,
                name === "score" ? "Performance" : "Benchmark",
              ]}
            />
            <Bar
              dataKey="benchmark"
              fill="#e5e7eb"
              radius={[4, 4, 0, 0]}
              name="benchmark"
            />
            <Bar
              dataKey="score"
              fill="#8b5cf6"
              radius={[4, 4, 0, 0]}
              name="score"
            />
          </BarChart>
        </ResponsiveContainer>
      ),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass("animate-pulse");
      setTimeout(() => setAnimationClass(""), 500);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleServiceChange = (index) => {
    setActiveService(index);
    setAnimationClass("animate-pulse");
    setTimeout(() => setAnimationClass(""), 300);
  };

  return (
<>
       <Head>
        <title>Who We Are & What We Do | Quore B2B Marketing</title>
        <meta name="description" content="Quore B2B Marketing specializes in demand generation and lead generation services. Learn more about our B2B solutions." />
        <meta name="keywords" content="B2B Marketing, Lead Generation, Demand Generation, Outsourcing, Human Verification" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

    <section className="py-16 bg-gradient-to-br from-slate-50 via-white p-8 to-blue-50">
         <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ x: -100, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-5xl text-black font-extrabold leading-snug">
              Who We Are <br /> & <span className="text-[#00DCA0]">What We Do</span>
            </h1>
            <div className="mt-4 w-12 h-1 bg-[#00DCA0]"></div>

            <p className="mt-6 text-lg text-black leading-relaxed">
              Quore B2B Marketing is a B2B marketing and outsourcing company that specializes in providing high quality demand generation and lead generation services. They aim to be a trusted and valuable partner for B2B marketers and agencies by helping them execute their marketing programs and boost lead generation.
            </p>

            <p className="mt-4 text-lg text-black leading-relaxed">
              We assists our potential clients by implementing effective b2b marketing techniques and strategies. These strategies encompass a range of marketing channels including but not limited to content syndication, demand generation, account-based marketing, and human-verification.
            </p>
          </motion.div>

          <motion.div 
            initial={{ x: 100, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            <div className="w-full flex justify-center">
              <Image 
                src="/images/service-agent.jpg" 
                alt="Customer Service Agent" 
                width={600} 
                height={400} 
                className="rounded-xl shadow-lg object-cover" 
                priority
              />
            </div>
          </motion.div>
        </div>
        
      {/* Services Cards Section */}
      <section
        className="min-h-screen w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 2xl:px-36 py-10 md:py-20 bg-white flex flex-col md:flex-row justify-between items-center gap-10 max-w-screen-2xl mx-auto mt-20"
        aria-labelledby="services-heading"
      >
        <h2 id="services-heading" className="sr-only">
          Our Services
        </h2>

        <div className="md:w-1/2 space-y-6">
          <p className="text-lg md:text-xl lg:text-4xl font-medium leading-relaxed text-gray-700">
            UNLEASH EXPLOSIVE GROWTH WITH OUR {""}
            <span className="text-teal-400 font-semibold">
              FULL-STACK MARKETING & TECH SERVICES
            </span>{" "}
            Display Ads That Get Seen , Hyper-Targeted ABM Campaigns High-Intent
            Lead Generation Smart Data Solutions, Lightning-Fast,
            High-Converting Websites.
          </p>
          <button
            className="text-sm font-medium px-6 py-3 rounded-full bg-gradient-to-r from-lime-300 to-emerald-400 text-white shadow-md hover:scale-105 transition-transform duration-300"
            aria-label="View all services"
          >
            VIEW ALL
          </button>
        </div>

        <div className="md:w-1/2 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.slice(0, 4).map((service, index) => (
              <article
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                onFocus={() => setActiveIndex(index)}
                onBlur={() => setActiveIndex(null)}
                className={`rounded-xl p-5 cursor-pointer transition-all duration-300 shadow-md hover:scale-[1.02] min-h-[350px] h-auto flex flex-col gap-2 overflow-hidden
                    ${
                      activeIndex === index
                        ? "bg-gradient-to-br from-teal-400 to-lime-400 text-white"
                        : "bg-white text-gray-800"
                    }`}
                tabIndex={0}
                aria-labelledby={`service-title-${index}`}
              >
                <div className="mb-2 flex-shrink-0">
                  {activeIndex === index ? (
                    <div className="text-white">{service.icon}</div>
                  ) : (
                    service.icon
                  )}
                </div>
                <h3
                  id={`service-title-${index}`}
                  className={`text-xl font-semibold flex-shrink-0 ${
                    activeIndex === index ? "text-white" : "text-gray-900"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm leading-snug flex-1 overflow-hidden ${
                    activeIndex === index ? "text-white/90" : "text-gray-600"
                  }`}
                >
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          {services.length > 4 && (
            <div className="flex justify-center mt-6">
              <article
                onMouseEnter={() => setActiveIndex(4)}
                onMouseLeave={() => setActiveIndex(null)}
                onFocus={() => setActiveIndex(4)}
                onBlur={() => setActiveIndex(null)}
                className={`rounded-xl p-5 cursor-pointer transition-all duration-300 shadow-md hover:scale-[1.02] min-h-[350px] h-auto flex flex-col gap-2 overflow-hidden w-full sm:w-[calc(50%-0.75rem)] max-w-[400px]
                    ${
                      activeIndex === 4
                        ? "bg-gradient-to-br from-teal-400 to-lime-400 text-white"
                        : "bg-white text-gray-800"
                    }`}
                tabIndex={0}
                aria-labelledby="service-title-4"
              >
                <div className="mb-2 flex-shrink-0">
                  {activeIndex === 4 ? (
                    <div className="text-white">{services[4].icon}</div>
                  ) : (
                    services[4].icon
                  )}
                </div>
                <h3
                  id="service-title-4"
                  className={`text-xl font-semibold flex-shrink-0 ${
                    activeIndex === 4 ? "text-white" : "text-gray-900"
                  }`}
                >
                  {services[4].title}
                </h3>
                <p
                  className={`text-sm leading-snug flex-1 overflow-hidden ${
                    activeIndex === 4 ? "text-white/90" : "text-gray-600"
                  }`}
                >
                  {services[4].description}
                </p>
              </article>
            </div>
          )}
        </div>
      </section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Service Navigation */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
          {servicesData.map((service, index) => (
            <button
              key={service.id}
              onClick={() => handleServiceChange(index)}
              className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                activeService === index
                  ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg"
              }`}
              aria-label={`Select ${service.title} service`}
            >
              <span
                className={`${
                  activeService === index ? "text-white" : "text-gray-500"
                } w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center`}
              >
                {service.icon}
              </span>
              <span className="hidden sm:inline whitespace-nowrap">
                {service.title}
              </span>
            </button>
          ))}
        </div>

        {/* Active Service Display */}
        <div
          className={`bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-6 sm:p-8 md:p-12 transition-all duration-500 ${animationClass}`}
        >
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Service Information */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="flex items-start sm:items-center gap-4">
                <div
                  className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r ${servicesData[activeService].color} text-white shadow-lg`}
                >
                  {servicesData[activeService].icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                    {servicesData[activeService].title}
                  </h3>
                  <div
                    className={`inline-flex items-center gap-2 mt-2 px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-gradient-to-r ${servicesData[activeService].color} text-white text-xs sm:text-sm font-semibold`}
                  >
                    <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    {servicesData[activeService].stats}
                  </div>
                </div>
              </div>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {servicesData[activeService].description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <button
                  className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${servicesData[activeService].color} text-white font-semibold transition-transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                  aria-label={`Learn more about ${servicesData[activeService].title}`}
                >
                  Learn More
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  aria-label={`Get quote for ${servicesData[activeService].title}`}
                >
                  Get Quote
                </button>
              </div>
            </div>

            {/* Graph Display */}
            <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 order-1 lg:order-2">
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                Performance Metrics
              </h4>
              <div className="h-64 sm:h-72">
                {servicesData[activeService].graph}
              </div>
            </div>
          </div>
        </div>

         <div className="max-w-12xl mx-auto bg-black/70 rounded-2xl grid md:grid-cols-2 mt-8 p-6 mgap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-6xl font-light leading-tight">
              Our team of <br /> experts do their <br /> best
            </h1>
            <p className="mt-6 text-base md:text-lg text-gray-300">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="bg-white rounded-2xl p-8 mt-6 text-[#00DCA0] space-y-6 shadow-xl">
              <div>
                <h2 className="text-xl font-semibold">B2B MARKETING</h2>
                <p className="text-gray-700">
                  When, while the lovely valley teem with vapour around me, and the meridian.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">SOFTWARE DEVELOPMENT</h2>
                <p className="text-gray-700">
                  When, while the lovely valley teem with vapour around me, and the meridian.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">SUPPORT</h2>
                <p className="text-gray-700">
                  When, while the lovely valley teem with vapour around me, and the meridian.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">REALESTATE</h2>
                <p className="text-gray-700">
                  When, while the lovely valley teem with vapour around me, and the meridian.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <LogoScroll/>
    </>
  );
};

export default ServicesSection;





