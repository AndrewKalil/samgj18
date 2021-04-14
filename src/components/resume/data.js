export const languages = [
  { name: 'python', level: 'advanced' },
  { name: 'c', level: 'advanced' },
  { name: 'javascript', level: 'advanced' },
  { name: 'SQL', level: 'advanced' },
  { name: 'swift', level: 'intermediate' },
];

export const frameworks = [
  { name: 'serverless', level: 'advanced' },
  { name: 'REACT', level: 'advanced' },
  { name: 'spark', level: 'intermediate' },
  { name: 'node', level: 'advanced' },
];

export const appliedKnowledge = [
  { name: 'frontend development', level: 'advanced' },
  { name: 'backend development', level: 'advanced' },
  { name: 'data science', level: 'advanced' },
  { name: 'machine learning', level: 'advanced' },
];

export const langData = [
  {
    languages: languages.map(item => {
      return { name: item.name, level: item.level };
    }),
  },
  {
    frameworks: frameworks.map(item => {
      return { name: item.name, level: item.level };
    }),
  },
  {
    appliedKnowledge: appliedKnowledge.map(item => {
      return { name: item.name, level: item.level };
    }),
  },
];

export const education = [
  {
    school: 'HOLBERTON',
    profession: 'Software Engineer',
    date: 'Jan 2020 - Nov 2020 I Barranquilla, CO',
  },
  {
    school: 'UNIVERSIDAD DEL NORTE',
    profession: 'B.Sc. IN Electronic Engineering',
    date: 'Jan 2015 - Mar 2020 I Barranquilla, CO',
  },
];

export const experience = [
  {
    company: 'TORRE | Software Engineer',
    date: 'Dec 2020 - Currently (Remote)',
    desc: 'Torre is the new professional network for remote and flexible work.',
    technologies: '',
  },
  {
    company: 'MORRIS & OPAZO I Cloud Engineer',
    date: 'Oct 2020 - Dec 2020 (Remote)',
    desc:
      ' Morris & Opazo is intended to educate customers on architectural best practices for designing and operating reliable, secure, efficient, and cost-effective systems in the cloud.',
    technologies: 'Spark, PySpark, AWS EMR, AWS SNR',
  },
  {
    company: 'SC IT SERVICES I Fullstack Engineer',
    date: 'March 2020 - Dec 2020 (Amsterdam, NE)',
    desc:
      'In charge of creating the infrastructure for the backend based on AWS technologies. Supporting frontend development using react as main library.',
    technologies: 'AWS Serverless Functions, Node, React, CSS, HTML',
  },
  {
    company: 'PAKUD I Co-Founder',
    date: 'March 2020 - Nov 2020 (Colombia, CO)',
    desc:
      'Co-Founder and developer of Pakud. PAKUD is a platform that connects your',
    technologies: '',
  },
];
