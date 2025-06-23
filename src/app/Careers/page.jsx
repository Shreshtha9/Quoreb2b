// pages/careers.js or app/careers/page.js (depending on your Next.js version)
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";

const CareerPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    resumeLink: "",
    linkedinProfile: "",
    interest: "",
    experience: "",
  });
  const [isVisible, setIsVisible] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[id^="animate-"]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const jobPositions = [
    {
      id: 1,
      title: "Lead Generation Executive",
      location: "India, Pune",
      icon: "🎯",
      gradient: "from-purple-400 via-pink-500 to-red-500",
      description:
        "We are looking for a highly motivated and results-driven Lead Generation Executive to join our team. The ideal candidate will have a minimum of 6 months' experience in lead generation and possess excellent interpersonal communication skills. In this role, you will be responsible for identifying potential leads, building strong relationships with prospective clients, and driving new business opportunities. Your ability to engage with prospects and effectively communicate the value of our products/services will be key to achieving success in this position. If you are passionate about lead generation and are eager to contribute to the growth of a dynamic team, we would love to hear from you.",
      responsibilities: [
        "Lead Generation Executive",
        "Lead Generation",
        "Interpersonal Communication",
        "Hiring Lead Generation Executive with minimum 6 months experience in lead generation",
        "Making cold calls to International (US) Prospects and pitching IT products/services",
        "Should know how to do contact discovery/research",
        "Retrieving Business Contact Information through variety of search engines (LinkedIn, Zoom Info, Hoovers, etc.",
      ],
      requirements: [
        "Experience: 6 months to 5 Years in B2B Lead Generation",
        "Must Possess Excellent communication skills",
        "Qualification: 12th / Graduate",
        "Ability to work independently and as part of a team",
      ],
    },
    {
      id: 2,
      title: "Data Analyst - B2B Lead Generation",
      location: "India, Pune",
      icon: "📊",
      gradient: "from-blue-400 via-purple-500 to-indigo-600",
      description:
        "This role involves utilizing data analysis skills to identify and qualify potential B2B leads, optimize lead generation strategies, and provide data-driven insights to the sales and marketing teams.",
      responsibilities: [
        "Data Collection and Analysis",
        "Gather and analyze data from various sources, including CRM systems, marketing automation platforms, and external databases",
        "Clean, preprocess, and validate data to ensure accuracy and consistency",
        "Identify patterns, trends, and opportunities within the data to inform lead generation efforts",
        "Develop and maintain databases and dashboards to track lead generation metrics and key performance indicators (KPIs)",
      ],
      requirements: [
        "Experience: 6 months to 5 Years in B2B Lead Generation",
        "Must Possess Excellent communication skills",
        "Qualification: 12th / Graduate",
        "Ability to work independently and as part of a team",
      ],
    },
  ];

  const companyValues = [
    {
      icon: "⭐",
      title: "Excellence",
      description: "Do what it takes to deliver excellent results",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: "💡",
      title: "Innovation",
      description:
        "Bring a proactive, solution-oriented attitude to everything you do",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: "🤝",
      title: "Integrity",
      description: "Act with integrity and respect",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: "📢",
      title: "Communication",
      description: "Communicate directly and honestly",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: "✅",
      title: "Accountability",
      description: "Do what you say you are going to do",
      color: "from-red-400 to-rose-500",
    },
    {
      icon: "📈",
      title: "Growth",
      description: "Always learn and try new things",
      color: "from-indigo-400 to-purple-500",
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitSuccess(false);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "d2de4773-7e69-47b5-976c-50267c31532a",
          ...formData,
          position: selectedJob?.title || "General Application",
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          resumeLink: "",
          linkedinProfile: "",
          interest: "",
          experience: "",
        });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        alert(
          "There was an error submitting your application. Please try again."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      alert(
        "There was an error submitting your application. Please try again."
      );
    }
  };

  const scrollToForm = () => {
    document.getElementById("application-form").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <Head>
        <title>
          Join Our Team - QuoreB2B Careers 
        </title>
        <meta
          name="description"
          content="Join QuoreB2B's dynamic team! We're hiring Lead Generation Executives and Data Analysts in Pune, India. Competitive benefits, great culture, and growth opportunities."
        />
        <meta
          name="keywords"
          content="QuoreB2B careers, lead generation jobs, data analyst jobs, Pune jobs, B2B careers"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourwebsite.com/careers" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section
          className="relative bg-cover  sm:h-[200px] md:h-[400px] lg:h-[650px] bg-no-repeat"
          style={{ backgroundImage: "url('/images/careers.jpg')" }}
        >
             
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white px-4 max-w-4xl">
              <div className="mb-8">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-white bg-clip-text text-transparent">
                  Join Our Team!
                </h1>
                <p className="text-xl md:text-2xl text-white mb-8 font-light">
                  Build your career with passionate innovators
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={scrollToForm}
                  className="group relative px-8 py-4  text-white rounded-full bg-gradient-to-r from-lime-300 to-emerald-400  font-semibold text-lg  transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <span className="relative z-10">Apply Now</span>
                </button>

                <button
                  onClick={() =>
                    document
                      .getElementById("open-positions")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="px-8 py-4   text-white rounded-full bg-gradient-to-r from-lime-300 to-emerald-400 font-semibold text-lg   transform transition-all duration-300 hover:scale-105"
                >
                  View Positions
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Work with Great People Section */}
        <section className="py-20 px-4 max-w-7xl bg-white mx-auto">
          <h2 className="text-4xl text-center font-bold text-teal-400 mb-6 animate-slide-up">
            Work with Great People
          </h2>
          <p className="text-black text-xl max-w-3xl mx-auto text-center leading-relaxed">
            We have a diverse team of hard-working and fun-loving individuals
            who are passionate about innovation and excellence.
          </p>

          <div className="grid lg:grid-cols-3 mt-4 gap-8 mb-20">
            {/* Benefits Card */}
            <div className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 relative transform hover:-translate-y-2 hover:rotate-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/careers1.webp"
                  alt="Benefits - Woman working with tablet"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl">
                    💼
                  </div>
                </div>
              </div>
              <div className="p-8 relative">
                <h3 className="text-3xl font-bold text-gray-800 mb-6 group-hover:text-blue-600 transition-colors">
                  Benefits
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  At QuoreB2B, we believe in taking care of our team. Our
                  comprehensive benefits package includes competitive salaries,
                  health insurance, retirement plans, flexible work
                  arrangements, and professional development opportunities. We
                  also offer wellness programs, paid time off, and
                  company-sponsored events to ensure our employees maintain a
                  healthy work-life balance.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Health Insurance",
                    "Flexible Work",
                    "Professional Development",
                  ].map((benefit, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Culture Card */}
            <div className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 relative transform hover:-translate-y-2 hover:-rotate-1">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/careers2.jpg"
                  alt="Culture - Team members collaborating"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl">
                    🎨
                  </div>
                </div>
              </div>
              <div className="p-8 relative">
                <h3 className="text-3xl font-bold text-gray-800 mb-6 group-hover:text-purple-600 transition-colors">
                  Culture
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our culture at QuoreB2B is built on collaboration, innovation,
                  and mutual respect. We foster an environment where diverse
                  perspectives are valued, ideas are freely shared, and everyone
                  feels empowered to contribute. Regular team-building
                  activities, open communication channels, and a commitment to
                  work-life balance create a positive atmosphere where employees
                  can thrive while delivering excellent results for our clients.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Innovation", "Collaboration", "Diversity"].map(
                    (culture, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                      >
                        {culture}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Awards Card */}
            <div className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 relative transform hover:-translate-y-2 hover:rotate-1">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/careers3.jpg"
                  alt="Awards - Team celebrating success"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl">
                    🏆
                  </div>
                </div>
              </div>
              <div className="p-8 relative">
                <h3 className="text-3xl font-bold text-gray-800 mb-6 group-hover:text-orange-600 transition-colors">
                  Awards
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  QuoreB2B has been recognized for excellence in the B2B space
                  through various industry awards and accolades. Our innovative
                  approach to client solutions, commitment to quality service,
                  and dedication to ethical business practices have earned us
                  recognition from leading industry organizations. These awards
                  reflect our team's hard work and our company's unwavering
                  commitment to exceeding client expectations.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Industry Recognition",
                    "Quality Service",
                    "Innovation Awards",
                  ].map((award, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium"
                    >
                      {award}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section
          id="open-positions"
          className="py-20 px-4 bg-white max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center text-black mb-6 animate-slide-up">
            Open Positions
          </h2>
          <p className="text-gray-600 text-xl text-center max-w-3xl mx-auto">
            Join our growing team and make an impact in the B2B space
          </p>

          <div className="space-y-8">
            {jobPositions.map((job, index) => (
              <div
                key={job.id}
                className={`group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 ${
                  isVisible[`animate-job-${job.id}`]
                    ? "animate-bounce-in"
                    : "opacity-0"
                }`}
                id={`animate-job-${job.id}`}
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex items-center mb-4 lg:mb-0">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${job.gradient} rounded-2xl flex items-center justify-center text-white text-3xl mr-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {job.icon}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-2">
                          {job.title}
                        </h3>
                        <p className="text-red-500 flex items-center text-lg">
                          <span className="mr-2">📍</span>
                          {job.location}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        setSelectedJob(selectedJob?.id === job.id ? null : job)
                      }
                      className={`px-8 py-3 bg-gradient-to-r from-lime-300 to-emerald-400 text-white rounded-full font-semibold text-lg hover:shadow-lg transform transition-all duration-300 hover:scale-105 relative overflow-hidden group`}
                    >
                      <span className="relative z-10">
                        {selectedJob?.id === job.id
                          ? "Hide Details"
                          : "View Details"}
                      </span>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </button>
                  </div>

                  {selectedJob?.id === job.id && (
                    <div className="mt-8 p-8 bg-white/90 backdrop-blur-sm rounded-2xl border-l-4 border-teal-400 animate-slide-up">
                      <div className="mb-8">
                        <h4 className="text-3xl font-bold text-teal-400 mb-6">
                          {job.title}
                        </h4>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          {job.description}
                        </p>
                      </div>

                      <div className="grid lg:grid-cols-2 gap-12">
                        <div className="space-y-4">
                          <h5 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                            <span className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white mr-3">
                              ✓
                            </span>
                            Responsibilities
                          </h5>
                          <div className="space-y-3">
                            {job.responsibilities.map((resp, index) => (
                              <div
                                key={index}
                                className="flex items-start group"
                              >
                                <span className="text-green-500 mr-3 mt-1 group-hover:scale-125 transition-transform">
                                  •
                                </span>
                                <span className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                                  {resp}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h5 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                            <span className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white mr-3">
                              ⚡
                            </span>
                            Requirements
                          </h5>
                          <div className="space-y-3">
                            {job.requirements.map((req, index) => (
                              <div
                                key={index}
                                className="flex items-start group"
                              >
                                <span className="text-purple-500 mr-3 mt-1 group-hover:scale-125 transition-transform">
                                  •
                                </span>
                                <span className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                                  {req}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-10 text-center">
                        <button
                          onClick={() => {
                            setSelectedJob(job);
                            scrollToForm();
                          }}
                          className={`px-10 py-4 bg-gradient-to-r from-lime-300 to-emerald-400 text-white rounded-full font-semibold text-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105 relative overflow-hidden group`}
                        >
                          <span className="relative z-10">
                            Apply for This Position
                          </span>
                          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Company Values Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-black mb-6 animate-slide-up">
              Our Values
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              At quoreb2b.com, we embrace six core values that guide our
              decisions and actions when dealing with clients, coworkers,
              service providers, and the community.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {companyValues.map((value, index) => (
                <div
                  key={index}
                  className={`group text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden ${
                    isVisible[`animate-value-${index}`]
                      ? "animate-bounce-in"
                      : "opacity-0"
                  }`}
                  id={`animate-value-${index}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 text-3xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                    >
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section
          id="application-form"
          className="py-20 px-4 bg-white relative overflow-hidden"
        >
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-200">
              <div className="text-center mb-12">
                <h2 className="text-xl md:text-4xl font-bold text-teal-400 mb-6 animate-slide-up">
                  Apply Now
                </h2>
                <p className="text-gray-600 text-lg">
                  Start your journey with us today
                </p>
              </div>

              {selectedJob && (
                <div className="mb-6 p-4 bg-green-50 border-l-4 border-teal-400 rounded">
                  <p className="text-teal-400">
                    <strong>Applying for:</strong> {selectedJob.title}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <input
                  type="hidden"
                  name="access_key"
                  value="d2de4773-7e69-47b5-976c-50267c31532a"
                />

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="form-field">
                    <label className="block text-gray-800 font-semibold mb-3 text-lg">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-gray-800 placeholder-gray-400 hover:bg-gray-100"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-field">
                    <label className="block text-gray-800 font-semibold mb-3 text-lg">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-gray-800 placeholder-gray-400 hover:bg-gray-100"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="form-field">
                    <label className="block text-gray-800 font-semibold mb-3 text-lg">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-gray-800 placeholder-gray-400 hover:bg-gray-100"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div className="form-field">
                    <label className="block text-gray-800 font-semibold mb-3 text-lg">
                      Resume Link
                    </label>
                    <input
                      type="url"
                      name="resumeLink"
                      value={formData.resumeLink}
                      onChange={handleInputChange}
                      placeholder="Google Drive or Dropbox link"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-gray-800 placeholder-gray-400 hover:bg-gray-100"
                    />
                    <p className="text-gray-500 text-sm mt-2">
                      Share your resume via cloud storage link
                    </p>
                  </div>
                </div>

                <div className="form-field">
                  <label className="block text-gray-800 font-semibold mb-3 text-lg">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    name="linkedinProfile"
                    value={formData.linkedinProfile}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-gray-800 placeholder-gray-400 hover:bg-gray-100"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>

                <div className="form-field">
                  <label className="block text-gray-800 font-semibold mb-3 text-lg">
                    Why are you interested in this position?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-gray-800 placeholder-gray-400 hover:bg-gray-100 resize-vertical"
                    placeholder="Tell us what excites you about this opportunity..."
                  ></textarea>
                </div>

                <div className="form-field">
                  <label className="block text-gray-800 font-semibold mb-3 text-lg">
                    Relevant Experience <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-gray-800 placeholder-gray-400 hover:bg-gray-100 resize-vertical"
                    placeholder="Describe your relevant experience and skills..."
                  ></textarea>
                </div>

                <div className="text-center pt-8">
                  <button
                    type="submit"
                    className="group relative px-12 py-5 bg-gradient-to-r from-lime-300 to-emerald-400 text-white rounded-full font-bold text-xl hover:from-lime-300 hover:to-emerald-400 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <span className="mr-3">🚀</span>
                      Submit Application
                      <span className="ml-3">✨</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </button>

                  {submitSuccess && (
                    <div className="mt-4 animate-slide-up">
                      <p className="text-green-600 font-medium">
                        Application submitted successfully!
                      </p>
                    </div>
                  )}

                  <p className="text-gray-500 text-sm mt-6">
                    We'll get back to you within 24-48 hours
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareerPage;
