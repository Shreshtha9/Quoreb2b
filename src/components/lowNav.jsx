"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    name: "Display Advertisement",
    image: "/images/service1.jpg",
    link: "/Display-ads",
  },
  { name: "Account Based Marketing", image: "/images/service2.png", link: "/Account-based-marketing" },
  { name: "Lead Generation", image: "/images/service3.jpeg", link: "#" },
  { name: "Data Solutions", image: "/images/service4.webp", link: "#" },
  { name: "Web Design", image: "/images/service5.jpg", link: "#" },
];

const solutions = [
  { name: "Content Syndication", image: "/images/solution1.png", link: "#" },
  { name: "Sales-Qualified Leads", image: "/images/solution2.jpg", link: "#" },
  { name: "Intent Leads", image: "/images/solution3.jpg", link: "#" },
  { name: "Email Marketing", image: "/images/solution4.webp", link: "#" },
];

const knowledgebase = [
  { name: "Whitepaper", image: "/images/whitepaper.jpg", link: "#" },
  { name: "Blogs", image: "/images/blog.jpg", link: "#" },
  
];

export default function LowNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const [mobileSolutionOpen, setMobileSolutionOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const [mobileB2BOpen, setMobileB2BOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* TOP NAVIGATION BAR - Always visible but can hide content */}
      <div
        className={`bg-gray-900 text-white transition-all duration-300 ${
          scrolled ? "h-10 opacity-100" : "h-10 opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between h-10 text-xs transition-opacity duration-300 opacity-100`}>
            {/* Left side - Contact Info */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <PhoneIcon className="w-3 h-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <EnvelopeIcon className="w-3 h-3" />
                <span>info@quoreb2b.com</span>
              </div>
            </div>

            {/* Right side - Social Links & Additional Links */}
            <div className="flex items-center space-x-4">
              <Link
                href="/careers"
                className="hover:text-teal-400 transition-colors duration-200"
              >
                Careers
              </Link>
              <Link
                href="/blog"
                className="hover:text-teal-400 transition-colors duration-200"
              >
                Blog
              </Link>
              <div className="flex items-center space-x-3 ml-4">
                <Link
                  href="https://linkedin.com"
                  className="hover:text-teal-400 transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
                <Link
                  href="https://twitter.com"
                  className="hover:text-teal-400 transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION BAR - Always fixed */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100"
            : "bg-white shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Image
                  src="/images/ICONH.jpg"
                  alt="Icon"
                  width={45}
                  height={30}
                  className="rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <div className="relative">
                <Image
                  src="/images/QUORE.png"
                  alt="Quore Logo"
                  width={120}
                  height={45}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Home */}
              <Link
                href="/"
                className="relative text-gray-700 hover:text-teal-600 font-bold text-sm tracking-wide transition-all duration-300 group"
              >
                HOME
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </Link>

              {/* About */}
              <Link
                href="/About-us"
                className="relative text-gray-700 hover:text-teal-600 font-bold text-sm tracking-wide transition-all duration-300 group"
              >
                ABOUT
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <Link
                  href="https://www.quoreb2b.com/service"
                  className="flex items-center text-gray-700 hover:text-teal-600 font-bold text-sm tracking-wide transition-all duration-300"
                >
                  SERVICES
                  <ChevronDownIcon className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" />
                </Link>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 w-[800px] max-w-4xl">
                    <div className="grid grid-cols-3 gap-4">
                      {services.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.link}
                          className="group/item block"
                        >
                          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-teal-50 hover:to-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                            <div
                              className="h-32 bg-cover bg-center relative"
                              style={{
                                backgroundImage: ` url(${item.image}) `,
                              }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                              <div className="absolute bottom-3 left-3 right-3">
                                <span className="text-white text-sm font-medium bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                                  {item.name}
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Solutions Dropdown */}
              <div className="relative group">
                <div className="flex items-center text-gray-700 hover:text-teal-600 font-bold text-sm tracking-wide transition-all duration-300 cursor-pointer">
                  SOLUTIONS
                  <ChevronDownIcon className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" />
                </div>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 w-[600px]">
                    <div className="grid grid-cols-2 gap-4">
                      {solutions.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.link}
                          className="group/item block"
                        >
                          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-teal-50 hover:to-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                            <div
                              className="h-32 bg-cover bg-center relative"
                              style={{ backgroundImage:` url(${item.image})` }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                              <div className="absolute bottom-3 left-3 right-3">
                                <span className="text-white text-sm font-medium bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                                  {item.name}
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* B2B Knowledge Base Dropdown */}
             
 <div className="relative group">
                <div className="flex items-center text-gray-700 hover:text-teal-600 font-bold text-sm tracking-wide transition-all duration-300 cursor-pointer">
                  B2B KNOWLEDGE BASE
                  <ChevronDownIcon className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" />
                </div>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 w-[600px]">
                    <div className="grid grid-cols-2 gap-4">
                      {knowledgebase.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.link}
                          className="group/item block"
                        >
                          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-teal-50 hover:to-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                            <div
                              className="h-32 bg-cover bg-center relative"
                              style={{ backgroundImage: `url(${item.image})` }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                              <div className="absolute bottom-3 left-3 right-3">
                                <span className="text-white text-sm font-medium bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                                  {item.name}
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Contact */}
              <Link
                href="/contact"
                className="relative text-gray-700 hover:text-teal-600 font-bold text-sm tracking-wide transition-all duration-300 group"
              >
                CONTACT
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </Link>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="bg-gradient-to-r from-[#d9eb72] to-[#00D4A4] text-white px-6 py-2.5 rounded-full font-medium text-sm hover:from-teal-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6 text-gray-700" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-4 space-y-2 border-t border-gray-100 mt-4">
              <Link
                href="/"
                className="block px-4 py-3 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-lg font-bold transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                HOME
              </Link>

              <Link
                href="/About-us"
                className="block px-4 py-3 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-lg font-bold transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT
              </Link>

              {/* Mobile Services */}
              <div className="space-y-2">
                <div
                  className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-lg font-bold cursor-pointer transition-all duration-200"
                  onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
                >
                  <span>SERVICES</span>
                  <ChevronDownIcon
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileServiceOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileServiceOpen
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="ml-4 space-y-1 border-l-2 border-teal-100 pl-4">
                    {services.map((service, i) => (
                      <Link
                        key={i}
                        href={service.link}
                        className="block py-2 text-sm text-gray-600 hover:text-teal-600 transition-colors duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Solutions */}
              <div className="space-y-2">
                <div
                  className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-lg font-bold cursor-pointer transition-all duration-200"
                  onClick={() => setMobileSolutionOpen(!mobileSolutionOpen)}
                >
                  <span>SOLUTIONS</span>
                  <ChevronDownIcon
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileSolutionOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileSolutionOpen
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="ml-4 space-y-1 border-l-2 border-teal-100 pl-4">
                    {solutions.map((solution, i) => (
                      <Link
                        key={i}
                        href={solution.link}
                        className="block py-2 text-sm text-gray-600 hover:text-teal-600 transition-colors duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {solution.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {/* B2B Knowledge Base Dropdown for Mobile */}
              <div className="space-y-2">
                <div
                  className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-lg font-bold cursor-pointer transition-all duration-200"
                  onClick={() => setMobileB2BOpen(!mobileB2BOpen)}
                >
                  <span>B2B KNOWLEDGE BASE</span>
                  <ChevronDownIcon
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileB2BOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileB2BOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="ml-4 space-y-1 border-l-2 border-teal-100 pl-4">
                    <Link
                      href="/whitepaper"
                      className="block py-2 text-sm text-gray-600 hover:text-teal-600 transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Whitepaper
                    </Link>
                    <Link
                      href="/blogs"
                      className="block py-2 text-sm text-gray-600 hover:text-teal-600 transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Blogs
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="block px-4 py-3 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-lg font-bold transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT
              </Link>

              {/* Mobile CTA */}
              <div className="px-4 pt-4">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-teal-600 hover:to-blue-700 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}