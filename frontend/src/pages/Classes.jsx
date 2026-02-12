import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '@/components/ui/PageHero';
import { classes } from '@/data/mockData';
import { Clock, MapPin, DollarSign, Users, ChevronDown, ChevronUp } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Classes = () => {
  const classOfferings = [
    {
      title: 'Beginner Classes (Ages 4-8)',
      description: 'This coed program is designed to teach fundamental sports skills in a positive environment with the use of creative and fun-based games. We want players to become skilled in the basics while working on their coordination and athletic development. We will help your young athlete build confidence, leadership and social skills while emphasizing teamwork!',
      image: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=400&h=300&fit=crop'
    },
    {
      title: 'Intermediate Classes (Ages 8-13)',
      description: 'Intermediate classes focus on building upon fundamental skills while introducing more advanced techniques. Topics include: ball handling, shooting form, defensive positioning, and game strategy.',
      details: ['Dynamic warm up', 'Skill development drills', 'Topic of the week', 'Scrimmages and game situations'],
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop'
    },
    {
      title: 'Advanced Classes (Ages 13-17)',
      description: 'These classes focus on advanced player development, preparing student athletes for competitive play and beyond.',
      specializations: [
        { name: 'Basketball Training', desc: 'Advanced ball handling, shooting techniques, court vision, and competitive game preparation.' },
        { name: 'Soccer Training', desc: 'Technical skills, tactical awareness, positioning, and match preparation.' },
        { name: 'Track & Field', desc: 'Speed development, endurance training, proper form and technique for various events.' }
      ],
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop'
    },
    {
      title: 'Private 1-on-1 Training',
      description: 'Personalized training sessions tailored to your athlete\'s specific needs and goals. Work directly with our experienced coaches for focused skill development.',
      details: [
        'Level: All skill levels welcome',
        'Duration: 90 minute sessions',
        'Price: $55 per student per session',
        'Customized training plan',
        'Flexible scheduling available'
      ],
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=300&fit=crop'
    }
  ];

  const faqs = [
    {
      question: 'Who are Classes suitable for?',
      answer: 'Classes are suitable for beginner, intermediate and advanced levels for both boys and girls ages 4-17. We offer programs in Basketball, Soccer, and Track & Field.'
    },
    {
      question: 'Is previous sports experience required?',
      answer: 'No. Our classes are designed to cater for all levels of experience. Players may be grouped based on ability and age.'
    },
    {
      question: 'What sports do you offer?',
      answer: 'We offer Basketball (with 4 annual group sessions: Fall/Winter/Spring/Summer AAU), Soccer, and Track & Field training.'
    },
    {
      question: 'What is the cost for group training?',
      answer: 'Group Training Sessions are $45 per student for a 12-week program.'
    },
    {
      question: 'Do you offer private training?',
      answer: 'Yes! Private 1-on-1 Training is available at $55 per student for 90-minute sessions.'
    },
    {
      question: 'How do I contact the academy?',
      answer: 'You can reach us by phone at 848-900-3361 (Coach Jon) or email at Ourhousesportstraining@gmail.com.'
    },
    {
      question: 'Where are you located?',
      answer: 'OHS Academy Inc. is based out of Queens Village, NY. We serve the local community and the greater 5 boroughs area.'
    }
  ];

  const photoGrid = [
    'https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/e1cc8e7c-9f67-490d-8445-3d14a9fe2f00/public',
    'https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/826cb8ac-1d32-4bd7-c4f7-2e40e52bbb00/public',
    'https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/1edafb0c-5242-4edd-e354-8cbc45f77100/public',
    'https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/405aa20c-d567-4742-93c2-90977d214b00/public',
    'https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/94a0bdd0-521a-4758-b6c6-fefcc87fdb00/public',
    'https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/a41c87ca-764c-4b9c-be7f-0aa662955800/public'
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
            Classes
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Are you just starting out and want to learn new skills? Are you a seasoned athlete 
            looking for repetition and refining your skills? Good news! For both types of athletes, 
            our Classes are a great way to participate at OHS Academy.
          </p>
          <p className="text-gray-300 mt-4 max-w-3xl">
            Classes are designed to improve a player&apos;s fundamental sports skills in a small group 
            environment. All classes are taught by our experienced coaching staff with decades of 
            community involvement.
          </p>
          <div className="flex gap-1 mt-6">
            <div className="w-16 h-1 bg-[#f7941d]" />
            <div className="w-8 h-1 bg-[#ffd700]" />
          </div>
          <Link
            to="/register"
            className="mt-8 inline-flex items-center gap-2 bg-[#f7941d] hover:bg-[#e8850f] text-white font-semibold px-8 py-4 rounded transition-colors"
          >
            Register For Classes
          </Link>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1e3a5f] text-center mb-4">Offerings</h2>
          <p className="text-center text-gray-600 mb-12">Select your skill level below to read more about our class offerings!</p>

          <div className="grid md:grid-cols-2 gap-8">
            {classOfferings.map((offering, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 p-6 border-b border-gray-100">
                  <div className="w-16 h-16 rounded-full bg-[#1e3a5f] flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 100 100" className="w-12 h-12">
                      <circle cx="50" cy="50" r="48" fill="#1e3a5f" stroke="#f7941d" strokeWidth="2"/>
                      <text x="50" y="38" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">OHS</text>
                      <text x="50" y="55" textAnchor="middle" fill="white" fontSize="9">ACADEMY</text>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a5f]">{offering.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{offering.description}</p>
                  {offering.details && (
                    <ul className="space-y-2 mb-4">
                      {offering.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                          <span className="w-2 h-2 bg-[#f7941d] rounded-full"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                  {offering.specializations && (
                    <div className="space-y-3">
                      {offering.specializations.map((spec, i) => (
                        <div key={i} className="bg-gray-50 p-3 rounded">
                          <h4 className="font-semibold text-[#1e3a5f] mb-1">{spec.name}</h4>
                          <p className="text-sm text-gray-600">{spec.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1e3a5f] text-center mb-4">Register</h2>
          <p className="text-center text-gray-600 mb-12">Browse our available classes and register today!</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((cls) => (
              <div key={cls.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-[#1e3a5f] text-white p-4">
                  <h3 className="font-bold text-lg">{cls.name}</h3>
                  <p className="text-sm text-gray-300">Ages {cls.ageRange}</p>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-4">{cls.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4 text-[#f7941d]" />
                      {cls.schedule}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4 text-[#f7941d]" />
                      {cls.location}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <DollarSign className="w-4 h-4 text-[#f7941d]" />
                      {cls.price}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-4 h-4 text-[#f7941d]" />
                      {cls.gender === 'coed' ? 'Co-ed' : 'Girls Only'}
                    </div>
                  </div>
                  <Link
                    to="/register"
                    className="mt-4 w-full inline-flex items-center justify-center bg-[#f7941d] hover:bg-[#e8850f] text-white font-semibold py-2 rounded transition-colors"
                  >
                    Register Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1e3a5f] text-center mb-12">Training in Action</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photoGrid.map((photo, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-lg shadow-lg group">
                <img
                  src={photo}
                  alt={`OHS Academy training ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1e3a5f] text-center mb-4">FAQs</h2>
          <p className="text-center text-gray-500 italic mb-8">Common questions about our programs</p>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm border border-gray-200">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-[#1e3a5f] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default Classes;
