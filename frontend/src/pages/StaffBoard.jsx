import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import { staffMembers } from '../data/mockData';
import { ChevronRight } from 'lucide-react';

const StaffBoard = () => {
  const staffSections = [
    {
      id: 'directors',
      title: 'Coaching Directors',
      description: 'Our directors bring decades of youth and collegiate coaching experience to the club. Many of our Directors hold the US Soccer \'A\' license, the highest licensure offered in the US for youth coaches.',
      data: staffMembers.directors,
      link: '/staff-board/directors',
      image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&h=400&fit=crop'
    },
    {
      id: 'boys',
      title: 'Boys Coaches',
      description: 'Our coaching staff includes a healthy mix of seasoned coaches who have succeeded at the highest levels of youth soccer, as well as young coaches who show a passion for teaching and a love for the game.',
      data: staffMembers.boysCoaches,
      link: '/staff-board/boys-coaches',
      image: 'https://images.unsplash.com/photo-1604651684573-05470013b3b9?w=600&h=400&fit=crop'
    },
    {
      id: 'girls',
      title: 'Girls Coaches',
      description: 'Our coaching staff includes a healthy mix of seasoned coaches who have succeeded at the highest levels of youth soccer, as well as young coaches who show a passion for teaching and a love for the game.',
      data: staffMembers.girlsCoaches,
      link: '/staff-board/girls-coaches',
      image: 'https://images.unsplash.com/photo-1629977007371-0ba395424741?w=600&h=400&fit=crop'
    },
    {
      id: 'office',
      title: 'The Office',
      description: 'Our office staff brings unique skills and responsibilities to the largest youth soccer club in NYC. As a support system for players, parents and coaches, our staff brings many years of experience in their field of expertise.',
      data: staffMembers.officeStaff,
      link: '/staff-board/office',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop'
    },
    {
      id: 'board',
      title: 'The Board',
      description: 'Our board brings a diverse background and skill set to the club, ensuring our focus on the club\'s mission and offering support to staff and the community at large.',
      data: staffMembers.board,
      link: '/staff-board/board',
      image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&h=400&fit=crop'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#1e3a5f] overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute right-0 top-0 w-3/4 h-full opacity-20"
            style={{
              background: 'repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)'
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Staff
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Downtown United Soccer Club (DUSC) is the most comprehensive soccer club in NYC. 
            Serving approximately 5,000 participants annually, our professional staff offer 
            programs for all stages of development and interest.
          </p>
          <div className="flex gap-1 mt-6">
            <div className="w-16 h-1 bg-[#f7941d]" />
            <div className="w-8 h-1 bg-[#ffd700]" />
          </div>
        </div>
      </section>

      {/* Staff Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {staffSections.map((section, index) => (
              <div 
                key={section.id} 
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-72 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">{section.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{section.description}</p>
                  
                  {/* Preview of staff members */}
                  <div className="flex -space-x-3 mb-6">
                    {section.data.slice(0, 4).map((member) => (
                      <img
                        key={member.id}
                        src={member.image}
                        alt={member.name}
                        className="w-12 h-12 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                    {section.data.length > 4 && (
                      <div className="w-12 h-12 rounded-full border-2 border-white bg-[#1e3a5f] flex items-center justify-center text-white text-xs font-semibold">
                        +{section.data.length - 4}
                      </div>
                    )}
                  </div>

                  <button
                    className="inline-flex items-center gap-2 text-[#f7941d] hover:text-[#e8850f] font-semibold transition-colors"
                  >
                    View {section.title} <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-xl md:text-2xl text-[#1e3a5f] italic mb-4">
            "A good coach is one who helps his players maximize or discover their potential. 
            That is his principal function."
          </blockquote>
          <cite className="text-gray-600">— Marcelo Bielsa, Argentina and Chile coach</cite>
        </div>
      </section>
    </div>
  );
};

export default StaffBoard;
