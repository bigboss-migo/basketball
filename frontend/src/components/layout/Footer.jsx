import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1e3a5f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-10 h-10">
                  <circle cx="50" cy="50" r="48" fill="#1e3a5f" stroke="#f7941d" strokeWidth="2"/>
                  <text x="50" y="38" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">DUSC</text>
                  <text x="50" y="55" textAnchor="middle" fill="white" fontSize="10">NYC</text>
                  <text x="50" y="70" textAnchor="middle" fill="#f7941d" fontSize="8">EST. 1982</text>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-sm">DOWNTOWN UNITED</h3>
                <h4 className="font-bold text-sm text-[#f7941d]">SOCCER CLUB</h4>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              The most comprehensive soccer club in NYC, serving approximately 5,000 participants annually.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-[#f7941d] text-sm transition-colors">About Us</Link></li>
              <li><Link to="/classes" className="text-gray-300 hover:text-[#f7941d] text-sm transition-colors">Classes</Link></li>
              <li><Link to="/camps" className="text-gray-300 hover:text-[#f7941d] text-sm transition-colors">Camps</Link></li>
              <li><Link to="/register" className="text-gray-300 hover:text-[#f7941d] text-sm transition-colors">Register</Link></li>
              <li><Link to="/sponsor" className="text-gray-300 hover:text-[#f7941d] text-sm transition-colors">Sponsor</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#f7941d]" />
                <span>Pier 40, 353 West Street<br />New York, NY 10014</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Phone className="w-4 h-4 flex-shrink-0 text-[#f7941d]" />
                <span>(212) 967-3872</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Mail className="w-4 h-4 flex-shrink-0 text-[#f7941d]" />
                <span>info@dusc.net</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#f7941d] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#f7941d] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#f7941d] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#f7941d] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Downtown United Soccer Club. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-[#f7941d] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#f7941d] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
