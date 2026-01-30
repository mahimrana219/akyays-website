import React, { useRef } from 'react';
import gsap from 'gsap';
import logoImage from '../assets/logo.png'

const Navbar = () => {
  const logoRef = useRef(null);

  const handleLogoHover = () => {
    if (!logoRef.current) return;
    gsap.to(logoRef.current, {
      scale: 1.1,
      duration: 0.3,
      ease: 'back.out',
    });
  };

  const handleLogoHoverEnd = () => {
    if (!logoRef.current) return;
    gsap.to(logoRef.current, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  return (
    <nav className="bg-linear-to-br from-[#FF6B6B] to-[#FF5252]  sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          ref={logoRef}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          onMouseEnter={handleLogoHover}
          onMouseLeave={handleLogoHoverEnd}
          className="flex items-center gap-2 cursor-pointer transition-transform duration-300"
        >
          <img src={logoImage} alt="Logo" className="h-8 sm:h-10" />
          <span className="text-white font-bold text-lg sm:text-xl">MyBindle</span>
        </div>

      
      </div>
    </nav>
  );
};

export default Navbar;