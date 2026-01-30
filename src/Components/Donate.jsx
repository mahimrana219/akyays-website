import React, { useEffect, useRef } from 'react';
import hero2Image from '../assets/hero2.png'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Donate = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // Description animation
      gsap.from(descriptionRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // Button animation
      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // Image entrance animation
      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // Continuous subtle zoom animation for image
      gsap.to(imageRef.current, {
        scale: 1.05,
        duration: 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    });

    return () => ctx.revert();
  }, []);

  const handleButtonHover = () => {
    if (!buttonRef.current) return;
    gsap.to(buttonRef.current, {
      scale: 1.1,
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
      duration: 0.3,
      ease: 'back.out',
    });
  };

  const handleButtonHoverEnd = () => {
    if (!buttonRef.current) return;
    gsap.to(buttonRef.current, {
      scale: 1,
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <section
        ref={sectionRef}
        className="bg-linear-to-br from-[#FF6B6B] to-[#FF5252] flex items-center py-12 sm:py-16 lg:py-20 px-6 sm:px-8 lg:px-12 overflow-hidden rounded-3xl sm:rounded-4xl"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left - Content */}
            <div className="text-white">
              {/* Heading */}
              <h2
                ref={headingRef}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 sm:mb-8"
              >
                Be the Reason Someone Smiles Today!
              </h2>

              {/* Description */}
              <p
                ref={descriptionRef}
                className="text-base sm:text-lg md:text-xl text-white/95 mb-8 sm:mb-10 leading-relaxed"
              >
                Your generosity can change lives every donation brings hope, support, and a brighter future. Give today and make a difference!
              </p>

              {/* Button */}
              <button
                ref={buttonRef}
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonHoverEnd}
                className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-[#FF6B6B] font-bold rounded-lg transition-all duration-300 text-sm sm:text-base cursor-pointer"
                style={{
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                }}
              >
                Donate Now
              </button>
            </div>

            {/* Right - Image with continuous zoom animation */}
            <div className="flex justify-center lg:justify-end items-center">
              <img
                ref={imageRef}
                src={hero2Image}
                alt="Be the Reason Someone Smiles"
                className="w-full max-w-2xl lg:max-w-5xl object-contain  mt-7"
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;