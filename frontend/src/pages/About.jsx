import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import XsAndOsPattern from '@/components/ui/XsAndOsPattern';

const About = () => {
  const visionItems = [
    {
      icon: '🎓',
      title: 'Provide quality youth sports education',
      points: ['on and off the court/field', 'to student athletes, staff and families']
    },
    {
      icon: '🏟️',
      title: 'In accessible community facilities',
      points: ['indoor and outdoor training spaces', 'serving Queens Village and beyond', 'a home for young athletes']
    },
    {
      icon: '💰',
      title: 'Affordable programming',
      points: ['accessible to inner city communities', 'supporting multicultural families']
    }
  ];

  const corePrinciples = [
    {
      title: 'Prepare student athletes for success beyond sports.',
      points: [
        'We prepare our students to think beyond just being pro athletes but successful professional people.',
        'We emphasize education and work ethic alongside athletic development.',
        'We help students develop leadership, discipline, and life skills through sports.'
      ]
    },
    {
      title: 'Build a consistent presence in our community.',
      points: [
        'As former student athletes, park players, and dedicated fans of the game, we believe we can make a lasting impact.',
        'We work in partnership with families to support both academic and athletic endeavors.',
        'We extend our efforts to connect with different communities within the 5 boroughs.'
      ]
    },
    {
      title: 'Give back locally and focus on fundamentals.',
      points: [
        'Based out of Queens Village, NY, we intend to keep giving back to our local community.',
        'We focus our foundation on teaching and aiding the fundamentals of each sport.'
      ]
    }
  ];

  const photoGrid = [
    'https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/c020b5cd-306d-47f1-1915-d73cc8e96a00/public',
    'https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/ade055bd-2dc0-43af-05ea-31945734d300/public',
    'https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/9d007dad-c9af-40b1-3a92-63e5a75cbc00/public',
    'https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/99f642b6-8ae9-4cb8-ef84-876e78d73400/public',
    'https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/243cd5c6-0a7c-4bab-eb94-b2f89319f800/public',
    'https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/e61243a7-b83b-4f1b-87cd-f03347c24500/public'
  ];

  return (
    <div>
      {/* Hero Section with Video */}
      <section className="relative bg-[#1e3a5f] overflow-hidden">
        {/* Diagonal Pattern */}
        <XsAndOsPattern />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video Embed */}
            <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=450&fit=crop"
                alt="OHS Academy Basketball"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                  <Play className="w-10 h-10 text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white font-semibold">Our Team, Our Club, Our Goal</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
                WE ARE<br />OHS ACADEMY
              </h1>
              <div className="flex gap-1 mb-6">
                <div className="w-16 h-1 bg-[#f7941d]" />
                <div className="w-8 h-1 bg-[#ffd700]" />
              </div>
              <p className="text-gray-300 leading-relaxed">
                This first episode takes you behind the scenes of Four Men living within the Queens 
                Village Community, looking to build a home and sports club to aid student athletes 
                within the community. As former student athletes, park players, and dedicated fans 
                of the game, we believed we can not only make an impact, but a consistent presence 
                for the well being of our next generation. Est. post pandemic in 2021, we have hosted 
                multiple events, participated in local and out of state competitions, and have had 
                the honor to extend our efforts with different communities within the 5 boroughs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Club Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">Academy Mission</h2>
          <div className="flex justify-center gap-1 mb-8">
            <div className="w-12 h-1 bg-[#f7941d]" />
            <div className="w-6 h-1 bg-[#ffd700]" />
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            OHS Academy Inc. is a Non-profit organization which follows its mission: "Our Team, Our Club, 
            Our Goal" — an objective towards aiding student athletes of inner city communities and families 
            from multicultural backgrounds along their academic and athletic endeavors. We prepare our 
            students to think beyond just being pro athletes but successful professional people. While 
            the inception was based out of Queens Village, NY, we intend to keep giving back locally and 
            focus our foundation on teaching and aiding the fundamentals.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] text-center mb-12">Vision</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {visionItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-[#1e3a5f] flex items-center justify-center">
                  <img
                    src={`https://images.unsplash.com/photo-${index === 0 ? '1546519638-68e109498ffc' : index === 1 ? '1574623452334-1e0ac2b3ccb4' : '1571019614242-c5c5dee9f50b'}?w=400&h=300&fit=crop`}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-70"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1e3a5f] mb-3">
                    {item.title}
                  </h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    {item.points.map((point, i) => (
                      <li key={i}>—{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] text-center mb-4">Core Principles</h2>
          <p className="text-center text-gray-500 italic mb-12">
            Shared by our Coaches, Student Athletes, Volunteers, and Families
          </p>

          <div className="space-y-10">
            {corePrinciples.map((principle, index) => (
              <div key={index} className="border-l-4 border-[#f7941d] pl-6">
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">
                  {principle.title}
                </h3>
                <ul className="space-y-3">
                  {principle.points.map((point, i) => (
                    <li key={i} className="text-gray-600 leading-relaxed flex gap-2">
                      <span className="text-[#f7941d] flex-shrink-0">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] text-center mb-12">Our Academy in Action</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photoGrid.map((photo, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-lg shadow-lg group">
                <img
                  src={photo}
                  alt={`OHS Academy moment ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1e3a5f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to Join Our Academy?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="inline-flex items-center justify-center gap-2 bg-[#f7941d] hover:bg-[#e8850f] text-white font-semibold px-8 py-4 rounded transition-colors"
            >
              Register Now
            </Link>
            <Link
              to="/staff-board"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#1e3a5f] font-semibold px-8 py-4 rounded transition-colors"
            >
              Meet Our Coaches
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
