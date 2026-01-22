import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import { classes } from '../data/mockData';
import { Clock, MapPin, DollarSign, Users, ChevronDown, ChevronUp } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const Classes = () => {
  const classOfferings = [
    {
      title: 'Mini Ballers (Ages 3-5)',
      description: 'This coed program is designed to teach fundamental soccer skills in a positive environment with the use of creative and fun-based games. We want players to become skilled in possessing the ball, while working on their balancing skills and coordination. We will help your little one build confidence, leadership and social skills while emphasizing teamwork!',
      image: 'https://images.pexels.com/photos/8941650/pexels-photo-8941650.jpeg?w=400&h=300&fit=crop'
    },
    {
      title: 'General Classes (Ages 5-14)',
      description: 'General classes focus on fundamental skills and fun, while building a foundation of technical proficiency for future growth in the game. Topics include: dribbling, passing, receiving, shooting and creativity.',
      details: ['Dynamic warm up', 'Juggling/ball mastery', 'Topic of the week', 'Small sided games'],
      image: 'https://images.unsplash.com/photo-1604651684573-05470013b3b9?w=400&h=300&fit=crop'
    },
    {
      title: 'Specialized Classes (Ages 7-14)',
      description: 'These classes focus on individual player development, with more depth in certain aspects of the game.',
      specializations: [
        { name: 'Goalkeeping', desc: 'Focus on the technical aspects of today\'s modern goalkeeper. Topics include: handling, positioning, reactions, footwork, hand-eye coordination, confidence.' },
        { name: 'Footworx', desc: 'Players will learn how to be comfortable on the ball, create more time + options. Topics include: footwork, creativity, body positioning, first touch, vision.' },
        { name: 'Strikers', desc: 'This is all about scoring goals! Players will learn shooting techniques, 1st touch, volleys, movement, body position, support play and more.' }
      ],
      image: 'https://images.unsplash.com/photo-1629977007371-0ba395424741?w=400&h=300&fit=crop'
    },
    {
      title: 'Squads',
      description: 'Create your own class with Squads! Squads offers your child the chance to play, learn and develop with a consistent group of neighbors, classmates, friends, or teammates throughout the week.',
      details: [
        'Level: Beginner to Advanced',
        'Minimum Squad Number: 4 Players',
        'Minimum of 5 Classes per Squad Booking',
        '4 Player Squads: $55 Class per Player',
        '5-8 Player Squads: $45 Class per Player'
      ],
      image: 'https://images.unsplash.com/photo-1604652716188-e226685e94ca?w=400&h=300&fit=crop'
    }
  ];

  const faqs = [
    {
      question: 'Who are Classes suitable for?',
      answer: 'Classes are suitable for beginner, intermediate and advanced level for both co-ed and girls only classes with birth years 2000–15. We offer advanced classes with more depth in certain areas.'
    },
    {
      question: 'Is previous soccer experience required?',
      answer: 'No. Our classes are designed to cater for all levels of experience. Players may be split up based on ability.'
    },
    {
      question: 'What topics will be covered?',
      answer: 'Our professional coaching staff will follow a 10 week curriculum, including; dribbling, passing, receiving, shooting and creativity.'
    },
    {
      question: 'Do you offer girls-only classes?',
      answer: 'Yes. We offer both coed and girls-only sessions.'
    },
    {
      question: 'How long does each session last?',
      answer: 'Classes are 55 minutes.'
    },
    {
      question: 'How many players are in each group?',
      answer: 'We aim to have a ratio of 1 coach to 10 players. For our youngest classes, ratios may be lower for more individual attention as necessary.'
    },
    {
      question: 'What equipment do I need?',
      answer: 'Players should bring a ball, water and shin guards. DUSC will provide each player with a T-Shirt that they should wear every week to class.'
    }
  ];

  const sponsors = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Chobani_2017.svg/400px-Chobani_2017.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Northwell_Health_logo.svg/400px-Northwell_Health_logo.svg.png'
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
            Are you just starting out and want to learn new skills? Are you a seasoned player 
            looking for repetition and refining one's skills? Good news! For both types of players, 
            Classes are a great way to participate at DUSC.
          </p>
          <p className="text-gray-300 mt-4 max-w-3xl">
            Classes are designed to improve a player&apos;s fundamental soccer skills in a small group 
            environment. All classes are taught by our professional coaching staff teaching the &ldquo;DUSC Way&rdquo;.
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

      {/* Quick Links */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#register" className="px-6 py-2 bg-[#1e3a5f] text-white rounded hover:bg-[#2d4a6f] transition-colors">Schedule - Fall 2025</a>
            <a href="#" className="px-6 py-2 bg-white text-[#1e3a5f] border border-[#1e3a5f] rounded hover:bg-gray-50 transition-colors">Scholarship Application</a>
            <a href="#" className="px-6 py-2 bg-white text-[#1e3a5f] border border-[#1e3a5f] rounded hover:bg-gray-50 transition-colors">Resources</a>
            <a href="#faqs" className="px-6 py-2 bg-white text-[#1e3a5f] border border-[#1e3a5f] rounded hover:bg-gray-50 transition-colors">FAQs</a>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1e3a5f] text-center mb-4">Offerings</h2>
          <p className="text-center text-gray-600 mb-12">Select your skill level below to read more about our Classes offerings for this season!</p>

          <div className="grid md:grid-cols-2 gap-8">
            {classOfferings.map((offering, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 p-6 border-b border-gray-100">
                  <div className="w-16 h-16 rounded-full bg-[#1e3a5f] flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 100 100" className="w-12 h-12">
                      <circle cx="50" cy="50" r="48" fill="#1e3a5f" stroke="#f7941d" strokeWidth="2"/>
                      <text x="50" y="38" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">DUSC</text>
                      <text x="50" y="55" textAnchor="middle" fill="white" fontSize="9">NYC</text>
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

      {/* Sponsors */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1e3a5f] text-center mb-8">Sponsors</h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {sponsors.map((sponsor, index) => (
              <img
                key={index}
                src={sponsor}
                alt="Sponsor"
                className="h-12 object-contain grayscale hover:grayscale-0 transition-all"
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1e3a5f] text-center mb-4">FAQs</h2>
          <p className="text-center text-gray-500 italic mb-8">Shared by our Players, Volunteers, Coaching Staff, Administration and Board</p>

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
