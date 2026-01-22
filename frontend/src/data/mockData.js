// Mock data for DUSC Clone

export const programs = [
  {
    id: 1,
    title: "Academy",
    image: "https://images.unsplash.com/photo-1604651684573-05470013b3b9?w=600&h=400&fit=crop",
    link: "/programs/academy"
  },
  {
    id: 2,
    title: "Rec League",
    image: "https://images.unsplash.com/photo-1629977007371-0ba395424741?w=600&h=400&fit=crop",
    link: "/register"
  },
  {
    id: 3,
    title: "Classes",
    image: "https://images.unsplash.com/photo-1717584146940-118a65523da8?w=600&h=400&fit=crop",
    link: "/classes"
  },
  {
    id: 4,
    title: "Camps",
    image: "https://images.unsplash.com/photo-1604652716188-e226685e94ca?w=600&h=400&fit=crop",
    link: "/camps"
  }
];

export const staffMembers = {
  directors: [
    {
      id: 1,
      name: "Michael Torres",
      role: "Technical Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop",
      bio: "US Soccer 'A' License holder with 20+ years of youth coaching experience."
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Director of Player Development",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
      bio: "Former professional player, UEFA B License, specializing in youth development."
    },
    {
      id: 3,
      name: "David Kim",
      role: "Director of Coaching",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
      bio: "15 years experience coaching at collegiate and youth levels."
    }
  ],
  boysCoaches: [
    {
      id: 1,
      name: "James Wilson",
      role: "Boys U14 Head Coach",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Carlos Rodriguez",
      role: "Boys U12 Head Coach",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Ryan Chen",
      role: "Boys U10 Head Coach",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop"
    }
  ],
  girlsCoaches: [
    {
      id: 1,
      name: "Emily Martinez",
      role: "Girls U14 Head Coach",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Jessica Thompson",
      role: "Girls U12 Head Coach",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=300&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Amanda Lee",
      role: "Girls U10 Head Coach",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop"
    }
  ],
  officeStaff: [
    {
      id: 1,
      name: "Robert Anderson",
      role: "Executive Director",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=300&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Lisa Park",
      role: "Operations Manager",
      image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=300&h=300&fit=crop"
    }
  ],
  board: [
    {
      id: 1,
      name: "Thomas Wright",
      role: "Board President",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Jennifer Davis",
      role: "Vice President",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop"
    },
    {
      id: 3,
      name: "William Harris",
      role: "Treasurer",
      image: "https://images.unsplash.com/photo-1548544149-4835e62ee5b3?w=300&h=300&fit=crop"
    }
  ]
};

export const classes = [
  {
    id: 1,
    name: "Mini Ballers",
    ageRange: "3-5",
    gender: "coed",
    description: "This coed program is designed to teach fundamental soccer skills in a positive environment with the use of creative and fun-based games.",
    price: "$350",
    schedule: "Saturdays 9:00 AM - 10:00 AM",
    location: "Pier 40"
  },
  {
    id: 2,
    name: "General Classes - Beginner",
    ageRange: "5-7",
    gender: "coed",
    description: "General classes focus on fundamental skills and fun, while building a foundation of technical proficiency for future growth in the game.",
    price: "$400",
    schedule: "Saturdays 10:00 AM - 11:00 AM",
    location: "Pier 40"
  },
  {
    id: 3,
    name: "General Classes - Intermediate",
    ageRange: "8-10",
    gender: "coed",
    description: "Focus on dribbling, passing, receiving, shooting and creativity with more advanced techniques.",
    price: "$425",
    schedule: "Saturdays 11:00 AM - 12:00 PM",
    location: "Pier 40"
  },
  {
    id: 4,
    name: "General Classes - Advanced",
    ageRange: "11-14",
    gender: "coed",
    description: "Advanced technical training for experienced players looking to refine their skills.",
    price: "$450",
    schedule: "Saturdays 12:00 PM - 1:00 PM",
    location: "Pier 40"
  },
  {
    id: 5,
    name: "Girls Only Classes",
    ageRange: "7-10",
    gender: "girls",
    description: "Girls-only sessions focusing on skill development in a supportive environment.",
    price: "$400",
    schedule: "Sundays 10:00 AM - 11:00 AM",
    location: "Pier 40"
  },
  {
    id: 6,
    name: "Girls Only - Advanced",
    ageRange: "11-14",
    gender: "girls",
    description: "Advanced training for girls with competitive experience.",
    price: "$450",
    schedule: "Sundays 11:00 AM - 12:00 PM",
    location: "Pier 40"
  },
  {
    id: 7,
    name: "Goalkeeping",
    ageRange: "7-14",
    gender: "coed",
    description: "Focus on the technical aspects of today's modern goalkeeper including handling, positioning, reactions, and footwork.",
    price: "$475",
    schedule: "Sundays 1:00 PM - 2:00 PM",
    location: "Pier 40"
  },
  {
    id: 8,
    name: "Strikers Academy",
    ageRange: "7-14",
    gender: "coed",
    description: "All about scoring goals! Learn shooting techniques, 1st touch, volleys, movement, and body position.",
    price: "$475",
    schedule: "Sundays 2:00 PM - 3:00 PM",
    location: "Pier 40"
  }
];

