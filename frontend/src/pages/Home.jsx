import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { programs, news } from '@/data/mockData';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1604651684573-05470013b3b9?w=1920&h=1080&fit=crop"
            alt="Soccer team celebration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-2 tracking-tight">
                DUSC
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-4">
                EST. 1982 - NYC
              </p>
              {/* Orange/Yellow underline accent */}
              <div className="flex gap-1 mb-8">
                <div className="w-16 h-1 bg-[#f7941d]" />
                <div className="w-8 h-1 bg-[#ffd700]" />
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-[#f7941d] hover:bg-[#e8850f] text-white font-semibold px-8 py-4 rounded transition-all transform hover:scale-105"
              >
                LEARN MORE
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program) => (
              <Link
                key={program.id}
                to={program.link}
                className="group relative h-72 rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{program.title}</h3>
                  <div className="flex items-center gap-1 text-[#f7941d] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
              the most comprehensive soccer club in NYC.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Downtown United Soccer Club, Inc. is organized as a 501c(3) not for profit entity to educate, 
              train and inspire youth soccer players of all ages and abilities in a positive, respectful, 
              supportive environment. To foster a community that reflects the diversity of New York City 
              in which children can develop a lifelong love for the beautiful game and realize their full 
              potential as both players and people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 bg-[#1e3a5f] hover:bg-[#2d4a6f] text-white font-semibold px-6 py-3 rounded transition-colors"
              >
                About Our Club
              </Link>
              <Link
                to="/staff-board"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white font-semibold px-6 py-3 rounded transition-colors"
              >
                Our Dedicated Staff
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-[#1e3a5f]">Club News</h2>
            <Link
              to="#"
              className="text-[#f7941d] hover:text-[#e8850f] font-semibold flex items-center gap-1"
            >
              see more news <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.slice(0, 6).map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <h4 className="text-lg font-bold text-[#1e3a5f] mb-2 group-hover:text-[#f7941d] transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4">{item.excerpt}</p>
                <span className="text-[#f7941d] text-sm font-semibold flex items-center gap-1">
                  Read More <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find A Program Section */}
      <section className="py-20 bg-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Find A Program
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Downtown United Soccer Club (DUSC) is the most comprehensive soccer club in NYC. 
                Serving approximately 5,000 participants annually in Downtown Manhattan and the 
                greater NYC area, DUSC offers programs for players of all ages, genders and backgrounds. 
                Whether starting out in our mini ballers Classes (Beginning at Age 3), or participating 
                in our highly competitive U23 Men&apos;s or Women&apos;s teams, our professional staff offer 
                programs for all stages of development and interest.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center gap-2 bg-[#f7941d] hover:bg-[#e8850f] text-white font-semibold px-6 py-3 rounded transition-colors"
                >
                  All Registrations
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#1e3a5f] font-semibold px-6 py-3 rounded transition-colors"
                >
                  Contact DUSC
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1629977007371-0ba395424741?w=600&h=400&fit=crop"
                alt="Soccer player"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-xl md:text-2xl text-[#1e3a5f] italic mb-4">
            &ldquo;A good coach is one who helps his players maximize or discover their potential. 
            That is his principal function.&rdquo;
          </blockquote>
          <cite className="text-gray-600">— Marcelo Bielsa, Argentina and Chile coach</cite>
        </div>
      </section>
    </div>
  );
};

export default Home;
