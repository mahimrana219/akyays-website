import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HowToInstall = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const cardRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Card animation on step change
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          y: 20,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: 'power2.out',
        }
      );
    }
  }, [currentStep]);

  const steps = [
    {
      number: '01',
      title: 'Download',
      description: 'Open Play Store or App Store',
    },
    {
      number: '02',
      title: 'Install App',
      description: 'The app will install automatically.',
    },
    {
      number: '03',
      title: 'Thank You for Installing Our App',
      description: 'Sign up or log in to start exploring!',
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
          >
            How to Install <span className="text-[#FF6B6B]">Our App</span>
          </h2>
          <p
            ref={descriptionRef}
            className="text-base sm:text-lg text-gray-600"
          >
            Getting started is quick and easy! Follow these simple steps to install and start using MyBindle today.
          </p>
        </div>

        {/* Steps Indicator - Centered */}
        <div className="mb-16 sm:mb-20 flex justify-center">
          <div className="flex items-center gap-6 sm:gap-10">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-6 sm:gap-10">
                {/* Step Number */}
                <div
                  className={`text-2xl sm:text-3xl font-bold ${
                    index === currentStep
                      ? 'text-[#FF6B6B]'
                      : index < currentStep
                      ? 'text-[#FF6B6B]'
                      : 'text-gray-300'
                  }`}
                >
                  {step.number}
                </div>

                {/* Line */}
                {index < steps.length - 1 && (
                  <div
                    className={`w-12 sm:w-20 h-1 ${
                      index < currentStep ? 'bg-[#FF6B6B]' : 'bg-gray-300'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Card */}
        <div
          ref={cardRef}
          className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg text-center mb-8 sm:mb-10"
        >
          <div className="mb-6">
            <div className="text-5xl sm:text-6xl font-bold text-[#FF6B6B] mb-4">
              {steps[currentStep].number}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {steps[currentStep].title}
            </h3>
            <p className="text-base sm:text-lg text-gray-600">
              {steps[currentStep].description}
            </p>
          </div>
        </div>

        {/* Button - Only Show for Step 1 and 2 */}
        {currentStep < 2 && (
          <div className="flex items-center justify-center mb-8">
            <button
              ref={buttonRef}
              onClick={handleNext}
              className="px-8 sm:px-12 py-3 sm:py-4 font-bold rounded-lg text-white bg-[#FF6B6B] hover:scale-105 hover:shadow-2xl active:scale-95 transition-all duration-300 text-sm sm:text-base"
              style={{
                boxShadow: '0 8px 16px rgba(255, 107, 107, 0.3)',
              }}
            >
              Next
            </button>
          </div>
        )}

        {/* Step Counter */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-sm sm:text-base">
            Step {currentStep + 1} of {steps.length}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToInstall;