import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '@/components/ui/PageHero';
import XsAndOsPattern from '@/components/ui/XsAndOsPattern';
import { staffMembers } from '@/data/mockData';

const StaffBoard = () => {
  const staffSections = [
    {
      id: 'coach-Jon',
      title: 'Coach Jon',
      subtitle: 'The Ref, The Coach, The Teacher',
      description: 'Coach Dre has been a referee working in the community for over two decades. Originally influenced by elder leaders within the community, Coach Pete & Coach Darnell, he took it upon himself to pick up where they left off. He oversaw the CYO Program in SSJA and provided kids with ample opportunities.',
      image: 'https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/99c80321-c88a-4f3d-4814-5e998dedc700/public'
    },
    {
      id: 'coach-alex',
      title: 'Coach Alex',
      subtitle: 'Mr Swagg & Standards',
      description: 'Coach Alex has an extensive background in basketball history & training. Competing as a student athlete, he took his experience to assist and lead quality training. Yet also echoed the emphasis of education and work ethic. Former assistant coach and recruiter for Monroe Express girls basketball team.',
      image: 'https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/5ce1ba43-dc5d-47ef-fe91-de76c9a90800/public'
    },
    {
      id: 'coach-wells',
      title: 'Coach Wells',
      subtitle: 'The Guru & Lead Advisor (Mr. Road Work)',
      description: 'Through his passion for providing structured programming for inner city kids, originally met teaching in Saint Joachim & Saints Anne School of Queens Village. A dedicated coach and mentor to the students in Queens Village for over 3 decades.',
      image: 'https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/545342f0-18a7-4f6f-0628-376f08b7f100/public'
    },
    {
      id: 'the-program',
      title: 'The Program',
      subtitle: 'Our Team, Our Club, Our Goal',
      description: 'This first episode takes you behind the scenes of Four Men living within the Queens Village Community, looking to build a home and sports club to aid student athletes within the community. As former student athletes, park players, and dedicated fans of the game, we believed we can not only make an impact, but a consistent presence for the well being of our next generation.',
      image: 'https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/b1163228-26cc-423a-0693-099f15936400/public'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#1e3a5f] overflow-hidden">
        <XsAndOsPattern />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Coaches
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            OHS Academy Inc. is built on the foundation of dedicated coaches who have spent 
            decades serving the Queens Village community. Our coaching staff brings together 
            experience, passion, and a commitment to developing the next generation of 
            student athletes.
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
                  <h3 className="text-2xl font-bold text-[#1e3a5f] mb-2">{section.title}</h3>
                  <p className="text-[#f7941d] font-semibold mb-4">{section.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed">{section.description}</p>
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
            &ldquo;We believed we can not only make an impact, but a consistent presence 
            for the well being of our next generation.&rdquo;
          </blockquote>
          <cite className="text-gray-600">— OHS Academy Founders</cite>
        </div>
      </section>
    </div>
  );
};

export default StaffBoard;
