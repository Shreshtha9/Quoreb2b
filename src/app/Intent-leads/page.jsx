// IntentLeadsPage.js
"use client";

import { useState, useEffect } from "react";
import {
  Brain,
  Target,
  Search,
  TrendingUp,
  Users,
  
  FileText,
  Mail,
  Phone,
  Database,
  BarChart3,
  Settings,
  Eye,
  Gauge,
  RefreshCw,
  Zap,
  BarChart,
  Brush,
  BriefcaseBusiness,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import dynamic from "next/dynamic";
const LogoScroll = dynamic(() => import("@/components/LogoScroll"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const IntentLeadsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [visibleItems, setVisibleItems] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Define messages array at the top
  const messages = [
    "Hi Sarah, I noticed you've been researching cloud solutions.",
    "Yes, we're evaluating different cloud providers for our migration.",
    "What specific features are you looking for?",
    "We need scalable storage and advanced compute capabilities. Currently comparing vendors.",
    "When are you planning to implement the solution?",
    "We're looking to make a decision within the next quarter.",
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 7);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleItems((prev) => {
        if (prev < 5) {
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
    }, 300);

    return () => clearInterval(timer);
  }, []);

  // Remove the first useEffect for visibleMessages and keep only the continuous one
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleMessages((prev) => {
        if (prev >= messages.length) {
          // Reset animation after showing all messages
          return 1;
        }
        return prev + 1;
      });
    }, 1500); // Show new message every 1.5 seconds

    // Start with first message
    setVisibleMessages(1);

    return () => clearInterval(interval);
  }, [messages.length]);

  const stats = [
    { number: "2,543,789", label: "Intent Signals Captured" },
    { number: "12,458", label: "Intent Campaigns" },
    { number: "150 Mill", label: "Behavior Data Points" },
    { number: "96%", label: "Intent Accuracy" },
  ];

  const processSteps = [
    {
      title: "Identify Target Audience",
      desc: "We help identify the right prospects, demographic and buyer personas to expand your ideal customer profile.",
    },
    {
      title: "Create Compelling Offer",
      desc: "Develop your audience with engaging content and offers to drive higher response rates.",
    },
    {
      title: "Build Landing Page",
      desc: "We design conversion-focused landing pages to maximize lead generation and conversions.",
    },
    {
      title: "Drive Targeted Traffic",
      desc: "We use targeted SEO and content marketing to drive prospects to your marketing funnel.",
    },
    {
      title: "Capture Lead Information",
      desc: "Convert visitor details via optimized forms, call-to-actions, and engagement tracking.",
    },
    {
      title: "Qualify & Score Leads",
      desc: "Analyze lead data via AI-based intent analysis and convert prospects to qualified leads.",
    },
    {
      title: "Nurture Qualified Leads",
      desc: "Nurture prospects via personalized content and follow-up campaigns to generate conversions.",
    },
  ];

  const benefits = [
    {
      title: "Revenue Acceleration",
      desc: "Intent-based lead identification specifically targets prospects with predicted conversion, for qualifying prospects who are most likely to convert to customers and create strong revenue growth through higher quality leads.",
    },
    {
      title: "Targeted Marketing Precision",
      desc: "Advanced user behavioral analytics uses intent-based marketing strategies for understanding customer intent and behavioral responses via refined behavioral targeting strategies that enhance user experience and customer satisfaction.",
    },
    {
      title: "Cost-Effective Customer Acquisition",
      desc: "Improved conversion rates and enhanced efficiency make marketing efforts more cost-effective approach to targeting new customers reducing expenses costs while optimizing marketing resources.",
    },
  ];
   const keyMetrics = [
    {
      title: 'Intent Coverage',
      description: '% of target accounts showing intent signal.',
    },
    {
      title: 'Signal Velocity',
      description: 'Speed of intent signal accumulation',
    },
    {
      title: 'Engagement Rate',
      description: 'Content interactions per intent lead',
    },
    {
      title: 'Conversion Lift',
      description: '% increase vs. non-intent leads',
    },
  ];

  // Data for Optimization Cycle
  const optimizationCycle = [
    {
      icon: Search,
      title: 'Discover',
      description: 'Identify intent patterns and trends',
    },
    {
      icon: Target, // Changed from TrendingUp to Target for better representation
      title: 'Prioritize',
      description: 'Focus on highest-impact opportunities',
    },
    {
      icon: Settings,
      title: 'Execute',
      description: 'Implement targeted campaigns',
    },
    {
      icon: BarChart,
      title: 'Analyze',
      description: 'Measure performance and insights',
    },
    {
      icon: Brush,
      title: 'Refine',
      description: 'Adjust strategies based on data',
    },
  ];
  return (
   <>
      <Head>
        <title>
          Intent Leads - Advanced B2B Lead Generation | High-Quality Sales Leads
        </title>
        <meta
          name="description"
          content="Generate high-quality B2B intent leads with 96% accuracy. Our advanced intent-based lead generation system tracks digital behavior to identify prospects actively researching solutions."
        />
        <meta
          name="keywords"
          content="intent leads, B2B lead generation, sales leads, intent-based marketing, lead qualification, prospect identification"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yoursite.com/intent-leads" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Intent Leads Generation",
            description: "Advanced B2B intent-based lead generation services",
            provider: {
              "@type": "Organization",
              name: "Your Company",
            },
          })}
        </script>
      </Head>
      <div className="min-h-screen mt-4 bg-gray-50">
        {/* Hero Section */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <h1 className="text-xl lg:text-3xl font-bold text-gray-800 mb-6 leading-tight">
                Intent Leads
              </h1>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                In B2B sales, we focus on identifying and delivering
                high-quality Intent Leads that show genuine interest in your
                solutions. Our advanced intent-based lead generation system
                tracks digital behavior signals across the web to identify
                prospects actively researching solutions like yours. We analyze
                search patterns, content consumption, and engagement metrics to
                deliver leads at precisely the right moment in their buying
                journey. Our Intent Leads outperform traditional leads by 3-5x
                in conversion rates because they represent businesses already
                seeking solutions to problems you solve. We provide
                comprehensive intent data including specific search terms used,
                content engaged with, and estimated timeline to purchase,
                enabling your sales team to customize their approach.
              </p>
              <Link href="/contact" className="inline-block">
                <button className="bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-500 hover:to-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Contact us to know more
                </button>
              </Link>
            </div>

            {/* Right Image */}
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="relative w-full mx-auto lg:mx-0">
                {/* Green Gradient Border */}
                <div className="bg-teal-400 rounded-3xl p-2 shadow-2xl">
                  <div className="bg-white rounded-2xl overflow-hidden relative">
                    {/* Main Image */}
                    <Image
                      src="/images/intentlead.webp"
                      alt="Team collaboration on intent leads generation"
                      width={700}
                      height={500}
                      className="rounded-xl object-cover w-full h-auto"
                      priority
                    />
                  </div>
                </div>

                {/* Small Overlay Card Image ABOVE the main image */}
<div className=" border bg-teal-400 w-[200px] h-[140px] p-2 absolute rounded-2xl -bottom-6 -left-14 z-10 flex items-center justify-center">
                  <Image
                    src="/images/intentlead2.webp"
                    alt="Intent lead icon"
                    width={185}
                    height={100}
                    className="object-cover rounded-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center transform transition-all duration-700 delay-${
                    index * 100
                  } hover:scale-105 hover:shadow-xl hover:-translate-y-2 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <div className="text-3xl lg:text-4xl font-bold text-teal-400 mb-3 animate-pulse">
                    {stat.number}
                  </div>
                  {stat.label && (
                    <div className="text-gray-600 text-sm font-medium">
                      {stat.label}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Intent Generation Section */}
        <section className="py-16 px-4 max-w-7xl bg-white mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Diagram */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-3xl p-8 relative overflow-hidden">
                <div className="bg-white rounded-2xl overflow-hidden relative">
                  {/* Main Image */}
                  <Image
                    src="/images/intentgen.jpg"
                    alt="Intent generation process"
                    width={700}
                    height={500}
                    className="rounded-xl object-cover w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2">
              <div className="mb-4">
                <span className="text-teal-400 font-bold text-lg tracking-wide">
                  INTENT GENERATION —
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Intent-Based Lead Generation Services
              </h2>
              <div className="space-y-6 text-gray-600 text-sm leading-relaxed">
                <p>
                  Intent Leads are prospects actively showing interest in
                  solutions like yours through their online behavior, content
                  consumption, and research patterns. We identify and track
                  these signals to connect you with buyers at the right moment.
                </p>
                <p>
                  Our intent identification process analyzes multiple data
                  points including search behavior, content engagement,
                  competitor research, and technology stack evaluation to
                  determine genuine purchase intent.
                </p>
                <p>
                  Using advanced AI and machine learning algorithms, we predict
                  purchase likelihood and prioritize leads based on their intent
                  strength and buying stage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Intent Qualification Section */}
        <section
          className="py-20 bg-white"
          aria-labelledby="intent-qualification"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content - with continuous animation for the chat-like visual */}
              <div
                className="flex justify-center min-h-screen bg-gray-50 py-8"
                aria-label="Lead conversation examples"
              >
                <div
                  className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-2xl space-y-6"
                  role="list"
                >
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      role="listitem"
                      className={`flex items-start space-x-4 transition-all duration-700 ease-in-out ${
                        index % 2 === 0 ? "justify-start" : "justify-end"
                      } ${
                        index < visibleMessages
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      }`}
                    >
                      {/* Left side icon for even messages */}
                      {index % 2 === 0 && (
                        <div className="w-10 h-10 rounded-full border-2 border-green-400 flex items-center justify-center flex-shrink-0 bg-white">
                          <div className="w-3 h-3 rounded-full border border-green-400"></div>
                        </div>
                      )}

                      {/* Message bubble */}
                      <div
                        className={`p-4 rounded-2xl text-white text-sm leading-relaxed shadow-lg max-w-sm ${
                          index % 2 === 0
                            ? "bg-gradient-to-r from-green-400 to-green-500 rounded-tl-none"
                            : "bg-gradient-to-r from-gray-700 to-gray-800 rounded-tr-none"
                        }`}
                      >
                        {msg}
                      </div>

                      {/* Right side icon for odd messages */}
                      {index % 2 === 1 && (
                        <div className="w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center flex-shrink-0 bg-white">
                          <div className="w-3 h-3 rounded-full border border-gray-600"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content */}
              <div className="flex flex-col justify-center">
                <header className="mb-6">
                  <span
                    id="intent-qualification"
                    className="text-teal-400 font-semibold text-lg tracking-wide uppercase"
                  >
                    Intent Qualification —
                  </span>
                  <h1 className="text-3xl font-bold text-gray-800 mt-2">
                    Intent Lead Services
                  </h1>
                  <p className="text-gray-600 text-base mt-4 max-w-xl">
                    We track and analyze buyer behavior across multiple channels
                    to identify genuine purchase intent. Our advanced intent
                    scoring helps you focus on prospects most likely to convert.
                    <br />
                    <br />
                    To qualify intent leads, we analyze:
                  </p>
                </header>
                <ul className="space-y-4" role="list">
                  {[
                    "Content consumption patterns and engagement levels",
                    "Search behavior and keyword research",
                    "Technology evaluation activities",
                    "Competitor comparison research",
                    "Purchase timeline indicators",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md transition-all duration-700 ${
                        index < visibleItems
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                    >
                      <span className="sr-only">Check</span>
                      <div
                        className="w-6 h-6 bg-teal-400 rounded-full flex items-center justify-center mt-1 flex-shrink-0"
                        aria-hidden="true"
                      >
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div
                  className="inline-block mt-6"
                  aria-label="Find your intent leads"
                >
                  <button
                    className="bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] text-white px-6 py-3 rounded-full font-semibold hover:from-green-500 hover:to-green-600 transform hover:scale-105 transition-all duration-300"
                    type="button"
                  >
                    Find your intent leads
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps Section */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Intent Lead Generation Process
            </h2>
            <p className="text-gray-600 text-lg">
              We use a proven seven-step process to identify and deliver
              high-quality intent leads
            </p>
          </div>

          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`flex items-start space-x-6 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-l-4 hover:border-teal-500 hover:bg-green-50 ${
                  activeStep === index
                    ? "border-l-4 border-teal-400 bg-teal-400"
                    : ""
                }`}
              >
                <div className="w-12 h-12 bg-teal-400 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Comprehensive Benefits of{" "}
                <span className="text-teal-400">Lead Generation</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Discover how strategic lead generation transforms businesses by
                finding qualified customers, improving conversion rates, and
                accelerating growth
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="text-teal-400 mr-3">★</span>
                Strategic Business Growth Benefits
              </h3>
            </div>

            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">○</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-3">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      <div className="max-w-7xl mx-auto p-8 space-y-12">
        {/* Operational & Strategic Advantages */}
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-8 bg-teal-400 rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-800">
              Operational & Strategic Advantages
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredCard("data-driven")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 h-full hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                    <Brain
                      className="w-8 h-8 text-blue-600 drop-shadow-lg"
                      style={{
                        filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))",
                      }}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Data-Driven Decision Making
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Leverage advanced analytics and insights to drive strategic
                  decisions. Our comprehensive data analysis provides actionable
                  intelligence for better business outcomes.
                </p>
              </div>
            </div>

            <div
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredCard("sales-pipeline")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 h-full hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                    <Target
                      className="w-8 h-8 text-purple-600 drop-shadow-lg"
                      style={{
                        filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))",
                      }}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Sales Pipeline Optimization
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Optimize your sales funnel with intelligent lead scoring and
                  qualification processes. Increase conversion rates through
                  targeted engagement strategies.
                </p>
              </div>
            </div>

            <div
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredCard("competitive-intelligence")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-xl border border-cyan-200 h-full hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                    <Search
                      className="w-8 h-8 text-cyan-600 drop-shadow-lg"
                      style={{
                        filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))",
                      }}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Competitive Intelligence
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Stay ahead of the competition with real-time market
                  intelligence and competitor analysis. Make informed decisions
                  based on comprehensive market data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Long-Term Business Impact */}
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-8 bg-teal-400 rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-800">
              Long-Term Business Impact
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-emerald-500 text-white">
                  <th className="px-6 py-4 text-left font-semibold">
                    Benefit Category
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">
                    Potential Impact
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">
                    Measurable Outcome
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4 font-medium text-gray-800">
                    Revenue Growth
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    Significant increase in qualified leads and conversions
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    25-40% revenue growth within 12 months
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4 font-medium text-gray-800">
                    Market Expansion
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    Identification of new market opportunities
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    Expansion into 2-3 new market segments
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4 font-medium text-gray-800">
                    Efficiency Enhancement
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    Streamlined sales processes and reduced manual effort
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    50% reduction in lead qualification time
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Quantifiable Benefits */}
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-8 bg-teal-400 rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-800">
              Quantifiable Benefits
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] text-white p-6 rounded-xl text-center hover:bg-emerald-500 transition-colors duration-300 hover:shadow-xl">
                <div className="text-3xl font-bold mb-2">20-30%</div>
                <div className="text-sm opacity-90">
                  Increase in sales conversion rates
                </div>
              </div>
            </div>

            <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] text-white p-6 rounded-xl text-center hover:bg-emerald-500 transition-colors duration-300 hover:shadow-xl">
                <div className="text-3xl font-bold mb-2">40%</div>
                <div className="text-sm opacity-90">
                  Reduction in unqualified leads
                </div>
              </div>
            </div>

            <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] text-white p-6 rounded-xl text-center hover:bg-emerald-500 transition-colors duration-300 hover:shadow-xl">
                <div className="text-3xl font-bold mb-2">50%</div>
                <div className="text-sm opacity-90">
                  Improvement in marketing ROI
                </div>
              </div>
            </div>

            <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] text-white p-6 rounded-xl text-center hover:bg-emerald-500 transition-colors duration-300 hover:shadow-xl">
                <div className="text-3xl font-bold mb-2">2x</div>
                <div className="text-sm opacity-90">Faster deal closure</div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Strategies for Intent Lead Generation */}
      <section className="bg-white rounded-2xl shadow-lg p-8">
  <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
    Advanced Strategies for{" "}
    <span className="text-teal-400">Intent Lead Generation</span>
  </h2>
  <p className="text-gray-600 text-center mb-8">
    Maximize your outbound ROI and conversion rates with these proven
    intent-based strategies.
  </p>

  <div className="mb-8">
    <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
      
      <FileText className="w-5 h-5 text-blue-600" /> Intent-Based Content Strategy
    </h3>

    <div className="mb-6">
      <h4 className="text-lg font-medium text-gray-700 mb-3">Key Approaches:</h4>
      <ul className="space-y-2 text-gray-600 ml-4">
        <li>
          • <strong>Trigger-based messaging:</strong> Craft content that
          responds to specific buying signals or intent triggers.
        </li>
        <li>
          • <strong>Personalized outreach:</strong> Develop highly targeted
          messages based on prospect behavior and engagement patterns.
        </li>
        <li>
          • <strong>Content sequencing:</strong> Create progressive content
          flows that guide prospects through the buying journey.
        </li>
      </ul>
    </div>

    <div>
      <h4 className="text-lg font-medium text-gray-700 mb-4">
        Implementation Tactics
      </h4>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                <FileText
                  className="w-6 h-6 text-orange-600 drop-shadow-lg"
                  style={{
                    filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))",
                  }}
                />
              </div>
              <h5 className="font-semibold text-gray-800">
                Long-Format Content
              </h5>
            </div>
            <p className="text-sm text-gray-600">
              In-depth guides, whitepapers, and case studies that demonstrate
              expertise and provide value to prospects showing high intent.
            </p>
          </div>
        </div>

        <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                <BarChart3
                  className="w-6 h-6 text-blue-600 drop-shadow-lg"
                  style={{
                    filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))",
                  }}
                />
              </div>
              <h5 className="font-semibold text-gray-800">
                Middle-of-Funnel Content
              </h5>
            </div>
            <p className="text-sm text-gray-600">
              Comparison guides, ROI calculators, and educational content that
              helps prospects evaluate solutions and make informed decisions.
            </p>
          </div>
        </div>

        <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                <Target
                  className="w-6 h-6 text-purple-600 drop-shadow-lg"
                  style={{
                    filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))",
                  }}
                />
              </div>
              <h5 className="font-semibold text-gray-800">
                Bottom-of-Funnel Content
              </h5>
            </div>
            <p className="text-sm text-gray-600">
              Product demos, free trials, and consultation offers designed to
              convert high-intent prospects into qualified leads.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Intent Data Technology Stack */}