export const camps = [
  {
    id: 1,
    name: "Pier 40 Summer Soccer Camp",
    location: "Pier 40 | Manhattan, NYC",
    ageRange: "3-13",
    gender: "coed",
    description: "12 Week full day & half day soccer camp options. Join us for a summer of fun, soccer, fitness and friendship!",
    image: "https://images.unsplash.com/photo-1604651684573-05470013b3b9?w=800&h=500&fit=crop",
    price: "Starting at $595/week"
  },
  {
    id: 2,
    name: "Advanced Player Pathway Camp",
    location: "Manhattan, NYC",
    ageRange: "6-14",
    gender: "coed",
    description: "Full day soccer camps for academy level players seeking a focused and professional environment to enhance their skills.",
    image: "https://images.unsplash.com/photo-1629977007371-0ba395424741?w=800&h=500&fit=crop",
    price: "$750/week"
  },
  {
    id: 3,
    name: "Advanced Soccer Camps - Residential",
    location: "Golden Goal Sports Park, Fort Ann, NY",
    ageRange: "9-16",
    gender: "coed",
    description: "A residential sleepaway soccer camp designed to expose players to a camp environment where they can take their game to the next level.",
    image: "https://images.unsplash.com/photo-1604652716188-e226685e94ca?w=800&h=500&fit=crop",
    price: "$1,200/week"
  },
  {
    id: 4,
    name: "School's Out Camps",
    location: "Pier 40 | Manhattan, NYC",
    ageRange: "5-12",
    gender: "coed",
    description: "Join us during your school break for more soccer and fun! Enjoy the beautiful game through skill work, coordination activities and small-sided games.",
    image: "https://images.pexels.com/photos/8941650/pexels-photo-8941650.jpeg?w=800&h=500&fit=crop",
    price: "$150/day"
  }
];

