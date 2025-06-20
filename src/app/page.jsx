"use client";
import './globals.css';
import Head from "next/head";
import Image from "next/image";
import { Megaphone, User, Target, Database, Laptop } from "lucide-react";
import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import dynamic from 'next/dynamic';
const LogoScroll = dynamic(() => import('@/components/LogoScroll'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});

// Moved static data outside component to prevent recreation on re-renders
const slides = [
  {
    id: 1,
    title: "We Are a B2B MARKETING",
    highlight: "Solutions Company",
    description: "who specializes in providing high quality demand generation and lead generation services. We aim to be a trusted and valuable partner for B2B marketers and agencies by helping them execute their marketing programs and boost lead generation.",
    buttonText: "Contact us",
    image: "/images/slide2image.webp",
    alt: "Marketing team working on laptop"
  },
  {
    id: 2,
    title: "A Group of Experts",
    highlight: "Planners",
    description: "At Quore B2B Marketing, we are passionate about helping businesses succeed. We take pride in delivering innovative and effective marketing solutions tailored to meet the unique needs of each client. Our team is dedicated to providing outstanding customer service and support every step of the way, ensuring our client partners achieve the results they desire.",
    buttonText: "Learn More",
    image: "/images/slide1image.webp",
    alt: "Team meeting in progress"
  },
  {
    id: 3,
    title: "Focus on Your",
    highlight: "Business",
    description: "Our primary focus is on your business. Our goal is to ensure that you achieve maximum output and receive the best return on investment through our effective marketing strategies. We understand the importance of driving results while ensuring your business thrives.",
    buttonText: "Contact us",
    image: "/images/slide3image.webp",
    alt: "Business presentation"
  },
];

