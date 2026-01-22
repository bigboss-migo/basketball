import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import PageHero from '../components/ui/PageHero';

const About = () => {
  const visionItems = [
    {
      icon: '🎓',
      title: 'Provide world-class youth soccer educational experience',
      points: ['on and off the field', 'to players, staff and parents']
    },
    {
      icon: '🏟️',
      title: 'In state-of-the-art facilities',
      points: ['on the field: outdoor and indoor', 'in classrooms', 'that also serve as a community meeting place']
    },
    {
      icon: '💰',
      title: 'Funded sufficiently',
      points: ['to be accessible and affordable to all']
    }
  ];

  const corePrinciples = [
    {
      title: 'Put the best interests of the players first by emphasizing individual long-term development.',
      points: [
        'We provide healthy balanced competition that supports the developmental goals of each player at their own pace, while instilling a passion for the game that inspires them to work hard and reach beyond their own expectations.',
        'We seek to develop technically skilled, confident and creative players who are adaptable to the future demands of the game.'
      ]
    },
    {
      title: 'Provide the proper environment to learn important life-skills through the sport of soccer.',
      points: [
        'We foster a respect for the game of soccer and each player by promoting friendship, integrity and good sportsmanship in a fun, caring and supportive way.',
        'We work in partnership with our parents and volunteers in an atmosphere of mutual respect, trust, and open communication.',
        'We work in partnership with other soccer organizations to promote and develop a life-long love of soccer within and beyond our local community.'
      ]
    },
    {
      title: 'Inclusion of all members of our community.',
      points: [
        'We provide an opportunity for all the children and families in our community, regardless of their financial resources or athletic ability to achieve their soccer goals.'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section with Video */}
      <section className="relative bg-[#1e3a5f] overflow-hidden">
        {/* Diagonal Pattern */}
        <div className="absolute inset-0">
          <div 
            className="absolute right-0 top-0 w-3/4 h-full opacity-20"
            style={{
              background: 'repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)'
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video Embed */}
            <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=450&fit=crop"
                alt="DUSC Soccer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                  <Play className="w-10 h-10 text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white font-semibold">Together | We Are DUSC</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
                WE ARE<br />DUSC
              </h1>
              <div className="flex gap-1 mb-6">
                <div className="w-16 h-1 bg-[#f7941d]" />
                <div className="w-8 h-1 bg-[#ffd700]" />
              </div>
              <p className="text-gray-300 leading-relaxed">
                Downtown United Soccer Club (DUSC) is the most comprehensive soccer club in NYC. 
                Serving approximately 5,000 participants annually in Downtown Manhattan and the 
                greater NYC area, DUSC offers programs for players of all ages, genders and backgrounds. 
                Whether starting out in our mini ballers Classes (Beginning at Age 3), or participating 
                in our highly competitive U23 Men&apos;s or Women&apos;s teams, our professional staff offer 
                programs for all stages of development and interest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Club Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">Club Mission</h2>
          <div className="flex justify-center gap-1 mb-8">
            <div className="w-12 h-1 bg-[#f7941d]" />
            <div className="w-6 h-1 bg-[#ffd700]" />
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Downtown United Soccer Club, Inc. is organized as a 501c(3) not for profit entity to educate, 
            train and inspire youth soccer players of all ages and abilities in a positive, respectful, 
            supportive environment. To foster a community that reflects the diversity of New York City 
            in which children can develop a lifelong love for the beautiful game and realize their full 
            potential as both players and people.
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
                    src={`https://images.unsplash.com/photo-${index === 0 ? '1604651684573-05470013b3b9' : index === 1 ? '1629977007371-0ba395424741' : '1604652716188-e226685e94ca'}?w=400&h=300&fit=crop`}
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
            Shared by our Players, Volunteers, Coaching Staff, Administration and Board
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

      {/* CTA Section */}
      <section className="py-16 bg-[#1e3a5f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to Join Our Community?
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
              Meet Our Staff
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