<section className="bg-white rounded-2xl shadow-lg p-8">
  <div className="flex items-center gap-3 mb-8">
    <div className="w-6 h-6 bg-teal-400 rounded"></div>
    <h2 className="text-2xl font-bold text-gray-800">
      Intent Data Technology Stack
    </h2>
  </div>

  <div className="mb-8">
    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
      <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-sm font-medium">
        1
      </span>
      Essential Tools
    </h3>

    <div className="space-y-4">
      <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
        <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
        <div>
          <h4 className="font-semibold text-gray-800">
            Intent Data Platforms
          </h4>
          <p className="text-sm text-gray-600">
            Monitor prospect research activity, content consumption, and buying
            signal detection
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
        <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
        <div>
          <h4 className="font-semibold text-gray-800">Marketing Automation</h4>
          <p className="text-sm text-gray-600">
            Automated lead nurturing, scoring, and campaign management based on
            intent signals
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
        <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
        <div>
          <h4 className="font-semibold text-gray-800">CRM Integration</h4>
          <p className="text-sm text-gray-600">
            Seamless data flow between intent platforms and customer
            relationship management systems
          </p>
        </div>
      </div>
    </div>
  </div>

  <div>
    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
        2
      </span>
      Integration Strategy
    </h3>

    <div className="grid md:grid-cols-4 gap-4">
      <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200 text-center hover:shadow-lg transition-shadow duration-300">
          <div className="transform transition-transform duration-300 group-hover:bounce">
            <Database
              className="w-8 h-8 text-blue-600 mx-auto mb-2 drop-shadow-lg"
              style={{
                filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))",
              }}
            />
          </div>
          <h4 className="font-semibold text-gray-800 text-sm">
            Intent with CRM sync
          </h4>
        </div>
      </div>

      <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200 text-center hover:shadow-lg transition-shadow duration-300">
          <div className="transform transition-transform duration-300 group-hover:bounce">
            <Mail
              className="w-8 h-8 text-green-600 mx-auto mb-2 drop-shadow-lg"
              style={{
                filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))",
              }}
            />
          </div>
          <h4 className="font-semibold text-gray-800 text-sm">
            Real-time intent to email
          </h4>
        </div>
      </div>

      <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200 text-center hover:shadow-lg transition-shadow duration-300">
          <div className="transform transition-transform duration-300 group-hover:bounce">
            <BarChart3
              className="w-8 h-8 text-purple-600 mx-auto mb-2 drop-shadow-lg"
              style={{
                filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))",
              }}
            />
          </div>
          <h4 className="font-semibold text-gray-800 text-sm">
            Analytics and reporting
          </h4>
        </div>
      </div>

      <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200 text-center hover:shadow-lg transition-shadow duration-300">
          <div className="transform transition-transform duration-300 group-hover:bounce">
            <Zap
              className="w-8 h-8 text-orange-600 mx-auto mb-2 drop-shadow-lg"
              style={{
                filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))",
              }}
            />
          </div>
          <h4 className="font-semibold text-gray-800 text-sm">
            Automated trigger campaigns
          </h4>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Multi-Channel Engagement Strategy */}
