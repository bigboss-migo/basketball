const XsAndOsPattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg 
        className="absolute right-0 top-0 w-3/4 h-full opacity-10"
        viewBox="0 0 400 400" 
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="xo-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            {/* X */}
            <line x1="10" y1="10" x2="30" y2="30" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            <line x1="30" y1="10" x2="10" y2="30" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            
            {/* O */}
            <circle cx="60" cy="20" r="12" fill="none" stroke="white" strokeWidth="3"/>
            
            {/* X */}
            <line x1="50" y1="50" x2="70" y2="70" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            <line x1="70" y1="50" x2="50" y2="70" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            
            {/* O */}
            <circle cx="20" cy="60" r="12" fill="none" stroke="white" strokeWidth="3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#xo-pattern)" />
      </svg>
    </div>
  );
};

export default XsAndOsPattern;
