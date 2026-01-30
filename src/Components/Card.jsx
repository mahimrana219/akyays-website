import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Card = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // Subtitle animation
      gsap.from(subtitleRef.current, {
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

      // Cards animation - staggered
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          y: 40,
          duration: 0.6,
          delay: 0.1 * index,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: '🔥',
      title: 'Seamless Connections',
      description: 'Stay in touch with friends, family, and like-minded people with just a tap.',
    },
    {
      icon: '📸',
      title: 'Share Your Story',
      description: 'Upload photos, videos, and updates to let the world know what\'s happening in your life.',
    },
    {
      icon: '💬',
      title: 'Real-Time Chat',
      description: 'Whether it\'s a DM or a group conversation, connect instantly with smooth, lightning-fast messaging.',
    },
    {
      icon: '🔒',
      title: 'Privacy First',
      description: 'Your data, your control. We prioritize your privacy with world-class security.',
    },
    {
      icon: '🌍',
      title: 'Discover & Explore',
      description: 'Find trending content, join communities, and follow pages that match your interests.',
    },
    {
      icon: '🏢',
      title: 'Grow Your Business',
      description: 'Use our platform to market your brand, connect with customers, and build meaningful relationships.',
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
          >
            Features That Keep You Hooked!
          </h2>
          <p
            ref={subtitleRef}
            className="text-lg sm:text-xl text-gray-600"
          >
            Meet, Chat, Share – Anytime, Anywhere!
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl sm:text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;