const services = [
  {
    icon: <Megaphone size={24} className="text-green-500" />,
    title: "Display Advertisement",
    description: "With our expertise in creating compelling digital campaigns, we are dedicated to helping businesses achieve unparalleled success in lead generation and customer acquisition.",
  },
  {
    icon: <User size={24} className="text-green-500" />,
    title: "Account-Based Marketing",
    description: "Account-based marketing (ABM) strategy encompasses a holistic approach that combines data-driven insights, cutting-edge technology, and personalized touch to help you win over target accounts and achieve exceptional ROI.",
  },
  {
    icon: <Target size={24} className="text-green-500" />,
    title: "Lead Generation",
    description: "Elevate your lead generation efforts and expand your reach through strategic content syndication with Quora B2B Marketing. Partner with us to drive quality leads and maximize your marketing impact.",
  },
  {
    icon: <Database size={24} className="text-green-500" />,
    title: "Data Solutions",
    description: "Why settle for outdated and unreliable data when you can harness the power of our Verified Database Solutions? Partner with Quora B2B Marketing today and unlock the potential of accurate and reliable data for your B2B marketing success.",
  },
  {
    icon: <Laptop size={24} className="text-green-500" />,
    title: "Web Development",
    description: "We provide end-to-end web development solutions, ensuring secure, scalable, and user-friendly digital experiences. Our expertise in modern technologies helps businesses establish a strong online presence and drive growth. From design to deployment, we deliver seamless and efficient web solutions.",
  },
];

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [counts, setCounts] = useState({
    projects: 0,
    comments: 0,
    clients: 0,
  });

  // Optimized counter animation with requestAnimationFrame
  useEffect(() => {
    const duration = 2000;
    const startTime = performance.now();
    
    const animateCounts = (timestamp) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      setCounts({
        projects: Math.floor(380 * progress),
        comments: Math.floor(3500 * progress),
        clients: Math.floor(100 * progress),
      });
      
      if (progress < 1) {
        requestAnimationFrame(animateCounts);
      }
    };
    
    const animationId = requestAnimationFrame(animateCounts);
    
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <>
      <Head>
        <title>QuoreB2B Marketing | B2B Lead Generation & Marketing Solutions</title>
        <meta name="description" content="QuoreB2B Marketing provides innovative B2B marketing solutions including lead generation, display advertising, and data solutions to help your business grow." />
        <meta name="keywords" content="B2B marketing, lead generation, display advertising, account-based marketing, data solutions" />
        <meta property="og:title" content="QuoreB2B Marketing - B2B Marketing Solutions" />
        <meta property="og:description" content="Specialists in B2B demand generation and lead generation services to boost your marketing programs." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="QuoreB2B" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.quoreb2b.com/" />
      </Head>

      {/* Hero Swiper Section */}
      <section className="bg-white py-16 relative">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          modules={[Autoplay, Navigation]}
          aria-label="Marketing solutions carousel"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <article className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6">
                <div className="w-full md:w-1/2 text-left space-y-4">
                  <p className="text-[#00d9a6] font-semibold">
                    8 YEARS OF EXPERIENCE
                  </p>
                  <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
                    {slide.title} <br />
                    <span className="text-[#00d9a6]">{slide.highlight}</span>
                  </h1>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {slide.description}
                  </p>
                  <button 
                    className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] text-white font-bold shadow-md hover:scale-105 transition-transform duration-300"
                    aria-label={slide.buttonText}
                  >
                    {slide.buttonText}
                  </button>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="w-[300px] sm:w-[400px] md:w-[500px] aspect-square rounded-full border-[10px] border-[#00d9a6] overflow-hidden">
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover rounded-full"
                      priority={slide.id === 1} // Only prioritize first image
                    />
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev-custom absolute bottom-6 left-1/2 transform -translate-x-[120%] z-10 cursor-pointer">
          <button 
            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-label="Previous slide"
          >
            <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="swiper-button-next-custom absolute bottom-6 left-1/2 transform translate-x-[120%] z-10 cursor-pointer">
          <button 
            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-label="Next slide"
          >
            <ChevronRightIcon className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section 
        className="min-h-screen w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 2xl:px-36 py-10 md:py-20 bg-white flex flex-col md:flex-row justify-between items-center gap-10 max-w-screen-2xl mx-auto"
        aria-labelledby="services-heading"
      >
        <h2 id="services-heading" className="sr-only">Our Services</h2>
        
        <div className="md:w-1/2 space-y-6">
          <p className="text-lg md:text-xl lg:text-4xl font-medium leading-relaxed text-gray-700">
            We combine <span className="text-green-500 font-semibold">marketing</span> methods for each client
            <span className="text-teal-500 font-semibold"> generating </span> Qualified leads,
            <br />
            Display advertising, Email Marketing, Content Syndication.
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

      {/* Mission Section */}
      <section className="w-full bg-white py-12 px-4 sm:px-6 md:px-20 flex flex-col md:flex-row items-center gap-10 max-w-screen-2xl mx-auto">
        <div className="relative w-full max-w-[500px] h-[400px] rounded-2xl bg-gradient-to-br from-green-400 to-lime-400 p-3 flex items-center justify-center group">
          <Image
            src="/images/missionimage.webp"
            alt="QuoreB2B Marketing team discussing strategy"
            width={500}
            height={550}
            className="rounded-2xl transform transition-transform duration-500 group-hover:scale-105 object-cover"
            priority={false}
          />
        </div>

        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
            Learn more about our <span className="text-green-500">missions</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Quora B2B Marketing's mission is to help businesses achieve their
            growth objectives by delivering innovative, data-driven marketing
            strategies tailored to the unique needs of B2B companies. They focus
            on creating measurable results through targeted campaigns, lead
            generation, and customer engagement, ensuring their clients stay
            competitive in their respective industries. Their approach often
            combines creativity with analytics to optimize marketing efforts and
            drive ROI for their clients.
          </p>
          <button 
            className="text-sm font-medium px-6 py-3 rounded-full bg-gradient-to-r from-lime-300 to-emerald-400 text-white shadow-md hover:scale-105 transition-transform duration-300"
            aria-label="Read more about our mission"
          >
            Read More
          </button>
        </div>
      </section>

      {/* Counter Section */}
      <section className="w-full py-16 bg-gradient-to-r from-green-400 to-lime-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-around items-center text-center gap-8 sm:gap-0">
          <article>
            <p className="text-3xl sm:text-4xl font-bold" aria-live="polite">{counts.projects}+</p>
            <p className="text-sm sm:text-base">PROJECTS</p>
          </article>
          <article>
            <p className="text-3xl sm:text-4xl font-bold" aria-live="polite">{counts.comments}+</p>
            <p className="text-sm sm:text-base">USERS' COMMENTS</p>
          </article>
          <article>
            <p className="text-3xl sm:text-4xl font-bold" aria-live="polite">{counts.clients}+</p>
            <p className="text-sm sm:text-base">HAPPY CLIENTS</p>
          </article>
        </div>
      </section>

      {/* We Love What We Do Section */}
      <section className="w-full bg-white px-4 sm:px-6 md:px-20 py-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          We <span className="text-green-500">Love</span> What <br className="hidden sm:block" /> We Do
        </h2>
        <ul className="mt-6 space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed">
          <li>
            ✓ We love forging strong, lasting connections—not just between
            businesses and their clients, but also with our own partners. Your
            success is our success, and we thrive on collaboration.
          </li>
          <li>
            ✓ B2B marketing is anything but simple, and that's what excites us!
            We love diving deep into your industry, understanding your unique
            challenges, and crafting tailored solutions that deliver real
            impact.
          </li>
          <li>
            ✓ We're passionate about blending creativity with data-driven
            strategies. Whether it's crafting compelling content or designing
            innovative campaigns, we love finding the perfect balance between
            art and analytics.
          </li>
          <li>
            ✓ There's nothing more rewarding than seeing our clients grow. We
            love being part of your journey, helping you reach new markets,
            generate leads, and achieve your business goals.
          </li>
          <li>
            ✓ The world of B2B marketing is always evolving, and we love staying
            on the cutting edge. From emerging technologies to the latest
            trends, we're constantly learning and adapting to keep your business
            ahead of the competition.
          </li>
        </ul>
      </section>

      <LogoScroll />
    </>
  );
}