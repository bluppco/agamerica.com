import React, { useState } from 'react';

// IMPORT ASTRO ATOMS
import PrimaryButton from "@/atoms/atoms-shiva/button/primary/index.astro"

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isContentHovered, setIsContentHovered] = useState(false);

  const handleMouseEnterNav = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeaveNav = () => {
    if (!isContentHovered) {
      setHoveredLink(null);
    }
  };

  const handleMouseEnterContent = () => {
    setIsContentHovered(true);
  };

  const handleMouseLeaveContent = () => {
    setIsContentHovered(false);
    setHoveredLink(null);
  };

  const logoSrc = hoveredLink ? '/images/AgAmerica-logo-color.svg' : '/images/AgAmerica-logo.svg';

  return (
    <section className={`absolute w-full ${hoveredLink ? 'bg-white shadow-lg' : ''}`} onMouseLeave={handleMouseLeaveNav}>
        <div className="max-w-[1280px] mx-auto px-4 xl:px-0">
            <nav className="flex justify-between items-center bg-transparent relative z-10 py-12">
                <div className="logo">
                    <img
                        alt="logo"
                        className="object-cover h-7"
                        src={ logoSrc }
                    />
                </div>
                <div className="nav-links flex gap-8">
                    <div
                        className={`nav-link cursor-pointer py-1 ${hoveredLink === 'link1' ? 'border-b-2 border-brown' : ''}`}
                        onMouseEnter={() => handleMouseEnterNav('link1')}
                    >
                        <span className={`text-white text-sm font-semibold ${hoveredLink ? '!text-black' : ''}`}>SERVICES</span>
                    </div>
                    <div
                        className={`nav-link cursor-pointer py-1 ${hoveredLink === 'link2' ? 'border-b-2 border-brown' : ''}`}
                        onMouseEnter={() => handleMouseEnterNav('link2')}
                    >
                        <span className={`text-white text-sm font-semibold ${hoveredLink ? '!text-black' : ''}`}>WHO WE ARE</span>
                    </div>
                    <div
                        className={`nav-link cursor-pointer py-1 ${hoveredLink === 'link3' ? 'border-b-2 border-brown' : ''}`}
                        onMouseEnter={() => handleMouseEnterNav('link3')}
                    >
                        <span className={`text-white text-sm font-semibold ${hoveredLink ? '!text-black' : ''}`}>INSIGHTS</span>
                    </div>
                </div>
            </nav>
            {hoveredLink && (
                <div
                    className="absolute top-14 left-0 w-full bg-white p-4"
                    onMouseEnter={handleMouseEnterContent}
                    onMouseLeave={handleMouseLeaveContent}
                >
                    <div className="max-w-7xl mx-auto">
                        {hoveredLink === 'link1' && 
                            <div className="h-80">
                                
                            </div>}
                        {hoveredLink === 'link2' && 
                            <div className="h-80">
                                
                            </div>}
                        {hoveredLink === 'link3' && 
                            <div className="h-80">
                                
                            </div>}
                    </div>
                </div>
            )}
        </div>
    </section>
  );
};

export default Navbar;
