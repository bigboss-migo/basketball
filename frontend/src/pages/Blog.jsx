import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { news } from '@/data/mockData';

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-[#1e3a5f] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 mb-4">
            <div className="w-12 h-1 bg-[#f7941d]" />
            <div className="w-6 h-1 bg-[#ffd700]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Academy News</h1>
          <p className="text-gray-300 text-lg max-w-xl">
            Stay up to date with the latest announcements, achievements, and happenings from
            OHS Academy Inc.
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <Link
              key={item.id}
              to={item.slug}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="p-7">
                <span className="text-xs text-gray-400 uppercase tracking-widest font-medium flex items-center gap-1.5 mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(item.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
                <h2 className="text-xl font-bold text-[#1e3a5f] mb-3 group-hover:text-[#f7941d] transition-colors leading-snug">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{item.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Clock className="w-3.5 h-3.5" /> 2 min read
                  </span>
                  <span className="text-[#f7941d] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
