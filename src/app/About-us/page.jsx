"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  RocketLaunchIcon,
  ServerStackIcon,
  PresentationChartLineIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import React, { memo } from "react";
import dynamic from "next/dynamic";

// Lazy load LogoScroll component for better performance
const LogoScroll = dynamic(() => import("@/components/LogoScroll"), {
  loading: () => <div className="h-20 bg-gray-100 animate-pulse" />,
  ssr: false,
});

// Memoized card component to prevent unnecessary re-renders
const FeatureCard = memo(({ icon, title, description, className = "" }) => (
  <div
    className={`bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:bg-gradient-to-r from-[#d9eb72] to-[#00D4A4] hover:shadow-xl hover:scale-105 group ${className}`}
  >
    <div className="text-3xl mb-2 group-hover:text-white transition-colors duration-300" aria-hidden="true">
      {icon}
    </div>
    <h3 className="text-lg font-bold mb-2 group-hover:text-white transition-colors duration-300">
      {title}
    </h3>
    <p className="text-sm text-gray-600 group-hover:text-white transition-colors duration-300">
      {description}
    </p>
  </div>
));

FeatureCard.displayName = 'FeatureCard';

// Vision cards data for better maintainability
const visionData = [
  {
    icon: RocketLaunchIcon,
    title: "Our Mission",
    description: "At Quore B2B Marketing, our mission is to revolutionize the B2B marketing landscape through forward-thinking strategies, cutting-edge technology, and a deep understanding of our clients' unique needs and aspirations. We strive to be the trusted partner that propels businesses towards sustainable growth and prosperity."
  },
  {
    icon: ServerStackIcon,
    title: "Our Approach",
    description: "We believe in the power of data-driven insights, creative ingenuity, and a relentless pursuit of excellence. Our approach is rooted in a deep understanding of B2B dynamics, enabling us to craft tailored marketing solutions that speak directly to the challenges and opportunities faced by our clients."
  },
  {
    icon: PresentationChartLineIcon,
    title: "Our Values",
    description: "Innovation: We are committed to exploring new frontiers and pushing the boundaries of B2B marketing to deliver fresh, impactful strategies. Collaboration: Our success is intertwined with the success of our clients. We believe in building strong, collaborative partnerships to achieve common goals."
  },
  {
    icon: PaperAirplaneIcon,
    title: "Our Vision",
    description: "Integrity: Trust is at the core of everything we do. We uphold the highest standards of integrity in all our interactions and strategies. Results-Driven: We are relentless in our pursuit of achieving tangible, measurable results for our clients."
  }
];

// What we love data
const whatWeLoveData = [
  {
    icon: "💚",
    title: "Building Relationships",
    description: "We love forging strong, lasting connections—not just between businesses and their clients, but also with our own partners. Your success is our success, and we thrive on collaboration."
  },
  {
    icon: "🧩",
    title: "Solving Complex Challenges",
    description: "B2B marketing is anything but simple. We love diving deep into your industry, understanding your unique challenges, and crafting tailored solutions that deliver real impact."
  },
  {
    icon: "🎨",
    title: "Creativity Meets Strategy",
    description: "We're passionate about blending creativity with data-driven strategies. From content to campaigns, we find the perfect balance between art and analytics."
  },
  {
    icon: "📈",
    title: "Driving Growth",
    description: "There's nothing more rewarding than seeing our clients grow. We love helping you reach new markets, generate leads, and achieve your business goals."
  },
  {
    icon: "🚀",
    title: "Staying Ahead of the Curve",
    description: "We're constantly learning and adapting to keep your business ahead of the competition, leveraging the latest trends and technologies."
  },
  {
    icon: "🌐",
    title: "Global Perspective",
    description: "We embrace a worldwide approach to marketing. Our global mindset allows us to craft strategies that resonate across different cultures and business landscapes."
  }
];

