"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavigationLink {
  name: string;
  href: string;
}

interface Industry {
  name: string;
  href: string;
}

const Navigation = () => {
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const industries: Industry[] = [
    { name: 'Construction & Contractors', href: '/industries/construction' },
    { name: 'Restaurants & Food Service', href: '/industries/restaurants' },
    { name: 'Healthcare & Medical', href: '/industries/healthcare' },
    { name: 'Retail & E-commerce', href: '/industries/retail' },
    { name: 'Professional Services', href: '/industries/professional-services' },
    { name: 'Real Estate', href: '/industries/real-estate' },
    { name: 'Fitness & Wellness', href: '/industries/fitness' },
    { name: 'Non-Profit Organizations', href: '/industries/nonprofit' },
    { name: 'Startups & Tech', href: '/industries/startups' },
  ];

  const navigationLinks: NavigationLink[] = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md border-b border-purple-500/20 shadow-lg shadow-purple-500/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <Image 
                  src="/images/empower-logo.png" 
                  alt="Empower - New Ideas" 
                  width={64}
                  height={64}
                  className="h-18 w-18"
                />
              </Link>
            </div>

            {/* Desktop Navigation - Right Aligned */}
            <div className="flex items-center space-x-8">
              {navigationLinks.map((link: NavigationLink) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
              
              {/* Industries Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIndustriesOpen(!industriesOpen)}
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-300 flex items-center relative group"
                >
                  Industries
                  <svg className={`ml-1 h-4 w-4 transition-transform duration-200 ${industriesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </button>
                
                {industriesOpen && (
                  <div className="absolute right-0 mt-2 w-72 bg-black/95 backdrop-blur-md rounded-lg shadow-xl border border-purple-500/20 ring-1 ring-cyan-500/10">
                    <div className="py-2">
                      <Link
                        href="/industries"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-purple-500/10 font-medium border-b border-purple-500/20 transition-colors duration-200"
                      >
                        View All Industries
                      </Link>
                      {industries.map((industry: Industry) => (
                        <Link
                          key={industry.name}
                          href={industry.href}
                          className="block px-4 py-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-purple-500/10 transition-colors duration-200"
                        >
                          {industry.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* CTA Button - Right Aligned */}
              <Link
                href="/contact"
                className="relative px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 group overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-80 group-hover:opacity-100 rounded-lg"></span>
                <span className="absolute inset-0.5 bg-black rounded-lg group-hover:bg-transparent transition-all duration-300"></span>
                <span className="relative text-cyan-400 group-hover:text-black font-semibold">Contact Us</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Click outside to close dropdown */}
        {industriesOpen && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIndustriesOpen(false)}
          />
        )}
      </nav>
  );
};

export default Navigation;