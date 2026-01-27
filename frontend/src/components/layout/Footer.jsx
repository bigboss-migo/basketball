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
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img 
                  src="https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/c0a60adf-7f95-4898-1495-907e67bd9700/public" 
                  alt="OHS Academy Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-sm">OUR HOUSE</h3>
                <h4 className="font-bold text-sm text-[#f7941d]">SPORTS</h4>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              A Non-profit organization aiding student athletes of inner city communities along their academic and athletic endeavors.
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
                <span>Queens Village, NY</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Phone className="w-4 h-4 flex-shrink-0 text-[#f7941d]" />
                <span>848-900-3361 (Coach Jon)</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Mail className="w-4 h-4 flex-shrink-0 text-[#f7941d]" />
                <span>Ourhousesportstraining@gmail.com</span>
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
              <a href="https://www.instagram.com/p/DQtngTOkYR_/?img_index=1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#f7941d] transition-colors">
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
            © {new Date().getFullYear()} OHS Academy Inc. All rights reserved.
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
