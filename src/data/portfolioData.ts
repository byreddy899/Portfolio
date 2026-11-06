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
      'Arduino and Raspberry Pi (basic)',
      'Mobile app development lab'
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
      note: 'Team project from the Mobile Application Development Laboratory. Add your own role here.'
    }
  ],
  careerRoles: [
    { title: 'Software Developer', subtitle: 'Build and ship applications', peekLabel: 'Software' },
    { title: 'Software Development Engineer', subtitle: 'SDE roles', peekLabel: 'SDE' },
    { title: 'Data Scientist', subtitle: 'Data, models, insight', peekLabel: 'Data' },
    { title: 'Machine Learning Engineer', subtitle: 'Models in production', peekLabel: 'ML' },
    { title: 'AI Engineer', subtitle: 'Agents and GenAI', peekLabel: 'AI' }
  ],
  riseQuotes: [
    'Every fall needs a way out.',
    'Some doors only open from the inside.',
    'This is where you come in.'
  ],
  stats: [
    { value: '8.4', label: 'CGPA · B.Tech CSE · 2024–2028' },
    { value: '97.7%', label: 'Intermediate MPC · 2022–2024' },
    { value: '9.3', label: 'SSC CGPA · 2022' }
  ],
  internship: {
    role: 'Data Science Intern',
    period: 'Internship · 22 Aug – 22 Sep 2026',
    company: 'Decode Labs',
    details: 'DecodeLabs Virtual Internship Program. Hands-on projects and collaborative tasks. Certificate issued 23 September 2026.',
    note: 'More 2026 certificates (NPTEL, DataCamp, Decode Labs, Infosys Springboard) are being added.'
  },
  certifications: [
    { title: 'Programming in Java (Elite)', issuer: 'NPTEL, IIT Kharagpur' },
    { title: 'GenAI Powered Data Analytics Job Simulation', issuer: 'Tata · Forage', date: '4 Jul 2026' },
    { title: 'Advanced Software Engineering Job Simulation', issuer: 'Walmart · Forage', date: '5 Jul 2026' },
    { title: 'Introduction to Generative AI', issuer: '', date: '6 Jul 2026' },
    { title: 'Introduction to Unix', issuer: 'Infosys Springboard' },
    { title: 'Data Science Virtual Internship', issuer: 'DecodeLabs', date: '23 Sep 2026' }
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
