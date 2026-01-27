import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '@/components/ui/PageHero';
import { sponsors } from '@/data/mockData';
import { Mail, Phone, Building2, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Sponsor = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1000);
  };

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
            Sponsor
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            One of OHS Academy's core values is providing sports training environments that are safe, 
            fun places designed to meet the developmental needs of young athletes in Queens Village and beyond.
          </p>
          <div className="flex gap-1 mt-6">
            <div className="w-16 h-1 bg-[#f7941d]" />
            <div className="w-8 h-1 bg-[#ffd700]" />
          </div>
        </div>
      </section>

      {/* About Sponsorship */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Creating access to quality sports training for inner city youth regardless of family income is a worthwhile 
            endeavor — but it is not easy. It requires organizational commitment, lots of hard work and 
            creative partnerships.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            We look to you - our OHS Academy community - to explore such collaborations. OHS Academy is seeking partners 
            who can engage with us regarding both Community Sponsorships and Corporate Social Responsibility 
            opportunities.
          </p>
          <p className="text-[#1e3a5f] font-semibold mt-6">
            If you work in or know of an organization that shares these values, please let us know. 
            Contact us at{' '}
            <a href="mailto:Ourhousesportstraining@gmail.com" className="text-[#f7941d] hover:underline">Ourhousesportstraining@gmail.com</a>
            {' '}or call{' '}
            <a href="tel:848-900-3361" className="text-[#f7941d] hover:underline">848-900-3361</a> (Coach Jon)
          </p>
        </div>
      </section>

      {/* Lead Sponsors */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1e3a5f] text-center mb-12">Our Lead Sponsors</h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {sponsors.lead.map((sponsor) => (
              <div 
                key={sponsor.id} 
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-16 object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Sponsors */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1e3a5f] text-center mb-12">Community Sponsors</h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {sponsors.community.map((sponsor) => (
              <div 
                key={sponsor.id} 
                className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-2">Get In Touch</h3>
              <p className="text-gray-600 mb-6">
                If you work in or know of an organization that shares these values, please let us know. Contact us!
              </p>

              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-[#1e3a5f] mb-2">Message Sent!</h4>
                  <p className="text-gray-600">We&apos;ll get back to you as soon as possible.</p>
                  <Button 
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', company: '', message: '' });
                    }}
                    className="mt-4 bg-[#f7941d] hover:bg-[#e8850f]"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="name" className="text-gray-700">Your name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-700">Your email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-gray-700">Name of Company or Organization</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      placeholder="Enter company name"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700">Your message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Enter your message"
                      rows={4}
                      className="mt-1"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-[#f7941d] hover:bg-[#e8850f] text-white font-semibold py-3"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2 justify-center">
                        <Send className="w-5 h-5" />
                        Send
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Image */}
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop"
                alt="Youth basketball"
                className="w-full h-[500px] object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1e3a5f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Make a Direct Donation
          </h2>
          <p className="text-gray-300 mb-8">
            Your donation helps provide sports training opportunities for inner city youth regardless of their financial situation.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#f7941d] hover:bg-[#e8850f] text-white font-semibold px-8 py-4 rounded transition-colors"
          >
            Donate Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Sponsor;
