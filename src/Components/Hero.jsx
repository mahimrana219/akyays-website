import React, { useEffect, useRef } from 'react';
import heroImage from '../assets/hero.png'
import logoImage from '../assets/logo.png'
import gsap from 'gsap';

const Hero = () => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const phoneRef = useRef(null);
  const textOverlayRef = useRef(null);



  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(containerRef.current, {
        opacity: 0,
        duration: 0.8,
      }, 0);

      tl.from(logoRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.6,
      }, 0.2);

      tl.from(headingRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.6,
      }, 0.4);

      tl.from(descriptionRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
      }, 0.6);

      tl.from(buttonRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
      }, 0.7);

      tl.from(phoneRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
      }, 0.5);
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-[#FF6B6B] to-[#FF5252] flex flex-col"
    >
      {/* Logo with Text - Centered at Top */}
      <div ref={logoRef} className="pt-6 sm:pt-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center gap-2 mb-12 sm:mb-16 hover:scale-110 transition-transform duration-300 cursor-pointer">
          <img src={logoImage} alt="Logo" className="h-8 sm:h-12 md:h-16" />
          <span className="text-white font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl">MyBindle</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Content - Text */}
          <div>
            {/* Headings */}
            <div ref={headingRef} className="mb-6 sm:mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-3">
                Stay Connected
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-3">
                Stay Social
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Stay You!
              </h1>
            </div>

            {/* Description */}
            <p
              ref={descriptionRef}
              className="text-sm sm:text-base md:text-lg text-white/90 mb-8 leading-relaxed max-w-xl"
            >
              A place where friendships grow, communities thrive, and moments turn into unforgettable experiences. Whether you're looking to reconnect with old friends, build new relationships, or share what matters most to you – MyBindle is your home on the internet!
            </p>

            {/* Button */}
            <button
              ref={buttonRef}
              className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-[#FF6B6B] font-bold rounded-lg text-sm sm:text-base cursor-pointer"
            >
              Get Started
            </button>
          </div>

          {/* Right - Phone Image with Text Overlay */}
          <div
            ref={phoneRef}
            className="flex justify-center lg:justify-end items-center group"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <img
                src={heroImage}
                alt="MyBindle App"
                className="w-full object-contain drop-shadow-2xl"
              />
              {/* Text Overlay */}
              <div
                ref={textOverlayRef}
                className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 bg-white rounded-lg px-4 sm:px-6 py-2 sm:py-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-0 translate-y-5"
              >
                <p className="text-[#FF6B6B] font-bold text-sm sm:text-base">
                  ⚡ Worldwide Shipping
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;