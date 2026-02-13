import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '@/components/ui/PageHero';
import XsAndOsPattern from '@/components/ui/XsAndOsPattern';
import { camps } from '@/data/mockData';
import { MapPin, Users, DollarSign, Calendar } from 'lucide-react';

const Camps = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#1e3a5f] overflow-hidden">
        <XsAndOsPattern />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Camps
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Join us for a sports camp experience full of fun, fitness and friendship. Our camps 
            offer intensive training in Basketball, Soccer, and Track & Field for boys and girls 
            ages 4-17.
          </p>
          <p className="text-gray-300 mt-4 max-w-3xl">
            OHS Academy camps provide student athletes with quality instruction from our experienced 
            coaching staff. We facilitate a love for sports through a combination of skill work, 
            conditioning, and game situations in a positive and supportive environment.
          </p>
          <div className="flex gap-1 mt-6">
            <div className="w-16 h-1 bg-[#f7941d]" />
            <div className="w-8 h-1 bg-[#ffd700]" />
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 bg-[#f7941d] hover:bg-[#e8850f] text-white font-semibold px-8 py-4 rounded transition-colors"
            >
              Register for a Camp
            </Link>
            <a
              href="#camps"
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#1e3a5f] font-semibold px-8 py-4 rounded transition-colors"
            >
              Find your Camp
            </a>
          </div>
        </div>
      </section>

      {/* All Sports Camps */}
      <section id="camps" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1e3a5f] text-center mb-12">All Sports Camps</h2>

          <div className="space-y-12">
            {camps.map((camp, index) => (
              <div 
                key={camp.id} 
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <img
                    src={camp.image}
                    alt={camp.name}
                    className="w-full h-80 object-cover rounded-lg shadow-xl"
                  />
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <h3 className="text-2xl font-bold text-[#1e3a5f] mb-2">{camp.name}</h3>
                  <div className="flex items-center gap-2 text-gray-500 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{camp.location}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">{camp.description}</p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded">
                      <Users className="w-4 h-4 text-[#f7941d]" />
                      <span className="text-sm">Ages {camp.ageRange}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded">
                      <DollarSign className="w-4 h-4 text-[#f7941d]" />
                      <span className="text-sm">{camp.price}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded">
                      <Calendar className="w-4 h-4 text-[#f7941d]" />
                      <span className="text-sm capitalize">{camp.gender}</span>
                    </div>
                  </div>

                  <Link
                    to="/register"
                    className="inline-flex items-center gap-2 bg-[#1e3a5f] hover:bg-[#2d4a6f] text-white font-semibold px-6 py-3 rounded transition-colors"
                  >
                    Explore {camp.name.split(' ')[0]} Camps
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Camp Registrations CTA */}
      <section className="py-16 bg-[#1e3a5f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Camp Registrations</h2>
          <p className="text-gray-300 mb-8">
            Ready to join us for an unforgettable sports experience? Register now to secure your spot!
          </p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 bg-[#f7941d] hover:bg-[#e8850f] text-white font-semibold px-8 py-4 rounded transition-colors"
          >
            View All Camp Registrations
          </Link>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-xl md:text-2xl text-[#1e3a5f] italic mb-4">
            &ldquo;We believed we can not only make an impact, but a consistent presence 
            for the well being of our next generation.&rdquo;
          </blockquote>
          <cite className="text-gray-600">— OHS Academy Founders</cite>
        </div>
      </section>
    </div>
  );
};

export default Camps;
