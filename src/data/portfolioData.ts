import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  identity: {
    name: 'Basireddy Yashwanth Reddy',
    shortName: 'B. Yashwanth Reddy',
    location: 'Hyderabad, India',
    role: 'Computer Science Undergraduate',
    bioStatement: 'Computer Science undergraduate building software and exploring data- and AI-driven solutions.',
    aboutSummary: 'A third-year student at Vardhaman College of Engineering who enjoys a bit of everything: software, data, AI and the creative side of building. A jack of all trades, always learning something new.',
    educationSummary: 'Intermediate at Pragathi Junior College, Nalgonda. SSC at Sri Chaitanya Techno Curriculum School. I speak English and Telugu, and I’m open to roles in software development, data science, machine learning and AI.'
  },
  navigation: [
    { id: 'leap', label: 'The Leap', href: '#leap' },
    { id: 'noise', label: 'The Noise', href: '#noise' },
    { id: 'work', label: 'Selected Work', href: '#work' },
    { id: 'opento', label: 'Open To', href: '#opento' },
    { id: 'rise', label: 'Rise', href: '#rise' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'portal', label: 'The Portal', href: '#portal' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ],
  technologies: {
    marqueeRows: [
      ['Python', 'Java', 'C', 'JavaScript', 'SQL'],
      ['Spring Boot', 'HTML', 'CSS', 'MySQL'],
      ['Machine Learning', 'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib']
    ],
    orbitRingText: 'DSA · OOP · DBMS · OPERATING SYSTEMS · NETWORKS · GIT · COLAB · JUPYTER · VS CODE ·',
    additionalSkills: [
      'Android Studio',
      'AutoCAD',
      'Arduino',
      'Raspberry Pi',
      'Mobile Application Development'
    ]
  },
  projects: [
    {
      id: 'career-bridge-ai',
      title: 'Career Bridge AI',
      subtitle: 'AI-powered job portal',
      description: 'A platform where students discover job opportunities and apply for jobs.',
      highlights: [
        'Designed a relational database for students, recruiters, jobs, resumes and applications.',
        'Wrote optimized SQL queries with primary-key and foreign-key relationships.',
        'Integrated MySQL with a Spring Boot backend.',
        'Applied normalization for scalable database management.'
      ],
      tags: ['Java', 'Spring Boot', 'MySQL'],
      repoUrl: 'https://github.com/aroorabbly/career-bridge'
    },
    {
      id: 'recruit-ai',
      title: 'RecruitAI',
      subtitle: 'Agentic AI for bias-aware technical recruitment',
      description: 'A mobile recruitment companion: job and resume uploads, candidate review, interview coordination, reporting and an AI conversational co-pilot, across Copilot, Talent Pool, Workspace and Analytics modules.',
      highlights: [
        'Blind-hiring controls and recruiter confirmation for sensitive actions.',
        'Role-scoped access and offline decision synchronization.',
        'LangGraph orchestrates specialized agents; pgvector enables semantic retrieval of resume passages.'
      ],
      tags: ['React Native', 'Expo', 'TypeScript', 'FastAPI', 'LangGraph', 'Supabase', 'pgvector'],
      repoUrl: 'https://github.com/Sri-dinesh/RecruitAI',
      note: 'Collaborative team project developed in the Mobile Application Development Laboratory.'
    }
  ],
  careerRoles: [
    { id: '01', title: 'Software Developer', subtitle: 'Build and ship applications', peekLabel: 'Software' },
    { id: '02', title: 'Software Development Engineer (SDE)', subtitle: 'SDE roles', peekLabel: 'SDE' },
    { id: '03', title: 'Data Scientist', subtitle: 'Data, models, insight', peekLabel: 'Data' },
    { id: '04', title: 'Machine Learning Engineer', subtitle: 'Models in production', peekLabel: 'ML' },
    { id: '05', title: 'AI Engineer', subtitle: 'Agents and GenAI', peekLabel: 'AI' }
  ],
  openToData: {
    intro: 'Curious by nature. Ready to build, learn, and contribute.',
    roles: [
      { id: '01', title: 'Software Developer', subtitle: 'Build and ship applications', peekLabel: 'Software' },
      { id: '02', title: 'Software Development Engineer (SDE)', subtitle: 'SDE roles', peekLabel: 'SDE' },
      { id: '03', title: 'Data Scientist', subtitle: 'Data, models, insight', peekLabel: 'Data' },
      { id: '04', title: 'Machine Learning Engineer', subtitle: 'Models in production', peekLabel: 'ML' },
      { id: '05', title: 'AI Engineer', subtitle: 'Agents and GenAI', peekLabel: 'AI' }
    ],
    interests: [
      'Software Development',
      'Artificial Intelligence',
      'Machine Learning',
      'Data Science',
      'Full-Stack Development'
    ],
    closing: 'Always open to meaningful opportunities, collaborations, and challenging problems.'
  },
  riseQuotes: [
    'Every fall needs a way out.',
    'Some doors only open from the inside.',
    'This is where you come in.'
  ],
  riseStory: [
    { text: "THE JOURNEY DOESN'T", accent: 'END HERE.' },
    { text: 'LEARN. BUILD. FAIL.', accent: 'REPEAT.' },
    { text: 'EVERY STEP TAKES YOU', accent: 'HIGHER.' },
    { text: 'STILL', accent: 'RISING.' }
  ],
  stats: [
    { value: '8.4', label: 'CGPA · B.Tech CSE · 2024–2028' },
    { value: '97.7%', label: 'Intermediate MPC · 2022–2024' },
    { value: '9.3', label: 'SSC CGPA · 2022' }
  ],
  aboutData: {
    heading: 'THE PERSON BEHIND THE CODE.',
    name: 'Basireddy Yashwanth Reddy',
    introParagraphs: [
      "I'm a Computer Science undergraduate at Vardhaman College of Engineering, interested in building software and exploring the possibilities of AI, Machine Learning, and Data Science.",
      "I enjoy learning across different areas of technology, experimenting with ideas, and turning concepts into practical projects. I'm curious by nature and believe that growth comes from continuously learning and building."
    ],
    education: [
      {
        degree: 'B.Tech – Computer Science and Engineering',
        institution: 'Vardhaman College of Engineering',
        period: '2024–2028',
        score: 'Current CGPA: 8.4/10',
        metric: '8.4'
      },
      {
        degree: 'Intermediate – MPC',
        institution: 'Pragathi Junior College, Nalgonda',
        period: '2022–2024',
        score: 'Percentage: 97.7%',
        metric: '97.7%'
      },
      {
        degree: 'Secondary School Certificate (SSC)',
        institution: 'Sri Chaitanya Techno Curriculum School',
        period: '2022',
        score: 'CGPA: 9.3/10',
        metric: '9.3'
      }
    ],
    interests: [
      'Artificial Intelligence',
      'Machine Learning',
      'Data Science',
      'Software Development',
      'Full-Stack Development',
      'Problem Solving'
    ],
    personal: {
      languages: 'English & Telugu',
      location: 'Hyderabad, Telangana, India',
      philosophy: 'A jack of all trades, always learning something new. Driven by curiosity and craft.'
    }
  },
  internship: {
    role: 'Data Science Intern',
    company: 'Decode Labs',
    program: 'Virtual Internship Program',
    period: '22 August 2026 – 22 September 2026',
    certificateDate: '23 September 2026',
    details: 'Hands-on projects and collaborative tasks in Data Science.',
    note: 'More 2026 certificates and course completions from NPTEL, DataCamp, Decode Labs, and Infosys Springboard are being added.'
  },
  certifications: [
    { title: 'Programming in Java (Elite)', issuer: 'NPTEL, IIT Kharagpur' },
    { title: 'GenAI Powered Data Analytics Job Simulation', issuer: 'Tata (via Forage)', date: 'July 2026' },
    { title: 'Advanced Software Engineering Job Simulation', issuer: 'Walmart Global Tech (via Forage)', date: 'July 2026' },
    { title: 'Introduction to Unix', issuer: 'Infosys Springboard' },
    { title: 'Introduction to Generative AI', issuer: '', date: 'July 2026' },
    { title: 'Virtual Internship in Data Science', issuer: 'Decode Labs', date: 'September 2026' }
  ],
  contact: {
    heading: 'This is where you come in.',
    email: 'byreddy899@gmail.com',
    channels: [
      { label: 'Email', value: 'byreddy899@gmail.com', href: 'mailto:byreddy899@gmail.com', copyable: true },
      { label: 'Phone', value: '+91 7396777561', href: 'tel:+917396777561', copyable: true },
      { label: 'GitHub', value: 'github.com/byreddy899', href: 'https://github.com/byreddy899' },
      { label: 'LinkedIn', value: 'linkedin.com/in/basireddy-yashwanth-reddy', href: 'https://www.linkedin.com/in/basireddy-yashwanth-reddy-575b1a3a4/' }
    ]
  }
};