// What we do data
const whatWeDoData = [
  {
    icon: "📊",
    title: "Strategic Marketing Consulting",
    description: "We work closely with you to develop a clear, actionable marketing strategy that aligns with your business objectives. From market research to competitive analysis, we lay the foundation for success."
  },
  {
    icon: "📝",
    title: "Content Marketing & Storytelling",
    description: "We create high-quality, engaging content that resonates with your audience. Whether it's blogs, whitepapers, case studies, or videos, we help you tell your story in a way that builds trust and drives action."
  },
  {
    icon: "📬",
    title: "Lead Generation & Nurturing",
    description: "We design targeted campaigns to attract and convert high-quality leads. From email marketing to account-based marketing (ABM), we ensure your pipeline is always full."
  },
  {
    icon: "🌐",
    title: "Digital Marketing & SEO",
    description: "We optimize your online presence to ensure you're visible where it matters most. Our team specializes in SEO, PPC, social media, and website optimization to drive traffic and conversions."
  },
  {
    icon: "✏",
    title: "Brand Development",
    description: "Your brand is your identity, and we help you make it unforgettable. From logo design to messaging, we ensure your brand stands out and speaks directly to your target audience."
  },
  {
    icon: "📈",
    title: "Data-Driven Analytics",
    description: "We believe in measurable results. Our team uses advanced analytics tools to track performance, measure ROI, and refine strategies for continuous improvement."
  },
  {
    icon: "🎤",
    title: "Event Marketing",
    description: "Whether it's virtual or in-person, we help you create memorable experiences that connect you with your audience and amplify your brand."
  },
  {
    icon: "🤝",
    title: "Why Choose Quore B2B Marketing?",
    description: "We're not just another marketing agency—we're your growth partners. With deep B2B expertise and a passion for results, we're here to help you go beyond your goals. Let's build something extraordinary together."
  },
  {
    icon: "✨",
    title: "Integrated Marketing Solutions",
    description: "We create seamless, omnichannel marketing experiences. Our integrated strategy ensures consistent messaging, maximized reach, and a unified brand narrative across all touchpoints."
  }
];

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us - Quore B2B Marketing | Creative B2B Marketing Solutions</title>
        <meta 
          name="description" 
          content="Discover Quore B2B Marketing - your trusted partner for innovative B2B marketing solutions. We specialize in strategic consulting, content marketing, lead generation, and digital marketing to drive business growth." 
        />
        <meta 
          name="keywords" 
          content="B2B marketing, marketing solutions, lead generation, content marketing, digital marketing, SEO, brand development, marketing consulting" 
        />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="About Us - Quore B2B Marketing | Creative B2B Marketing Solutions" />
        <meta property="og:description" content="Discover Quore B2B Marketing - your trusted partner for innovative B2B marketing solutions. We drive business growth through strategic marketing." />
        <meta property="og:image" content="/images/aboutus.jpg" />
        <meta property="og:url" content="/about" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="QuoreB2B" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Quore B2B Marketing" />
        <meta name="twitter:description" content="Creative B2B Marketing Solutions Company driving business growth through innovative strategies." />
        <meta name="twitter:image" content="/images/aboutus.jpg" />
        
        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Quore B2B Marketing" />
        <link rel="canonical" href="/about" />
        
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Quore B2B Marketing",
              "description": "Creative B2B Marketing Solutions Company specializing in strategic consulting, content marketing, lead generation, and digital marketing.",
              "url": "/about",
              "logo": "/images/logo.png",
              "sameAs": [
                // Add your social media URLs here
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "url": "/contact"
              },
              "areaServed": "Worldwide",
              "serviceType": "B2B Marketing Services"
            })
          }}
        />
      </Head>

      {/* Main content with semantic HTML */}
      <main>
        {/* ABOUT Section - Hero */}
        <section 
          className="w-full bg-white mt-4 py-12 px-4 md:px-12 lg:px-24 flex flex-col-reverse lg:flex-row items-center justify-between font-quicksand"
          aria-labelledby="about-heading"
        >
          {/* Left Text Content */}
          <div className="max-w-xl text-center lg:text-left">
            <h1 id="about-heading" className="text-4xl md:text-5xl font-bold text-black leading-tight mb-4">
              We are a creative <br />
              <span className="text-[#00d9a6]">B2B Marketing Solutions Company</span>
            </h1>
            <p className="text-gray-700 text-base md:text-lg mb-6">
              Welcome to Quore B2B Marketing, where our passion for excellence drives us to
              deliver top-tier marketing solutions for businesses across various industries.
              With a focus on innovation, customer-centric strategies, and measurable results,
              we are committed to empowering our clients&apos; growth and success.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-[#d9eb72] to-[#00D4A4] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-[#00D4A4] focus:ring-opacity-50"
              aria-label="Read more about our services"
            >
              READ MORE
            </Link>
          </div>

          {/* Right Image */}
          <div className="mb-8 lg:mb-2 lg:ml-12 w-full lg:w-[50%]">
            <Image
              src="/images/aboutus.jpg"
              alt="Quore B2B Marketing team collaborating on innovative marketing strategies"
              width={700}
              height={500}
              className="rounded-lg shadow-xl"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
        </section>

        {/* Our Visions Section */}
        <section
          className="w-full py-16 px-4 md:px-12 lg:px-24 text-white text-center font-quicksand"
          style={{
            background: "linear-gradient(90deg, #d9eb72, #00D4A4)",
          }}
          aria-labelledby="vision-heading"
        >
          <h2 id="vision-heading" className="text-4xl font-bold mb-8">Our Visions</h2>
          <div className="w-16 h-1 mx-auto bg-white rounded mb-12" aria-hidden="true"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visionData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <article 
                  key={index}
                  className="p-6 rounded-lg transition-all hover:bg-[rgba(82,194,95,0.952)] hover:shadow-xl hover:scale-105"
                >
                  <IconComponent className="h-12 w-12 mx-auto mb-4 text-white" aria-hidden="true" />
                  <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-sm text-white">{item.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* WHAT WE LOVE Section */}
        <section 
          className="w-full bg-white py-16 px-4 md:px-12 lg:px-24 font-quicksand text-center text-teal-700"
          aria-labelledby="love-heading"
        >
          <h2 id="love-heading" className="text-4xl font-bold mb-4">What We Love</h2>
          <p className="text-base md:text-lg max-w-4xl mx-auto mb-12 text-gray-700">
            At Quore B2B Marketing, we are passionate about helping businesses grow, thrive, and connect in meaningful ways.
            We believe that marketing is more than just a service—it&apos;s a partnership, a creative journey, and a strategic mission to drive results.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeLoveData.map((card, index) => (
              <FeatureCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </section>

        {/* WHAT WE DO Section */}
        <section 
          className="w-full bg-white py-16 px-4 md:px-12 lg:px-24 font-quicksand text-center text-teal-700"
          aria-labelledby="services-heading"
        >
          <h2 id="services-heading" className="text-4xl font-bold mb-4">What We Do</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeDoData.map((card, index) => (
              <FeatureCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </section>

        {/* CONTACT PROMPT Section */}
        <section 
          className="w-full bg-[#5a5a5a] text-white py-24 flex flex-col items-center justify-center text-center px-4"
          aria-labelledby="contact-heading"
        >
          <h2 id="contact-heading" className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
            PLEASE SEND US YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d9eb72] to-[#00D4A4] font-bold">QUESTIONS</span> AND
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-10">
            WE CAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d9eb72] to-[#00D4A4] font-bold">HELP</span> YOU BETTER
          </p>

          <Link
            href="/contact"
            className="bg-gradient-to-r from-[#d9eb72] to-[#00D4A4] hover:opacity-90 text-white text-sm font-semibold px-6 py-2 rounded-full shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00D4A4] focus:ring-opacity-50"
            aria-label="Contact us for marketing solutions"
          >
            CONTACT US
          </Link>
        </section>
      </main>

      {/* Footer component - lazy loaded */}
      <LogoScroll />
    </>
  );
}