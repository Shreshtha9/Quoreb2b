'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const LogoScroll = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationId;
    let scrollPos = 0;
    let isScrolling = true;

    const scroll = () => {
      if (!isScrolling) return;
      scrollPos += 1; // Reduced speed for better user experience
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0;
      }
      scrollContainer.style.transform = `translateX(-${scrollPos}px)`;
      animationId = requestAnimationFrame(scroll);
    };

    const handleVisibilityChange = () => {
      isScrolling = !document.hidden;
      if (isScrolling) {
        animationId = requestAnimationFrame(scroll);
      } else {
        cancelAnimationFrame(animationId);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    scroll();

    return () => {
      cancelAnimationFrame(animationId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const logos = [
    { name: 'QuickBooks Logo', imageUrl: '/images/quick.jpg' },
    { name: 'OnPay Logo', imageUrl: '/images/onpay.jpg' },
    { name: 'BambooHR Logo', imageUrl: '/images/bamboo.jpg' },
    { name: 'Samsara Logo', imageUrl: '/images/samsara.jpg' },
    { name: 'Teletrac Logo', imageUrl: '/images/teletrac.jpg' },
    { name: 'Azuga Logo', imageUrl: '/images/azuga.jpg' },
  ];

  // Duplicate logos to create the continuous scroll effect
  const allLogos = [...logos, ...logos];

  return (
    <section className="w-full bg-white py-16 sm:py-20 overflow-hidden" aria-label="Client logos showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00D4A4] mb-2">Clients</h2>
          <p className="text-lg sm:text-xl text-[#00D4A4]">We cater to some renowned brands</p>
        </div>

        <div className="relative w-full overflow-hidden bg-white">
          <div
            ref={scrollRef}
            className="flex items-center whitespace-nowrap"
            style={{ width: 'fit-content' }}
            aria-live="polite"
          >
            {allLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 inline-flex flex-col items-center justify-center"
              >
                <div 
                  className="flex items-center justify-center h-20 min-w-[150px] md:min-w-[180px] rounded-full p-3 sm:p-4 bg-white"
                  role="img"
                  aria-label={logo.name}
                >
                  <Image
                    src={logo.imageUrl}
                    alt={logo.name}
                    width={140}
                    height={60}
                    className="h-full max-h-[70px] sm:max-h-[60px] object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoScroll;