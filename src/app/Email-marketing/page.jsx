"use client";

import { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronUp,
  Mail,
  Sparkles,
  CircleHelp,
} from "lucide-react";

import Image from "next/image";
import LogoScroll from "@/components/LogoScroll";

const EmailMarketingLanding = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const faqs = [
    {
      id: 1,
      question: "How does B2B email marketing differ from B2C email marketing?",
      answer: (
        <div>
          <p className="mb-3">
            B2B email marketing focuses on longer sales cycles, multiple
            decision-makers, and relationship building. Key differences include:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>More educational and nurturing content</li>
            <li>Targeting specific job roles and industries</li>
            <li>Focus on ROI and business value</li>
            <li>Integration with CRM and sales processes</li>
          </ul>
        </div>
      ),
    },
    {
      id: 2,
      question: "What's the ideal frequency for B2B email campaigns?",
      answer: (
        <div>
          <p className="mb-3">
            The optimal frequency depends on your audience and goals, but we
            generally recommend:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Nurture sequences: 1-2 emails per week</li>
            <li>Newsletters: 1-2 times per month</li>
            <li>Promotional campaigns: 2-4 times per quarter</li>
            <li>Triggered emails: As needed based on user actions</li>
          </ul>
          <p className="mt-3">
            We'll help you determine the right cadence for your specific
            audience.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      question: "How do you ensure email deliverability?",
      answer: (
        <div>
          <p className="mb-3">
            We employ multiple strategies to maximize inbox placement:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Strict list hygiene and permission-based marketing</li>
            <li>Authentication protocols (SPF, DKIM, DMARC)</li>
            <li>Gradual warm-up of new IP addresses</li>
            <li>Continuous monitoring of sender reputation</li>
            <li>A/B testing of subject lines and content</li>
            <li>Regular list cleaning and engagement monitoring</li>
          </ul>
        </div>
      ),
    },
    {
      id: 4,
      question: "What types of email content perform best for B2B?",
      answer: (
        <div>
          <p className="mb-3">The most effective B2B email content includes:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Educational content (guides, whitepapers)</li>
            <li>Case studies and customer success stories</li>
            <li>Product updates and feature highlights</li>
            <li>Industry insights and trend reports</li>
            <li>Webinar and event invitations</li>
            <li>Personalized recommendations</li>
          </ul>
          <p className="mt-3">
            We'll help you create the right mix for your audience.
          </p>
        </div>
      ),
    },
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const handleSubmit = async () => {
    if (!email) return;

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("access_key", "d2de4773-7e69-47b5-976c-50267c31532a"); // Replace with your actual access key
      formData.append("subject", "New Email Subscription");
      formData.append("from_name", "Email Marketing Website");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setShowThankYou(true);
        setEmail("");
        setTimeout(() => setShowThankYou(false), 5000);
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <>
    <div className="min-h-screen mt-8 bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content - Slide from left */}
            <div
              className={`space-y-6 transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              }`}
            >
              <div
                className={`transition-all duration-800 delay-200 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <h1 className="text-xl lg:text-3xl font-bold text-gray-800 leading-tight">
                  Email Marketing
                </h1>
              </div>
              <div
                className={`transition-all duration-800 delay-400 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <p className="text-gray-600 text-sm leading-relaxed">
                  Email marketing is a powerful tool for nurturing leads and
                  boosting conversions when executed strategically. Start by
                  setting clear goals—whether for lead nurturing, sales, or
                  customer retention—and segment your audience for personalized
                  messaging. Ensure compliance with regulations like GDPR and
                  CAN-SPAM to maintain trust and avoid penalties. Craft engaging
                  subject lines, mobile-friendly designs, and compelling CTAs to
                  maximize open and click-through rates. Leverage automation for
                  welcome emails, abandoned cart reminders, and re-engagement
                  campaigns, while using A/B testing to refine performance.
                  Track key metrics like open rates, CTR, and conversions to
                  continuously optimize your strategy. By following this
                  structured approach, businesses can enhance engagement, drive
                  sales, and achieve a higher ROI from their email campaigns.
                </p>
              </div>
            </div>

            {/* Image - Slide from right */}
            <div
              className={`relative transition-all duration-1000 ease-out delay-600 ${
                isVisible
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 translate-x-12 scale-95"
              }`}
            >
              <div className="relative">
                <Image
                  src="/images/emailm.webp"
                  alt="Email Marketing Network - Professional pointing at interconnected email icons"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl object-cover"
                  loading="eager"
                  decoding="async"
                />
           
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Boost Email Conversions Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image - Slide from left */}
            <div
              className={`relative transition-all duration-1000 ease-out delay-200 ${
                isVisible
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 -translate-x-12 scale-95"
              }`}
            >
              <div className="relative">
                <Image
                  src="/images/emailb.jpg"
                  alt="Business team collaborating in modern office meeting discussing email campaigns"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl object-cover"
                  loading="eager"
                  decoding="async"
                />
             
              </div>
            </div>

            {/* Text Content - Slide from right */}
            <div
              className={`space-y-6 transition-all duration-1000 ease-out delay-400 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }`}
            >
              <h2 className="text-xl lg:text-3xl font-bold text-gray-800 leading-tight">
                Boost Email Conversions with Personalized Campaigns
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Capture your audience's attention with highly targeted and
                customized email content. Stand out in crowded inboxes by
                delivering personalized messages tailored to your subscribers'
                preferences, behaviors, and needs. Leverage dynamic content,
                compelling subject lines, and data-driven insights to ensure
                every email feels relevant and valuable. Deliver engaging,
                relevant messages that resonate with your subscribers, sparking
                curiosity and encouraging action. Whether it's a promotional
                offer, an educational newsletter, or a personalized
                recommendation, make every interaction count. Use persuasive
                copy, eye-catching visuals, and clear CTAs to guide readers
                toward the next step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Powerful Features Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xl lg:text-3xl font-bold text-gray-800 mb-4">
              Powerful Features for B2B Success
            </h2>
            <p className="text-gray-600 text-lg">
              Everything you need to create high-performing email campaigns that
              convert
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h2v4h2v2H4c-1.1 0-2-.9-2-2 0 0 0-2 2-2zm14-8c-1.28 0-2.56.93-2.9 2.2L14 16.2c-.8-1.4-2.27-2.2-3.85-2.2-1.78 0-3.15 1.09-3.15 3.15V20h2v-2.65c0-.48.38-.85.85-.85s.85.38.85.85V20h2v-2.65c0-.48.38-.85.85-.85s.85.38.85.85V20h2v-2.65c0-2.06-1.37-3.15-3.15-3.15z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-teal-500 mb-4">
                Advanced Audience Segmentation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Divide your audience into precise segments based on behavior,
                demographics, and engagement to deliver hyper-targeted messages
                that convert.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 11H7v4h2v-4zm4 0h-2v4h2v-4zm4 0h-2v4h2v-4zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-teal-500 mb-4">
                AI-Powered Personalization
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our machine learning algorithms analyze customer data to
                automatically personalize content, subject lines, and send times
                for each recipient.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-teal-500 mb-4">
                Automated Workflows
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Set up sophisticated email sequences that trigger based on user
                actions, saving you time while nurturing leads through the sales
                funnel.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-teal-500 mb-4">
                Comprehensive Analytics
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Track opens, clicks, conversions, and revenue with detailed
                reporting and insights to optimize your campaigns and improve
                ROI.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-teal-500 mb-4">
                Enterprise-Grade Security
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Your data is protected with bank-level security, SSL encryption,
                and full compliance with GDPR and other privacy regulations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-teal-500 mb-4">
                Dedicated Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get expert level marketing advice from dedicated specialists who
                understand your business and industry challenges for maximum
                ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose QuoreB2B Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xl lg:text-3xl font-bold text-gray-800 mb-4">
              Why Choose QuoreB2B?
            </h2>
            <p className="text-gray-600 text-lg">
              We deliver exceptional results through cutting-edge technology and
              proven strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-teal-500">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-teal-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-teal-500 mb-4">
                B2B Specialization
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We understand the unique challenges of B2B marketing, with
                longer sales cycles, multiple decision-makers, and complex
                buying processes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-teal-500">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-teal-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h2v4h2v2H4c-1.1 0-2-.9-2-2 0 0 0-2 2-2zm14-8c-1.28 0-2.56.93-2.9 2.2L14 16.2c-.8-1.4-2.27-2.2-3.85-2.2-1.78 0-3.15 1.09-3.15 3.15V20h2v-2.65c0-.48.38-.85.85-.85s.85.38.85.85V20h2v-2.65c0-.48.38-.85.85-.85s.85.38.85.85V20h2v-2.65c0-2.06-1.37-3.15-3.15-3.15z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-teal-500 mb-4">
                AI-Powered Personalization
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Machine learning algorithms craft individually tailored email
                experiences that resonate with each recipient, dramatically
                improving engagement rates.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-teal-500">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-teal-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-teal-500 mb-4">
                Advanced Analytics
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Real-time performance tracking and actionable insights for
                continuous improvement, helping you optimize every aspect of
                your email marketing strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-xl md:text-3xl font-bold text-gray-800 mb-6">
            Proven Results Across Industries
          </h1>
          <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
            Businesses using our email marketing platform see dramatic
            improvements in engagement and revenue
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-5xl md:text-6xl font-bold text-emerald-400 mb-2">
                3.5x
              </div>
              <div className="text-gray-600 text-lg">Higher Open Rates</div>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-5xl md:text-6xl font-bold text-emerald-400 mb-2">
                2.8x
              </div>
              <div className="text-gray-600 text-lg">More Click-Throughs</div>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-5xl md:text-6xl font-bold text-emerald-400 mb-2">
                42%
              </div>
              <div className="text-gray-600 text-lg">
                Increase in Conversions
              </div>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-5xl md:text-6xl font-bold text-emerald-400 mb-2">
                5:1
              </div>
              <div className="text-gray-600 text-lg">Average ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Email Marketing Process
            </h2>
            <p className="text-gray-600">
              A 4-step process that delivers results
            </p>
          </div>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group">
              <div className="flex-shrink-0 w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Audience Analysis
                </h3>
                <p className="text-gray-600">
                  We conduct in-depth analysis to understand your target
                  audience's preferences, behaviors, and interests to create
                  highly relevant campaigns.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group">
              <div className="flex-shrink-0 w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Strategy Development
                </h3>
                <p className="text-gray-600">
                  Our experts design customized email marketing strategy with
                  clear objectives, KPIs, and content calendar specifically for
                  your business.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group">
              <div className="flex-shrink-0 w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Campaign Creation
                </h3>
                <p className="text-gray-600">
                  We craft compelling email content with attention-grabbing
                  subject lines, personalized copy, and mobile- optimized
                  designs that drive action.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group">
              <div className="flex-shrink-0 w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Testing & Optimization
                </h3>
                <p className="text-gray-600">
                  Before launch, we optimize with A/B testing and continuous
                  performance tracking to maximize your results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Email Marketing Use Cases
            </h2>
            <p className="text-gray-600">
              Designed to work for each type of business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Lead Nurturing */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-emerald-300 transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-emerald-600 mb-4 group-hover:text-emerald-700">
                Lead Nurturing
              </h3>
              <p className="text-gray-600 mb-4">
                Cultivate relationships with prospects through targeted email
                sequences that build trust and move them towards a purchase
                decision.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></span>
                  Automated nurture sequences
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></span>
                  Educational content delivery
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></span>
                  Behavioral trigger campaigns
                </li>
              </ul>
            </div>

            {/* Customer Onboarding */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-emerald-300 transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-emerald-600 mb-4 group-hover:text-emerald-700">
                Customer Onboarding
              </h3>
              <p className="text-gray-600 mb-4">
                Welcome new customers with comprehensive onboarding email series
                that helps them get started and drive early value.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></span>
                  Welcome email series
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></span>
                  Feature introduction guides
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></span>
                  Success milestone tracking
                </li>
              </ul>
            </div>

            {/* Revenue Generation */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-emerald-300 transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-emerald-600 mb-4 group-hover:text-emerald-700">
                Revenue Generation
              </h3>
              <p className="text-gray-600 mb-4">
                Drive direct sales through promotional campaigns, product
                announcements, and targeted offers that convert subscribers into
                customers.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></span>
                  Promotional campaigns
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></span>
                  Product announcement emails
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></span>
                  Abandoned cart recovery
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-600">
              Choose the plan that fits your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white border-2 border-emerald-200 rounded-lg p-8 hover:shadow-xl hover:border-emerald-400 transition-all duration-300 group">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-emerald-600 mb-4">
                  Starter
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-800">$299</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 text-gray-600 mb-8 text-left">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3"></span>
                    Up to 10,000 contacts
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3"></span>
                    Basic templates
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3"></span>
                    Email support
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3"></span>
                    Basic reporting
                  </li>
                </ul>
                <button className="w-full bg-emerald-400 text-white font-semibold py-3 px-6 rounded-lg hover:bg-emerald-500 transition-colors duration-300 group-hover:scale-105 transform">
                  Get Started
                </button>
              </div>
            </div>

            {/* Professional Plan */}
            <div className="bg-white border-2 border-emerald-200 rounded-lg p-8 hover:shadow-xl hover:border-emerald-400 transition-all duration-300 group">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-emerald-600 mb-4">
                  Professional
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-800">$699</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 text-gray-600 mb-8 text-left">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3"></span>
                    Up to 50,000 contacts
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3"></span>
                    Advanced automation
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3"></span>
                    Priority support
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3"></span>
                    Custom integrations
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3"></span>
                    Advanced analytics
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3"></span>
                    A/B testing
                  </li>
                </ul>
                <button className="w-full bg-emerald-400 text-white font-semibold py-3 px-6 rounded-lg hover:bg-emerald-500 transition-colors duration-300 group-hover:scale-105 transform">
                  Get Started
                </button>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white border-2 border-emerald-200 rounded-lg p-8 hover:shadow-xl hover:border-emerald-400 transition-all duration-300 group">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-emerald-600 mb-4">
                  Enterprise
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-800">
                    Custom
                  </span>
                </div>
                <ul className="space-y-3 text-gray-600 mb-8 text-left">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3"></span>
                    Unlimited contacts
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3"></span>
                    Custom solutions
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3"></span>
                    24/7 dedicated support
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3"></span>
                    API access
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3"></span>
                    Advanced segmentation
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3"></span>
                    White-label options
                  </li>
                </ul>
                <button className="w-full bg-emerald-400 text-white font-semibold py-3 px-6 rounded-lg hover:bg-emerald-500 transition-colors duration-300 group-hover:scale-105 transform">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600">
              Trusted by marketing teams at leading companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 group">
              <p className="text-gray-600 mb-6 italic">
                "Since implementing their email marketing platform, we've seen a
                275% increase in qualified leads. The automation features have
                saved us countless hours while delivering better results."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-emerald-400 rounded-full flex items-center justify-center text-white font-bold mr-4 group-hover:scale-110 transition-transform duration-300">
                  SH
                </div>
                <div>
                  <div className="font-semibold text-gray-800">
                    Sarah Mitchell
                  </div>
                  <div className="text-sm text-gray-600">
                    Marketing Director
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 group">
              <p className="text-gray-600 mb-6 italic">
                "The personalization capabilities have transformed our customer
                engagement. We've achieved a 60% improvement in click-through
                rates and our customers love the relevant content."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-emerald-400 rounded-full flex items-center justify-center text-white font-bold mr-4 group-hover:scale-110 transition-transform duration-300">
                  DJ
                </div>
                <div>
                  <div className="font-semibold text-gray-800">
                    David Johnson
                  </div>
                  <div className="text-sm text-gray-600">CEO</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 group">
              <p className="text-gray-600 mb-6 italic">
                "The analytics dashboard provides insights we never had before.
                We can now track customer journeys and optimize our campaigns
                for maximum ROI. It's been a game-changer for our business."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-emerald-400 rounded-full flex items-center justify-center text-white font-bold mr-4 group-hover:scale-110 transition-transform duration-300">
                  ER
                </div>
                <div>
                  <div className="font-semibold text-gray-800">
                    Emily Rodriguez
                  </div>
                  <div className="text-sm text-gray-600">Growth Manager</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <div className="bg-white rounded-2xl p-6 md:p-10 shadow-md max-w-2xl mx-auto">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <CircleHelp className="w-7 h-7 text-emerald-500" />
            <h2 className="text-emerald-600 text-3xl font-semibold">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Get answers to common questions about our email marketing services.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-800 font-medium text-sm">
                    {faq.question}
                  </span>
                </div>
                {openFAQ === faq.id ? (
                  <ChevronUp className="w-4 h-4 text-gray-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
                )}
              </button>

              {openFAQ === faq.id && (
                <div className="px-5 pb-4 transition-all duration-300 ease-in-out">
                  <div className="pl-4 border-l-2 border-emerald-100">
                    <div className="text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Subscribe Section */}
      <div className="relative bg-white   md:p-10  max-w-2xl mx-auto rounded-3xl p-8 shadow-lg overflow-hidden mt-4">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-white rounded-3xl"></div>
        <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-6 left-6 w-12 h-12 bg-white/10 rounded-full blur-lg"></div>

        <div className="relative max-w-md mx-auto text-center">
          {/* Icon and title */}
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3">
              <Mail className="w-8 h-8 text-black" />
            </div>
          </div>

          <h3 className="text-black text-2xl font-bold mb-2 flex items-center justify-center gap-2">
            Stay Updated
            <Sparkles className="w-5 h-5 text-yellow-300" />
          </h3>

          <p className="text-black text-sm mb-6 leading-relaxed">
            Join our newsletter for the latest B2B email marketing insights,
            tips, and strategies delivered straight to your inbox.
          </p>

          <div className="space-y-4">
            <div className="relative group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter your email address..."
                className="w-full px-5 py-4 bg-white/95 backdrop-blur-sm border-0 rounded-xl text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-3 focus:ring-white/50 focus:bg-white transition-all duration-300 shadow-lg"
                disabled={isSubmitting}
              />
              <button
                onClick={handleSubmit}
                disabled={isSubmitting || !email}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] text-black px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  "Subscribe"
                )}
              </button>
            </div>

            <p className="text-black text-xs">
              🔒 We respect your privacy. Unsubscribe at any time.
            </p>
          </div>

          {/* Thank you message */}
          {showThankYou && (
            <div className="mt-6 backdrop-blur-sm rounded-xl p-4 transition-all duration-500 ease-in-out transform scale-105">
              <p className="text-black font-semibold flex items-center justify-center gap-2">
                <span className="text-xl">🎉</span>
                Thank you for subscribing!
                <span className="text-xl">✨</span>
              </p>
              <p className="text-black text-sm mt-1">
                Welcome to our community of B2B marketing professionals!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
    <LogoScroll />
    </>
  );
};

export default EmailMarketingLanding;