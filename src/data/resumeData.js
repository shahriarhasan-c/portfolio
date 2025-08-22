const resumeData = {
  name: "Shahriar Hasan",
  workExperience: [
    {
      id: 1,
      company: "TechCorp Solutions",
      position: "Senior Frontend Developer",
      duration: "2022 - Present",
      location: "New York, NY",
      type: "Full-time",
      description: "Leading the development of modern web applications using React, TypeScript, and GraphQL. Mentoring junior developers and implementing best practices for scalable frontend architecture.",
      achievements: [
        "Improved application performance by 40% through code optimization and lazy loading",
        "Led a team of 5 developers in migrating legacy codebase to React",
        "Implemented automated testing resulting in 90% code coverage",
        "Designed and built reusable component library used across 10+ projects"
      ],
      technologies: ["React", "TypeScript", "GraphQL", "Next.js", "Tailwind CSS", "Jest"],
      isExpanded: false
    },
    {
      id: 2,
      company: "StartupHub Inc.",
      position: "Frontend Developer",
      duration: "2020 - 2022",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Developed responsive web applications and mobile-first interfaces for various client projects. Collaborated with design teams to implement pixel-perfect UI components.",
      achievements: [
        "Built 15+ responsive websites with 99% client satisfaction rate",
        "Reduced page load times by 60% through optimization techniques",
        "Implemented accessible design patterns improving WCAG compliance",
        "Collaborated with UX team to improve user engagement by 35%"
      ],
      technologies: ["React", "JavaScript", "Sass", "Webpack", "Redux", "REST APIs"],
      isExpanded: false
    },
    {
      id: 3,
      company: "Digital Agency Pro",
      position: "Junior Web Developer",
      duration: "2019 - 2020",
      location: "Austin, TX",
      type: "Full-time",
      description: "Developed and maintained client websites using modern web technologies. Focused on creating responsive, user-friendly interfaces and ensuring cross-browser compatibility.",
      achievements: [
        "Successfully delivered 25+ client projects on time and within budget",
        "Improved website accessibility scores by implementing ARIA standards",
        "Gained expertise in multiple CMS platforms including WordPress and Drupal",
        "Mentored 3 interns in frontend development best practices"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "WordPress", "Bootstrap"],
      isExpanded: false
    },
    {
      id: 4,
      company: "FreelanceWorks",
      position: "Freelance Web Developer",
      duration: "2018 - 2019",
      location: "Remote",
      type: "Contract",
      description: "Provided custom web development services to small and medium businesses. Specialized in creating modern, mobile-responsive websites and e-commerce solutions.",
      achievements: [
        "Completed 30+ freelance projects with 5-star client ratings",
        "Generated $50K+ in revenue through repeat clients and referrals",
        "Built custom e-commerce solutions increasing client sales by 25%",
        "Established long-term partnerships with 5 marketing agencies"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "WooCommerce"],
      isExpanded: false
    }
  ],
  education: [
    {
      id: 1,
      institution: "State University",
      degree: "Bachelor of Science in Computer Science",
      duration: "2014 - 2018",
      location: "Boston, MA",
      gpa: "3.8/4.0",
      description: "Focused on software engineering, web development, and database systems. Active member of the Computer Science Society and Web Development Club.",
      coursework: [
        "Data Structures and Algorithms",
        "Web Development",
        "Database Systems",
        "Software Engineering",
        "Human-Computer Interaction",
        "Computer Networks"
      ],
      achievements: [
        "Dean's List for 6 semesters",
        "Led development of university event management system",
        "Winner of Annual Hackathon 2017",
        "President of Web Development Club (2017-2018)"
      ],
      isExpanded: false
    },
    {
      id: 2,
      institution: "Tech Academy",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2018",
      location: "Online",
      description: "Intensive 6-month program covering modern web development technologies including React, Node.js, and cloud deployment.",
      coursework: [
        "React.js and Redux",
        "Node.js and Express",
        "MongoDB and PostgreSQL",
        "Cloud Deployment (AWS, Heroku)",
        "RESTful API Development",
        "Agile Development Methodologies"
      ],
      achievements: [
        "Graduated with honors (Top 5% of class)",
        "Built 5 full-stack applications during the program",
        "Received job placement assistance",
        "Mentored incoming students"
      ],
      isExpanded: false
    }
  ],
  skills: {
    technical: [
      { name: "JavaScript", level: 95, category: "Languages" },
      { name: "TypeScript", level: 90, category: "Languages" },
      { name: "Python", level: 75, category: "Languages" },
      { name: "React", level: 95, category: "Frameworks" },
      { name: "Next.js", level: 85, category: "Frameworks" },
      { name: "Vue.js", level: 70, category: "Frameworks" },
      { name: "Node.js", level: 80, category: "Backend" },
      { name: "GraphQL", level: 85, category: "APIs" },
      { name: "REST APIs", level: 90, category: "APIs" },
      { name: "MongoDB", level: 75, category: "Databases" },
      { name: "PostgreSQL", level: 70, category: "Databases" },
      { name: "AWS", level: 80, category: "Cloud" },
      { name: "Docker", level: 75, category: "DevOps" },
      { name: "Git", level: 95, category: "Tools" }
    ],
    soft: [
      "Team Leadership",
      "Project Management",
      "Problem Solving",
      "Communication",
      "Mentoring",
      "Agile Methodologies"
    ]
  },
  certifications: [
    {
      id: 1,
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SA-2023-001"
    },
    {
      id: 2,
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2022",
      credentialId: "META-REACT-2022-456"
    },
    {
      id: 3,
      name: "Google Analytics Certified",
      issuer: "Google",
      date: "2021",
      credentialId: "GA-CERT-2021-789"
    }
  ]
};

export default resumeData;