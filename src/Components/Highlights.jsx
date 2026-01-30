import React, { useEffect, useRef } from 'react';
import hero1Image from '../assets/hero1.png'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const featuresRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation
      gsap.from(imageRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // Title animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: 0.2,
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
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // Features animation - staggered
      featuresRef.current.forEach((feature, index) => {
        gsap.from(feature, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          delay: 0.4 + index * 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: '📹',
      title: 'Short Videos & Reels',
      description: 'Share engaging, bite-sized content that keeps everyone entertained.',
    },
    {
      icon: '🔔',
      title: 'Smart Notifications',
      description: 'Stay updated on what matters without the noise.',
    },
    {
      icon: '👥',
      title: 'Interest-Based Communities',
      description: 'Join groups and discussions that match your passion.',
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left - Image */}
          <div
            ref={imageRef}
            className="flex justify-center lg:justify-start order-2 lg:order-1 group"
          >
            <img
              src={hero1Image}
              alt="MyBindle Features"
              className="w-full max-w-sm lg:max-w-md object-contain drop-shadow-2xl group-hover:scale-110 group-hover:drop-shadow-3xl transition-all duration-500 group-hover:rotate-3"
            />
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            {/* Title */}
            <h2
              ref={titleRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight"
            >
              Where Every Click Sparks a Connection!
            </h2>

            {/* Description */}
            <p
              ref={descriptionRef}
              className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed"
            >
              A small act of kindness today can create a lifetime of impact for someone in need. Give from the heart and change a life!
            </p>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  ref={(el) => (featuresRef.current[index] = el)}
                  className="bg-gray-50 rounded-xl p-5 sm:p-6 hover:shadow-lg hover:bg-gray-100 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl sm:text-4xl flex-shrink-0">{feature.icon}</span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Highlights;