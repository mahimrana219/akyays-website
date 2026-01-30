import React, { useEffect, useRef } from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import footerImage from '../assets/footer.png'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // Buttons animation
      gsap.from(buttonsRef.current, {
        opacity: 0,
        y: 15,
        duration: 0.6,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // Image animation
      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        delay: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={sectionRef}
      className="bg-gradient-to-br from-[#FF6B6B] to-[#FF5252] py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 rounded-2xl sm:rounded-3xl m-4 sm:m-6 lg:m-8 relative overflow-visible"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          
          {/* Left - Content */}
          <div className="text-white">
            {/* Heading */}
            <h2
              ref={headingRef}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6"
            >
              Join the Fun – Download MyBindle Now!
            </h2>

            {/* Buttons */}
            <div
              ref={buttonsRef}
              className="flex flex-wrap gap-3 sm:gap-4"
            >
              {/* App Store Button */}
              <button className="flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-3 bg-white text-gray-900 font-semibold rounded-full hover:scale-105 hover:shadow-xl active:scale-95 transition-all duration-300 text-sm sm:text-base">
                <FaApple className="text-lg" />
                <span>App Store</span>
              </button>

              {/* Google Play Button */}
              <button className="flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-3 bg-white text-gray-900 font-semibold rounded-full hover:scale-105 hover:shadow-xl active:scale-95 transition-all duration-300 text-sm sm:text-base">
                <FaGooglePlay className="text-lg" />
                <span>Google Play</span>
              </button>
            </div>
          </div>

          {/* Right - Image (Extending Outside) */}
         <div className="flex justify-center lg:justify-end items-end -mb-12 sm:-mb-16 lg:-mb-20 relative z-10">
  <img
    ref={imageRef}
    src={footerImage}
    alt="Download MyBindle"
    className="w-full max-w-2xl sm:max-w-3xl lg:max-w-7xl object-contain drop-shadow-2xl"
  />
</div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;