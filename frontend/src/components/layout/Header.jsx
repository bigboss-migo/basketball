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
        { label: 'Staff + Team', path: '/staff-board' }
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
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full overflow-hidden">
              <img 
                src="https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/c0a60adf-7f95-4898-1495-907e67bd9700/public" 
                alt="OHS Academy Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-[#1e3a5f] font-bold text-lg leading-tight">OUR HOUSE</h1>
              <h2 className="text-[#f7941d] font-bold text-lg leading-tight">SPORTS</h2>
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
