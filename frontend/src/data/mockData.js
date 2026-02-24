// Mock data for OHS Academy Inc.

export const programs = [
  {
    id: 1,
    title: "Basketball",
    image: "https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/27762157-f392-47ba-bcd4-89b7b270e900/public",
    link: "/classes"
  },
  {
    id: 2,
    title: "Soccer",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop",
    link: "/classes"
  },
  {
    id: 3,
    title: "Track & Field",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&h=400&fit=crop",
    link: "/classes"
  },
  {
    id: 4,
    title: "Camps",
    image: "https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/aa731c3a-1aea-492e-d011-5ef018a63f00/public",
    link: "/camps"
  }
];

export const staffMembers = {
  directors: [
    {
      id: 1,
      name: "Coach Jon",
      role: "The Ref, The Coach, The Teacher",
      image: "https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/ad7874bd-5dbb-4830-a09c-07af08cd5000/public",
      bio: "Coach Dre has been a referee working in the community for over two decades. He oversaw the CYO Program in SSJA and provided kids with ample opportunities."
    },
    {
      id: 2,
      name: "Coach Alex",
      role: "Mr Swagg & Standards",
      image: "https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/5ce1ba43-dc5d-47ef-fe91-de76c9a90800/public",
      bio: "Coach Alex has an extensive background in basketball history & training. Former assistant coach and recruiter for Monroe Express girls basketball team."
    },
    {
      id: 3,
      name: "Coach Wells",
      role: "The Guru & Lead Advisor",
      image: "https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/602ec76e-e227-4781-2f1e-a1fb149feb00/public",
      bio: "A dedicated coach and mentor to the students in Queens Village for over 3 decades. Originally met teaching in Saint Joachim & Saints Anne School."
    }
  ],
  boysCoaches: [
    {
      id: 1,
      name: "Coach Dre",
      role: "Basketball & Multi-Sport Coach",
      image: "https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/ad7874bd-5dbb-4830-a09c-07af08cd5000/public"
    },
    {
      id: 2,
      name: "Coach Alex",
      role: "Basketball Coach",
      image: "https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/5ce1ba43-dc5d-47ef-fe91-de76c9a90800/public"
    },
    {
      id: 3,
      name: "Coach Wells",
      role: "Track & Field Coach",
      image: "https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/602ec76e-e227-4781-2f1e-a1fb149feb00/public"
    }
  ],
  girlsCoaches: [
    {
      id: 1,
      name: "Coach Alex",
      role: "Girls Basketball Coach",
      image: "https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/5ce1ba43-dc5d-47ef-fe91-de76c9a90800/public"
    },
    {
      id: 2,
      name: "Coach Dre",
      role: "Multi-Sport Coach",
      image: "https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/ad7874bd-5dbb-4830-a09c-07af08cd5000/public"
    }
  ],
  officeStaff: [
    {
      id: 1,
      name: "Coach Jon",
      role: "Program Coordinator",
      image: "https://imagedelivery.net/qPl4NOqbLb6xIvDbtIUFUw/1d054b6a-03f4-4327-0b44-b7f47a9d0200/public"
    }
  ],
  board: []
};

export const classes = [
  {
    id: 1,
    name: "Basketball Beginner",
    ageRange: "4-8",
    gender: "coed",
    description: "Introduction to basketball fundamentals including dribbling, passing, and shooting in a fun, supportive environment.",
    price: "$55",
    schedule: "Saturdays 9:00 AM - 10:00 AM",
    location: "Queens Village, NY"
  },
  {
    id: 2,
    name: "Basketball Intermediate",
    ageRange: "8-13",
    gender: "coed",
    description: "Building on fundamentals with advanced ball handling, defensive positioning, and game strategy.",
    price: "$55",
    schedule: "Saturdays 10:00 AM - 11:00 AM",
    location: "Queens Village, NY"
  },
  {
    id: 3,
    name: "Basketball Advanced",
    ageRange: "13-17",
    gender: "coed",
    description: "Competitive-level training for serious athletes preparing for high school and AAU competition.",
    price: "$55",
    schedule: "Saturdays 11:00 AM - 12:00 PM",
    location: "Queens Village, NY"
  },
  {
    id: 4,
    name: "Soccer Training",
    ageRange: "4-17",
    gender: "coed",
    description: "Comprehensive soccer training covering technical skills, tactical awareness, and game preparation.",
    price: "$55",
    schedule: "Sundays 10:00 AM - 11:00 AM",
    location: "Queens Village, NY"
  },
  {
    id: 5,
    name: "Girls Basketball",
    ageRange: "8-17",
    gender: "girls",
    description: "Girls-focused basketball training emphasizing skill development, teamwork, and confidence building.",
    price: "$55",
    schedule: "Sundays 11:00 AM - 12:00 PM",
    location: "Queens Village, NY"
  },
  {
    id: 6,
    name: "Track & Field",
    ageRange: "8-17",
    gender: "coed",
    description: "Speed development, endurance training, and proper form and technique for various track events.",
    price: "$55",
    schedule: "Sundays 1:00 PM - 2:00 PM",
    location: "Queens Village, NY"
  },
  {
    id: 7,
    name: "Private 1-on-1 Training",
    ageRange: "4-17",
    gender: "coed",
    description: "Personalized training sessions tailored to your athlete's specific needs and goals. 90-minute sessions.",
    price: "$65",
    schedule: "Flexible Scheduling",
    location: "Queens Village, NY"
  }
];