<section className="bg-white rounded-2xl shadow-lg p-8">
  <div className="flex items-center gap-3 mb-8">
    <div className="w-6 h-6 bg-teal-400 rounded"></div>
    <h2 className="text-2xl font-bold text-gray-800">
       Multi-Channel Engagement Strategy
    </h2>
  </div>

  <div className="mb-8">
    <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
      <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-sm font-medium">
        1
      </span>
      Channel Optimization
    </h3>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="group cursor-pointer">
        <h4 className="font-semibold text-gray-800 mb-4 text-center">
          Paid Media
        </h4>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-700">
              Programmatic display advertising
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-700">
              Social media advertising
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-700">
              Search intent advertising
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-700">
              LinkedIn intent targeting
            </span>
          </div>
        </div>
      </div>

      <div className="group cursor-pointer">
        <h4 className="font-semibold text-gray-800 mb-4 text-center">
          Email Outreach
        </h4>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-700">
              Personalized email campaigns
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-700">
              Automated drip sequences
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-700">
              Trigger-based email alerts
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-700">
              Retargeting email series
            </span>
          </div>
        </div>
      </div>

      <div className="group cursor-pointer">
        <h4 className="font-semibold text-gray-800 mb-4 text-center">
          Sales Engagement
        </h4>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-200">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-sm text-gray-700">Direct sales outreach</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-200">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-sm text-gray-700">Account-based selling</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-200">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-sm text-gray-700">Social selling tactics</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-200">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-sm text-gray-700">Referral/talk outreach</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div>
    <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
        2
      </span>
      Timing Framework
    </h3>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
              <Eye
                className="w-6 h-6 text-blue-600 drop-shadow-lg"
                style={{
                  filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))",
                }}
              />
            </div>
            <h4 className="font-semibold text-gray-800">
              First Contact (0-24 hours)
            </h4>
          </div>
          <p className="text-sm text-gray-600">
            Immediate personalized outreach based on intent signals and
            behavioral triggers
          </p>
        </div>
      </div>

      <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
              <RefreshCw
                className="w-6 h-6 text-green-600 drop-shadow-lg"
                style={{
                  filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))",
                }}
              />
            </div>
            <h4 className="font-semibold text-gray-800">
              Follow-up Cadence (1-6 days)
            </h4>
          </div>
          <p className="text-sm text-gray-600">
            Structured follow-up sequence with value-added content and
            progressive qualification
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  {/* Measurment and Optimization Framework */}

         <div className=" flex items-center justify-center  ">
         <div className="bg-white rounded-2xl shadow-lg p-8 max-w-9xl w-full">
        {/* Header Section */}
        <div className="flex items-center gap-3 mb-8">
    <div className="w-6 h-6 bg-teal-400 rounded"></div>
    <h2 className="text-2xl font-bold text-gray-800">
      Meaurement and Optimization Framework
    </h2>
  </div>

        {/* Key Metrics Section */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-700 mb-6">Key Metrics:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-teal-100 p-6 rounded-xl shadow-sm border border-gray-200
                           transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 transform
                           flex flex-col justify-between" // Added flex for vertical alignment
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{metric.title}</h3>
                <p className="text-sm text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Optimization Cycle Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-6">Optimization Cycle:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {optimizationCycle.map((cycle, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md
                           transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 transform"
              >
                {/* Icon Container with 3D-like effect and hover animation */}
                <div
                  className="w-16 h-16 bg-gradient-to-br from-green-300 to-green-500 rounded-full flex items-center justify-center mb-4
                             shadow-lg relative overflow-hidden
                             transition-all duration-300 ease-in-out
                             transform hover:scale-110 hover:shadow-xl
                             before:content-[''] before:absolute before:inset-0 before:bg-white before:opacity-0
                             before:transition-opacity before:duration-300 before:ease-in-out
                             hover:before:opacity-20"
                  style={{
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', // More pronounced shadow for 3D effect
                    transform: 'translateZ(0) rotateX(10deg) rotateY(-10deg)', // Subtle 3D tilt
                  }}
                >
                  <cycle.icon className="w-8 h-8 text-white relative z-10" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{cycle.title}</h3>
                <p className="text-sm text-gray-600">{cycle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
      <LogoScroll /> 
      </> 
  );
};
export default IntentLeadsPage;