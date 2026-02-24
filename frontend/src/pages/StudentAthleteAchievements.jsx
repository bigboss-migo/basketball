import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

const StudentAthleteAchievements = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1920&h=600&fit=crop"
          alt="Student Athlete Achievements"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <span className="inline-block bg-[#f7941d] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-3">
            Community
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-white leading-tight">
            Student Athlete Achievements
          </h1>
        </div>
      </div>

      {/* Article Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Meta */}
        <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-200">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            February 1, 2026
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
            At OHS Academy Inc., winning games is only part of the story. The bigger victory happens
            in the classroom, in the community, and in the character our young athletes develop every
            single day. This season, we have a lot to celebrate.
          </p>

          <p>
            From Queens Village to schools and courts across the borough, OHS Academy athletes have
            been showing up and standing out. We want to take a moment to recognize the hard work
            these young men and women put in — not just as athletes, but as students and members of
            their communities.
          </p>

          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">On the Court & on the Track</h2>

          <p>
            Several of our basketball players earned spots on their school varsity squads this
            season, a testament to the skill development and discipline they've built training with
            our coaching staff. On the track, OHS Academy athletes posted strong results at local
            invitational meets, with multiple athletes achieving personal bests in sprint and
            distance events.
          </p>

          <p>
            Our girls basketball program continues to be a source of pride. Players have grown
            significantly in confidence, ball-handling, and leadership — qualities that are showing
            up both in games and in life. Coach Alex noted that this group has one of the strongest
            team cultures he's seen in years of coaching.
          </p>

          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">Beyond the Game</h2>

          <p>
            OHS Academy has always said it — we're not just building athletes, we're building
            professional people. This season is proof of that. Multiple athletes maintained honor
            roll status while balancing training schedules, tournaments, and family commitments.
            Several older athletes have begun exploring college programs, with coaches and staff
            helping guide them through the recruitment process.
          </p>

          <p>
            We also saw a number of our athletes step up as mentors to younger kids in the program.
            Watching a 16-year-old coach a 7-year-old through a drill — patiently and
            encouragingly — is the OHS Academy mission in action.
          </p>

          <div className="bg-[#f0f4f8] border-l-4 border-[#f7941d] rounded-r-lg p-6 mt-8">
            <p className="font-semibold text-[#1e3a5f] text-lg mb-1">
              To every OHS Academy athlete — we see you.
            </p>
            <p className="text-gray-600 text-sm">
              Your effort, your growth, and your character represent everything this program stands
              for. We can't wait to see what you accomplish next.
            </p>
          </div>
        </div>

        {/* Nav */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <Link
            to="/blog/aau-season-announcement"
            className="inline-flex items-center gap-2 text-[#1e3a5f] hover:text-[#f7941d] font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Previous: AAU Season Announcement
          </Link>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[#f7941d] hover:text-[#e8850f] font-semibold transition-colors"
          >
            Back to All News
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudentAthleteAchievements;