export const registrationPrograms = [
  {
    id: 1,
    name: "Mini Ballers - Fall 2025",
    type: "class",
    ageRange: "3-5",
    gender: "coed",
    price: "$350",
    dates: "Sep 7 - Nov 16, 2025",
    spotsLeft: 8
  },
  {
    id: 2,
    name: "General Classes U8 - Fall 2025",
    type: "class",
    ageRange: "5-8",
    gender: "coed",
    price: "$400",
    dates: "Sep 7 - Nov 16, 2025",
    spotsLeft: 12
  },
  {
    id: 3,
    name: "General Classes U10 - Fall 2025",
    type: "class",
    ageRange: "8-10",
    gender: "coed",
    price: "$425",
    dates: "Sep 7 - Nov 16, 2025",
    spotsLeft: 6
  },
  {
    id: 4,
    name: "General Classes U14 - Fall 2025",
    type: "class",
    ageRange: "11-14",
    gender: "coed",
    price: "$450",
    dates: "Sep 7 - Nov 16, 2025",
    spotsLeft: 10
  },
  {
    id: 5,
    name: "Girls Only U10 - Fall 2025",
    type: "class",
    ageRange: "7-10",
    gender: "girls",
    price: "$400",
    dates: "Sep 7 - Nov 16, 2025",
    spotsLeft: 15
  },
  {
    id: 6,
    name: "Girls Only U14 - Fall 2025",
    type: "class",
    ageRange: "11-14",
    gender: "girls",
    price: "$450",
    dates: "Sep 7 - Nov 16, 2025",
    spotsLeft: 9
  },
  {
    id: 7,
    name: "Summer Camp Week 1",
    type: "camp",
    ageRange: "5-13",
    gender: "coed",
    price: "$595",
    dates: "Jun 23 - Jun 27, 2025",
    spotsLeft: 20
  },
  {
    id: 8,
    name: "Summer Camp Week 2",
    type: "camp",
    ageRange: "5-13",
    gender: "coed",
    price: "$595",
    dates: "Jun 30 - Jul 4, 2025",
    spotsLeft: 18
  },
  {
    id: 9,
    name: "Boys Travel Team U12",
    type: "travel",
    ageRange: "10-12",
    gender: "boys",
    price: "$1,800",
    dates: "Sep 2025 - May 2026",
    spotsLeft: 4
  },
  {
    id: 10,
    name: "Girls Travel Team U12",
    type: "travel",
    ageRange: "10-12",
    gender: "girls",
    price: "$1,800",
    dates: "Sep 2025 - May 2026",
    spotsLeft: 5
  },
  {
    id: 11,
    name: "Rec League U6 - Fall 2025",
    type: "league",
    ageRange: "4-6",
    gender: "coed",
    price: "$325",
    dates: "Sep 7 - Nov 16, 2025",
    spotsLeft: 25
  },
  {
    id: 12,
    name: "Rec League U8 - Fall 2025",
    type: "league",
    ageRange: "6-8",
    gender: "coed",
    price: "$350",
    dates: "Sep 7 - Nov 16, 2025",
    spotsLeft: 22
  }
];

export const sponsors = {
  lead: [
    {
      id: 1,
      name: "Adidas",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/800px-Adidas_Logo.svg.png"
    },
    {
      id: 2,
      name: "Chobani",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Chobani_2017.svg/800px-Chobani_2017.svg.png"
    },
    {
      id: 3,
      name: "CIBC",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/CIBC_logo.svg/800px-CIBC_logo.svg.png"
    }
  ],
  community: [
    {
      id: 1,
      name: "Northwell Health",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Northwell_Health_logo.svg/800px-Northwell_Health_logo.svg.png"
    },
    {
      id: 2,
      name: "Kollective Auto",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop"
    }
  ]
};

export const news = [
  {
    id: 1,
    title: "Kollective Auto Group Partnership",
    excerpt: "DUSC announces exciting new partnership with Kollective Auto Group.",
    date: "2025-01-15"
  },
  {
    id: 2,
    title: "DUSC Launches the Founders Collection",
    excerpt: "New merchandise collection celebrating our club's rich history.",
    date: "2025-01-10"
  },
  {
    id: 3,
    title: "MLS NEXT & GA ID Sessions",
    excerpt: "Upcoming identification sessions for elite players.",
    date: "2025-01-05"
  },
  {
    id: 4,
    title: "DUSC Honored at HRP Luncheon",
    excerpt: "Recognition for our community impact and youth development programs.",
    date: "2024-12-20"
  },
  {
    id: 5,
    title: "Pier 40 Summer Camp 2026",
    excerpt: "Early registration now open for Summer 2026 camps.",
    date: "2024-12-15"
  },
  {
    id: 6,
    title: "Annual Report 2024/25",
    excerpt: "Review our achievements and impact over the past year.",
    date: "2024-12-01"
  }
];
