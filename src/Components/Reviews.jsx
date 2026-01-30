import React, { useEffect, useRef } from 'react';
import { FaStar } from 'react-icons/fa';
import profile1 from '../assets/Profile1.jpg'
import profile2 from '../assets/profile2.jpg'
import profile3 from '../assets/profile3.jpg'
import profile4 from '../assets/profile4.jpg'
import profile5 from '../assets/profile5.jpg'
import profile6 from '../assets/profile6.jpg'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Reviews = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
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

  const reviews = [
    {
      rating: 5,
      text: 'This platform changed the way I stay in touch with my friends and family. The interface is smooth, and I love how easy it is to share my moments!',
      name: 'Emily R',
      country: 'USA',
      image: profile1,
    },
    {
      rating: 5,
      text: 'Finally, a social network that understands what I need! The privacy features are a game-changer, and I feel safer sharing my life online',
      name: 'Amit K',
      country: 'India',
      image: profile2,
    },
    {
      rating: 5,
      text: 'I joined just to explore, but now I can\'t imagine my day without it. The real-time chat and engaging communities make every interaction special!',
      name: 'Sophie M',
      country: 'UK',
      image: profile3,
    },
    {
      rating: 5,
      text: 'Running my small business has never been easier! This platform helped me connect with customers, promote my products, and grow my brand',
      name: 'Javier L',
      country: 'Spain',
      image: profile4,
    },
    {
      rating: 5,
      text: 'The perfect blend of fun and functionality! Whether I want to go live, discover trending content, or just catch up with friends, everything is right here!',
      name: 'Lucas T',
      country: 'Brazil',
      image: profile5,
    },
    {
      rating: 5,
      text: 'I\'ve tried many social platforms, but this one truly stands out! The experience feels personal, the connections feel real, and every feature just makes sense',
      name: 'Nora S',
      country: 'Canada',
      image: profile6,
    },
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400 text-lg sm:text-xl" />
        ))}
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 pb-4 border-b-4 border-[#FF6B6B] inline-block"
          >
            What Our Users Say
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 border-4 border-[#FF6B6B] rounded-3xl p-6 sm:p-8 lg:p-10">
          {reviews.map((review, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Stars */}
              <div className="mb-4">
                {renderStars(review.rating)}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                {review.text}
              </p>

              {/* User Info */}
              <div className="flex items-center gap-3">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                    {review.name}
                  </h4>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    {review.country}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;