import { Activity, ContactInfo, Skill, TimelineItem } from '../models/site-content.model';

export const contactInfo: ContactInfo = {
  email: 'Salmatechno77@gmail.com',
  heroEmail: 'Salmamomani555@gmail.com',
  phone: '+962 779424518',
  location: 'Jordan',
};

export const skills: Skill[] = [
  {
    icon: '</>',
    title: 'Programming',
    description: 'Programming fundamentals and application development.',
    tags: ['Python', 'C#', 'OOP'],
  },
  {
    icon: 'WEB',
    title: 'Web Development',
    description: 'Creating websites and understanding web application structure.',
    tags: ['HTML', 'CSS', 'JavaScript', 'ASP.NET MVC'],
  },
  {
    icon: 'DB',
    title: 'SQL & Databases',
    description: 'Working with relational databases, project tables and database configuration.',
    tags: ['SQL', 'Entity Framework', 'Migrations'],
  },
  {
    icon: 'APP',
    title: 'Mobile Development',
    description: 'Building mobile applications and learning mobile development concepts.',
    tags: ['Java', 'MIT App Inventor'],
  },
  {
    icon: 'SEC',
    title: 'Cybersecurity',
    description: 'Fundamental knowledge of cybersecurity and IT security concepts.',
    tags: ['Cybersecurity', 'IT Security'],
  },
  {
    icon: 'AI',
    title: 'Data & AI',
    description: 'Data analysis, Excel skills and introductory AI work using Python.',
    tags: ['Excel', 'Data Analysis', 'AI with Python'],
  },
];

export const timelineItems: TimelineItem[] = [
  {
    label: 'EDUCATION',
    title: 'BTEC Program - Level 3',
    description: 'Graduate of Al Nuzha Secondary Vocational School and the BTEC Level 3 program.',
  },
  {
    label: 'FIELD TRAINING',
    title: 'Unlimited Innovation Company',
    description: 'Three-month field training experience.',
  },
  {
    label: 'CURRENT TRAINING',
    title: 'B12 - Digital Services',
    description: 'Currently training in digital services.',
  },
  {
    label: 'SOFTWARE DEVELOPMENT',
    title: 'ASP.NET MVC Training',
    description:
      'Training covering C#, object-oriented programming, SQL and databases, ASP.NET MVC, Entity Framework, migrations and problem solving.',
  },
];

export const activities: Activity[] = [
  {
    number: '01',
    icon: 'Game',
    category: 'WORKSHOP',
    title: 'Game Development Workshop',
    description: 'Participated in a game development workshop through Gaming Lab.',
    tags: ['Game Development', 'Gaming Lab'],
  },
  {
    number: '02',
    icon: 'Win',
    category: 'COMPETITION',
    title: 'Game Jam Competition',
    description: 'Participated in a Game Jam competition through Gaming Lab.',
    tags: ['Game Jam', 'Teamwork'],
  },
  {
    number: '03',
    icon: 'Tool',
    category: 'HARDWARE & GAMES',
    title: 'Arduino Electronics & Game Controller Workshop',
    description: 'Participated in an Arduino electronics and game controller workshop.',
    tags: ['Arduino', 'Electronics', 'Game Controllers'],
  },
  {
    number: '04',
    icon: 'Tech',
    category: 'TECHNOLOGY PROGRAM',
    title: 'Beyond the Screen - TechBots',
    description: 'Participated in the Beyond the Screen program through TechBots.',
    tags: ['TechBots', 'Interactive Technology'],
  },
  {
    number: '05',
    icon: 'AI',
    category: 'AI PROGRAM',
    title: 'AI-Ability Program',
    description: 'Participated in the AI-Ability Program at PSUT.',
    tags: ['AI', 'PSUT'],
  },
  {
    number: '06',
    icon: 'Work',
    category: 'ENTREPRENEURSHIP',
    title: 'Startup & Company Foundation Basics',
    description: 'Completed a startup and company foundation basics course through RYSE - Injaz.',
    tags: ['Startups', 'Injaz'],
  },
];
