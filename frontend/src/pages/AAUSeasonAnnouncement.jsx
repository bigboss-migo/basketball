import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

const AAUSeasonAnnouncement = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=1920&h=600&fit=crop"
          alt="AAU Basketball Season"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <span className="inline-block bg-[#f7941d] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-3">
            Competition
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-white leading-tight">
            AAU Season Announcement
          </h1>
        </div>
      </div>

      {/* Article Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Meta */}
        <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-200">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            February 15, 2026
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            2 min read
          </span>
          <span>OHS Academy Staff</span>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p className="text-xl text-gray-600 font-medium leading-relaxed">
            OHS Academy Inc. is proud to officially announce our entry into the 2026 AAU basketball
            season. This is a milestone moment for our program and a major opportunity for our
            athletes to compete on a bigger stage.
          </p>

          <p>
            The Amateur Athletic Union (AAU) is one of the largest multi-sport organizations in the
            country, and competing in AAU basketball exposes our players to higher-level competition,
            regional tournaments, and recruiting visibility that can open real doors. For years, OHS
            Academy has been building athletes from the inside out — this season, we're putting that
            work on display.
          </p>

          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">What the Season Looks Like</h2>

          <p>
            The OHS Academy AAU program will field teams in multiple age divisions, giving athletes
            across our program the chance to compete. The season runs from spring through summer and
            includes weekend tournaments across the tri-state area, giving families a structured and
            exciting competition calendar to look forward to.
          </p>

          <p>
            Rosters will be assembled through an evaluation process led by Coach Dre, Coach Alex,
            and Coach Wells. Players will be assessed on fundamentals, coachability, effort, and
            their ability to contribute in a team environment. AAU is competitive — but it's also
            about growth, and we welcome athletes who are ready to be challenged.
          </p>

          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">Tryout Information</h2>

          <p>
            Tryout dates will be announced in the coming weeks through our website and social media
            channels. All players currently enrolled in an OHS Academy program are encouraged to
            participate in evaluations. New athletes are also welcome to try out — please contact
            us in advance so we can ensure proper age group placement.
          </p>

          <p>
            Uniforms, tournament fees, and travel logistics will be communicated to selected players
            and their families before the season begins. Our goal is to keep participation as
            accessible as possible for all families in our community.
          </p>

          <div className="bg-[#f0f4f8] border-l-4 border-[#f7941d] rounded-r-lg p-6 mt-8">
            <p className="font-semibold text-[#1e3a5f] text-lg mb-1">Stay in the loop</p>
            <p className="text-gray-600 text-sm">
              Follow OHS Academy on social media and check back here regularly for tryout dates,
              roster announcements, and tournament schedules as the season approaches.
            </p>
          </div>
        </div>

        {/* Nav */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <Link
            to="/blog/spring-registration"
            className="inline-flex items-center gap-2 text-[#1e3a5f] hover:text-[#f7941d] font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Previous: Spring Registration
          </Link>
          <Link
            to="/blog/student-athlete-achievements"
            className="inline-flex items-center gap-2 text-[#f7941d] hover:text-[#e8850f] font-semibold transition-colors"
          >
            Next: Student Athlete Achievements <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AAUSeasonAnnouncement;
