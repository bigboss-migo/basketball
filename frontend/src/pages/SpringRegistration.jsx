import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

const SpringRegistration = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1920&h=600&fit=crop"
          alt="Spring Registration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <span className="inline-block bg-[#f7941d] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-3">
            Announcements
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-white leading-tight">
            OHS Academy Spring Registration Open
          </h1>
        </div>
      </div>

      {/* Article Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Meta */}
        <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-200">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            February 20, 2026
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
            Spring is here, and so is your opportunity to give your young athlete the training and
            development they deserve. OHS Academy Inc. is officially opening Spring 2026 registration
            across all of our programs — and spots are filling up fast.
          </p>

          <p>
            Whether your child is picking up a basketball for the first time or preparing to compete
            at the high school level, OHS Academy has a program designed for every stage of
            development. Our certified coaches bring decades of experience working with youth in
            Queens Village and the surrounding communities, and our commitment to both athletic and
            academic excellence sets us apart.
          </p>

          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">What's Available This Spring</h2>

          <p>
            Spring registration covers all four of our core disciplines. <strong>Basketball</strong> sessions
            are offered at beginner (ages 4–8), intermediate (ages 8–13), and advanced (ages 13–17)
            levels, held every Saturday morning at our Queens Village facility. <strong>Girls Basketball</strong>
            continues on Sunday mornings with Coach Alex leading the way. <strong>Soccer Training</strong>
            opens up for all ages and skill levels on Sunday mornings, and <strong>Track & Field</strong>
            rounds out the weekend with afternoon sessions focused on speed, endurance, and proper form.
          </p>

          <p>
            All group classes are priced at <strong>$55 per session</strong> and run in 12-week blocks.
            Private 1-on-1 training is also available at <strong>$65 per 90-minute session</strong> for
            athletes who want individualized attention and a customized development plan.
          </p>

          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">How to Register</h2>

          <p>
            Registration is handled online through our registration portal. Simply select your
            program, age group, and preferred session time. If you have questions about which
            program is right for your athlete, reach out to our team directly — we're happy to
            help you find the best fit.
          </p>

          <p>
            Spots are limited to keep class sizes small and instruction quality high. We encourage
            families to register early to avoid missing out on your preferred time slot. The Spring
            season is one of our most popular sessions of the year, and we expect programs to fill
            well ahead of the start date.
          </p>

          <div className="bg-[#f0f4f8] border-l-4 border-[#f7941d] rounded-r-lg p-6 mt-8">
            <p className="font-semibold text-[#1e3a5f] text-lg mb-1">Ready to register?</p>
            <p className="text-gray-600 text-sm">
              Head to our Registration page to secure your athlete's spot for Spring 2026. Questions?
              Contact us through the About page and our staff will get back to you promptly.
            </p>
          </div>
        </div>

        {/* Nav */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[#1e3a5f] hover:text-[#f7941d] font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to News
          </Link>
          <Link
            to="/blog/aau-season-announcement"
            className="inline-flex items-center gap-2 text-[#f7941d] hover:text-[#e8850f] font-semibold transition-colors"
          >
            Next: AAU Season Announcement <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpringRegistration;