export const camps = [
  {
    id: 1,
    name: "Summer Basketball Camp",
    location: "Queens Village, NY",
    ageRange: "4-17",
    gender: "coed",
    description: "Intensive basketball training camp featuring skill development, scrimmages, and competitive play. Join us for a summer of fun, fitness and friendship!",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=500&fit=crop",
    price: "Contact for pricing"
  },
  {
    id: 2,
    name: "Fall AAU Basketball",
    location: "Queens Village, NY",
    ageRange: "8-17",
    gender: "coed",
    description: "Fall season AAU basketball program with competitive games, tournaments, and advanced training for dedicated athletes.",
    image: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=800&h=500&fit=crop",
    price: "Contact for pricing"
  },
  {
    id: 3,
    name: "Winter Skills Camp",
    location: "Queens Village, NY",
    ageRange: "4-17",
    gender: "coed",
    description: "Winter break intensive focusing on individual skill development, ball handling, shooting form, and defensive techniques.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=500&fit=crop",
    price: "Contact for pricing"
  },
  {
    id: 4,
    name: "Spring Training Camp",
    location: "Queens Village, NY",
    ageRange: "4-17",
    gender: "coed",
    description: "Spring season training preparing athletes for summer AAU competition with conditioning, skill work, and team play.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=500&fit=crop",
    price: "Contact for pricing"
  }
];

export const registrationPrograms = [
  {
    id: 1,
    name: "Basketball Beginner - Winter 2025",
    type: "class",
    ageRange: "4-8",
    gender: "coed",
    price: "$55",
    dates: "12-Week Session",
    spotsLeft: 10
  },
  {
    id: 2,
    name: "Basketball Intermediate - Winter 2025",
    type: "class",
    ageRange: "8-13",
    gender: "coed",
    price: "$55",
    dates: "12-Week Session",
    spotsLeft: 8
  },
  {
    id: 3,
    name: "Basketball Advanced - Winter 2025",
    type: "class",
    ageRange: "13-17",
    gender: "coed",
    price: "$55",
    dates: "12-Week Session",
    spotsLeft: 6
  },
  {
    id: 4,
    name: "Soccer Training - Winter 2025",
    type: "class",
    ageRange: "4-17",
    gender: "coed",
    price: "$55",
    dates: "12-Week Session",
    spotsLeft: 12
  },
  {
    id: 5,
    name: "Girls Basketball - Winter 2025",
    type: "class",
    ageRange: "8-17",
    gender: "girls",
    price: "$55",
    dates: "12-Week Session",
    spotsLeft: 15
  },
  {
    id: 6,
    name: "Track & Field - Spring 2025",
    type: "class",
    ageRange: "8-17",
    gender: "coed",
    price: "$55",
    dates: "12-Week Session",
    spotsLeft: 20
  },
  {
    id: 7,
    name: "Summer Basketball Camp",
    type: "camp",
    ageRange: "4-17",
    gender: "coed",
    price: "Contact",
    dates: "Summer 2025",
    spotsLeft: 25
  },
  {
    id: 8,
    name: "Fall AAU Basketball",
    type: "camp",
    ageRange: "8-17",
    gender: "coed",
    price: "Contact",
    dates: "Fall 2025",
    spotsLeft: 20
  },
  {
    id: 9,
    name: "Private 1-on-1 Training",
    type: "class",
    ageRange: "4-17",
    gender: "coed",
    price: "$65",
    dates: "90-Min Sessions",
    spotsLeft: 10
  },
  {
    id: 10,
    name: "Winter Skills Camp",
    type: "camp",
    ageRange: "4-17",
    gender: "coed",
    price: "Contact",
    dates: "Winter Break 2025",
    spotsLeft: 15
  },
  {
    id: 11,
    name: "Spring Training Camp",
    type: "camp",
    ageRange: "4-17",
    gender: "coed",
    price: "Contact",
    dates: "Spring 2025",
    spotsLeft: 18
  },
  {
    id: 12,
    name: "Boys Basketball Development",
    type: "league",
    ageRange: "8-14",
    gender: "boys",
    price: "$55",
    dates: "12-Week Session",
    spotsLeft: 12
  }
];

export const sponsors = {
  lead: [
    {
      id: 1,
      name: "Community Partner 1",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop"
    },
    {
      id: 2,
      name: "Community Partner 2",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop"
    }
  ],
  community: [
    {
      id: 1,
      name: "Local Business 1",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop"
    },
    {
      id: 2,
      name: "Local Business 2",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop"
    }
  ]
};

export const news = [
  {
    id: 1,
    title: "OHS Academy Spring Registration Open",
    excerpt: "Register now for our Spring 2025 programs in Basketball, Soccer, and Track & Field.",
    date: "2025-01-15"
  },
  {
    id: 2,
    title: "AAU Season Announcement",
    excerpt: "Exciting news about our upcoming AAU basketball season and tryout dates.",
    date: "2025-01-10"
  },
  {
    id: 3,
    title: "Community Event Recap",
    excerpt: "Thank you to everyone who participated in our recent community sports day!",
    date: "2025-01-05"
  },
  {
    id: 4,
    title: "Coach Spotlight: Coach Wells",
    excerpt: "Celebrating 3+ decades of dedication to Queens Village youth athletics.",
    date: "2024-12-20"
  },
  {
    id: 5,
    title: "Summer Camp 2025 Preview",
    excerpt: "Get ready for another amazing summer of sports, fun, and growth!",
    date: "2024-12-15"
  },
  {
    id: 6,
    title: "Student Athlete Achievements",
    excerpt: "Celebrating our student athletes' accomplishments on and off the court.",
    date: "2024-12-01"
  }
];
