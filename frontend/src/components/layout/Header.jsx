import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const navItems = [
    {
      label: 'ABOUT US',
      path: '/about',
      dropdown: [
        { label: 'About Us', path: '/about' },
        { label: 'Staff + Board', path: '/staff-board' }
      ]
    },
    {
      label: 'PROGRAMS',
      path: '/classes',
      dropdown: [
        { label: 'Classes', path: '/classes' },
        { label: 'Camps', path: '/camps' }
      ]
    },
    {
      label: 'REGISTER',
      path: '/register',
      highlight: true
    },
    {
      label: 'DONATE',
      path: '/sponsor',
      dropdown: [
        { label: 'Sponsor', path: '/sponsor' }
      ]
    }
  ];

  const handleDropdownEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-2 gap-4">
            <div className="flex items-center gap-1 text-[#1e3a5f]">
              <svg viewBox="0 0 60 30" className="h-6 w-12">
                <text x="5" y="20" fontSize="10" fontWeight="bold" fill="#00205b">MLS</text>
                <text x="32" y="20" fontSize="8" fill="#00205b">NEXT</text>
              </svg>
            </div>
            <div className="flex items-center">
              <svg viewBox="0 0 40 40" className="h-7 w-7">
                <circle cx="20" cy="20" r="18" fill="none" stroke="#002868" strokeWidth="2"/>
                <path d="M12 15 L20 10 L28 15 L28 25 L20 30 L12 25 Z" fill="#bf0a30"/>
                <circle cx="20" cy="20" r="5" fill="white"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-[#1e3a5f] flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 100 100" className="w-12 h-12">
                <circle cx="50" cy="50" r="48" fill="#1e3a5f" stroke="#f7941d" strokeWidth="2"/>
                <text x="50" y="38" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">DUSC</text>
                <text x="50" y="55" textAnchor="middle" fill="white" fontSize="10">NYC</text>
                <text x="50" y="70" textAnchor="middle" fill="#f7941d" fontSize="8">EST. 1982</text>
              </svg>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-[#1e3a5f] font-bold text-lg leading-tight">DOWNTOWN UNITED</h1>
              <h2 className="text-[#f7941d] font-bold text-lg leading-tight">SOCCER CLUB</h2>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && handleDropdownEnter(index)}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  to={item.path}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold tracking-wide transition-colors ${
                    item.highlight
                      ? 'text-[#f7941d] hover:text-[#e8850f]'
                      : location.pathname === item.path || (item.dropdown && item.dropdown.some(d => d.path === location.pathname))
                      ? 'text-[#1e3a5f]'
                      : 'text-gray-700 hover:text-[#1e3a5f]'
                  }`}
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                {item.dropdown && activeDropdown === index && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 border border-gray-100 z-50">
                    {item.dropdown.map((dropItem) => (
                      <Link
                        key={dropItem.path}
                        to={dropItem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1e3a5f] transition-colors"
                      >
                        {dropItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <nav className="max-w-7xl mx-auto px-4 py-4">
            {navItems.map((item) => (
              <div key={item.label} className="py-2">
                <Link
                  to={item.path}
                  className={`block py-2 text-sm font-semibold ${
                    item.highlight ? 'text-[#f7941d]' : 'text-gray-700'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="pl-4">
                    {item.dropdown.map((dropItem) => (
                      <Link
                        key={dropItem.path}
                        to={dropItem.path}
                        className="block py-2 text-sm text-gray-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {dropItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
