import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import { registrationPrograms } from '../data/mockData';
import { Clock, MapPin, DollarSign, Users, Calendar, Filter, Search } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Button } from '../components/ui/button';

const Register = () => {
  const [ageFilter, setAgeFilter] = useState('all');
  const [genderFilter, setGenderFilter] = useState('all');

  // Filter programs based on selected filters
  const filteredPrograms = useMemo(() => {
    return registrationPrograms.filter((program) => {
      // Age filter
      if (ageFilter !== 'all') {
        const [minAge, maxAge] = program.ageRange.split('-').map(Number);
        const selectedAge = parseInt(ageFilter);
        if (selectedAge < minAge || selectedAge > maxAge) {
          return false;
        }
      }

      // Gender filter
      if (genderFilter !== 'all') {
        if (genderFilter === 'boys' && program.gender === 'girls') return false;
        if (genderFilter === 'girls' && program.gender === 'boys') return false;
      }

      return true;
    });
  }, [ageFilter, genderFilter]);

  const clearFilters = () => {
    setAgeFilter('all');
    setGenderFilter('all');
  };

  const ageOptions = [
    { value: 'all', label: 'All Ages' },
    { value: '3', label: '3 years' },
    { value: '4', label: '4 years' },
    { value: '5', label: '5 years' },
    { value: '6', label: '6 years' },
    { value: '7', label: '7 years' },
    { value: '8', label: '8 years' },
    { value: '9', label: '9 years' },
    { value: '10', label: '10 years' },
    { value: '11', label: '11 years' },
    { value: '12', label: '12 years' },
    { value: '13', label: '13 years' },
    { value: '14', label: '14 years' },
  ];

  const genderOptions = [
    { value: 'all', label: 'All Genders' },
    { value: 'coed', label: 'Co-ed' },
    { value: 'boys', label: 'Boys Only' },
    { value: 'girls', label: 'Girls Only' },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'class': return 'bg-blue-100 text-blue-800';
      case 'camp': return 'bg-green-100 text-green-800';
      case 'travel': return 'bg-purple-100 text-purple-800';
      case 'league': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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
            All Registrations
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Downtown United Soccer Club, Inc. is organized as a 501c(3) not for profit entity to educate, 
            train and inspire youth soccer players of all ages and abilities in a positive, respectful, 
            supportive environment.
          </p>
          <div className="flex gap-1 mt-6">
            <div className="w-16 h-1 bg-[#f7941d]" />
            <div className="w-8 h-1 bg-[#ffd700]" />
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-100 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-[#1e3a5f] font-semibold">
              <Filter className="w-5 h-5" />
              <span>Filter by:</span>
            </div>
            
            {/* Age Filter */}
            <div className="w-48">
              <Select value={ageFilter} onValueChange={setAgeFilter}>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Select Age" />
                </SelectTrigger>
                <SelectContent>
                  {ageOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Gender Filter */}
            <div className="w-48">
              <Select value={genderFilter} onValueChange={setGenderFilter}>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Select Gender" />
                </SelectTrigger>
                <SelectContent>
                  {genderOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Clear Filters */}
            {(ageFilter !== 'all' || genderFilter !== 'all') && (
              <Button 
                variant="outline" 
                onClick={clearFilters}
                className="text-[#1e3a5f] border-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white"
              >
                Clear Filters
              </Button>
            )}

            {/* Results Count */}
            <div className="ml-auto text-gray-600">
              <span className="font-semibold text-[#1e3a5f]">{filteredPrograms.length}</span> programs found
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPrograms.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPrograms.map((program) => (
                <div 
                  key={program.id} 
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  <div className="bg-[#1e3a5f] text-white p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-lg pr-2">{program.name}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full capitalize ${getTypeColor(program.type)}`}>
                        {program.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3 text-gray-600">
                        <Users className="w-4 h-4 text-[#f7941d] flex-shrink-0" />
                        <span>Ages {program.ageRange}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <Calendar className="w-4 h-4 text-[#f7941d] flex-shrink-0" />
                        <span>{program.dates}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <DollarSign className="w-4 h-4 text-[#f7941d] flex-shrink-0" />
                        <span className="font-semibold text-[#1e3a5f]">{program.price}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${
                          program.gender === 'coed' ? 'bg-blue-500' : 
                          program.gender === 'boys' ? 'bg-green-500' : 'bg-pink-500'
                        }`} />
                        <span className="text-gray-600 capitalize">
                          {program.gender === 'coed' ? 'Co-ed' : program.gender + ' Only'}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex justify-between items-center">
                        <span className={`text-sm ${
                          program.spotsLeft <= 5 ? 'text-red-600 font-semibold' : 'text-gray-500'
                        }`}>
                          {program.spotsLeft} spots left
                        </span>
                        <button
                          className="bg-[#f7941d] hover:bg-[#e8850f] text-white font-semibold px-4 py-2 rounded text-sm transition-colors"
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No programs found</h3>
              <p className="text-gray-500 mb-4">
                Try adjusting your filters to find available programs.
              </p>
              <Button onClick={clearFilters} className="bg-[#f7941d] hover:bg-[#e8850f]">
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-xl md:text-2xl text-[#1e3a5f] italic mb-4">
            "A good coach is one who helps his players maximize or discover their potential. 
            That is his principal function."
          </blockquote>
          <cite className="text-gray-600">— Marcelo Bielsa, Argentina and Chile coach</cite>
        </div>
      </section>
    </div>
  );
};

export default Register;
