const PageHero = ({ title, subtitle }) => {
  return (
    <div className="relative bg-[#1e3a5f] overflow-hidden">
      {/* Diagonal Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f] via-[#1e3a5f] to-transparent z-10" />
        <div 
          className="absolute right-0 top-0 w-3/4 h-full opacity-20"
          style={{
            background: 'repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)'
          }}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-gray-300 max-w-2xl">
            {subtitle}
          </p>
        )}
        {/* Orange/Yellow underline accent */}
        <div className="flex gap-1 mt-6">
          <div className="w-16 h-1 bg-[#f7941d]" />
          <div className="w-8 h-1 bg-[#ffd700]" />
        </div>
      </div>
    </div>
  );
};

export default PageHero;
