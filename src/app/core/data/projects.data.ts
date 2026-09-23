import { Project } from '../models/project.model';

const asset = (path: string): string => `assets/projects/${path}`;

export const projects: Project[] = [
  {
    id: 1,
    slug: 'currency-converter',
    title: 'Currency Converter',
    category: 'PYTHON',
    level: 'BTEC LEVEL 2',
    icon: 'CC',
    cardDescription:
      'A beginner Python program that converts amounts between different currencies. It helped me practice variables, user input, calculations and basic programming logic.',
    detailDescription: 'A beginner Python program that converts amounts between different currencies.',
    technologies: ['Python', 'Beginner Project', 'Programming'],
    images: [{ src: asset('level2/currency/1.png'), alt: 'Currency Converter screenshot' }],
    hasDetailPage: true,
  },
  {
    id: 2,
    slug: 'scratch-game',
    title: 'Scratch Game',
    category: 'GAME DEVELOPMENT',
    level: 'BTEC LEVEL 2',
    icon: 'SG',
    cardDescription:
      'A beginner game created using Scratch to learn game logic, events, characters, movement and interactive gameplay.',
    detailDescription:
      'A beginner game created using Scratch to learn game logic, events, characters, movement and interactive gameplay.',
    technologies: ['Scratch', 'Game Design', 'Beginner Project'],
    images: [{ src: asset('level2/scratch/1.png'), alt: 'Scratch Game screenshot' }],
    hasDetailPage: true,
  },
  {
    id: 3,
    slug: 'mit-app-inventor',
    title: 'MIT App Inventor Application',
    category: 'MOBILE APP',
    level: 'BTEC LEVEL 2',
    icon: 'APP',
    cardDescription:
      'A beginner mobile application developed with MIT App Inventor. It introduced me to app interfaces, blocks-based programming and user interaction.',
    detailDescription:
      'A beginner mobile application developed with MIT App Inventor, introducing mobile interfaces, blocks-based programming and user interaction.',
    technologies: ['MIT App Inventor', 'Mobile App', 'UI'],
    images: [1, 2, 3, 4, 5, 6].map((number) => ({
      src: asset(`level2/app-inventor/${number}.jpg`),
      alt: 'MIT App Inventor Application screenshot',
    })),
    hasDetailPage: true,
  },
  {
    id: 4,
    slug: 'travel-blog',
    title: 'Travel Blog Website',
    category: 'WEB DEVELOPMENT',
    level: 'BTEC LEVEL 2',
    icon: 'WEB',
    cardDescription:
      'A beginner travel blog website created with HTML and CSS. It introduced me to webpage structure, styling, navigation and presenting content online.',
    detailDescription:
      'A beginner travel blog website created with HTML and CSS, focused on webpage structure, styling, navigation and presenting content online.',
    technologies: ['HTML', 'CSS', 'Web Design'],
    images: [1, 2, 3, 4, 5, 6].map((number) => ({
      src: asset(`level2/travel-blog/${number}.png`),
      alt: 'Travel Blog Website screenshot',
    })),
    hasDetailPage: true,
  },
  {
    id: 5,
    slug: 'giraffe-escape',
    title: 'Giraffe Escape',
    category: 'GAME DEVELOPMENT',
    level: 'BTEC LEVEL 3',
    icon: 'GE',
    cardDescription:
      'A 2D platform game developed in GameMaker where the player controls a giraffe, collects stars, avoids enemies and progresses through different levels.',
    detailDescription:
      'A 2D platform game developed in GameMaker where the player controls a giraffe, collects stars, avoids enemies and progresses through different levels.',
    technologies: ['GameMaker', 'GML', '2D Game'],
    images: [1, 2, 3, 4, 5].map((number) => ({
      src: asset(`level3/giraffe-escape/${number}.png`),
      alt: 'Giraffe Escape screenshot',
    })),
    hasDetailPage: true,
  },
  {
    id: 6,
    slug: 'fitness-health-app',
    title: 'Fitness & Health App',
    category: 'MOBILE DEVELOPMENT',
    level: 'BTEC LEVEL 3',
    icon: 'FIT',
    cardDescription:
      'An Android fitness and health application developed in Android Studio using Java, focused on creating a practical mobile experience around health and fitness.',
    detailDescription: 'An Android fitness and health application developed in Android Studio using Java.',
    technologies: ['Android Studio', 'Java', 'Mobile App'],
    images: [{ src: asset('level3/fitness-app/1.png'), alt: 'Fitness & Health App screenshot' }],
    hasDetailPage: true,
  },
  {
    id: 7,
    slug: 'resort-booking',
    title: 'Resort Booking Website',
    category: 'WEB DEVELOPMENT',
    level: 'BTEC LEVEL 3',
    icon: 'RB',
    cardDescription:
      'A resort website with a booking concept developed using HTML, CSS and JavaScript, focused on presenting the resort and creating an interactive booking experience.',
    detailDescription:
      'A resort website with a booking concept developed using HTML, CSS and JavaScript, focused on presenting the resort and creating an interactive booking experience.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Web Design'],
    images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => ({
      src: asset(`level3/resort-booking/${number}.png`),
      alt: 'Resort Booking Website screenshot',
    })),
    hasDetailPage: true,
  },
  {
    id: 8,
    slug: 'university-management',
    title: 'University Competition Management System',
    category: 'C# APPLICATION',
    level: 'BTEC LEVEL 3',
    icon: 'UNI',
    cardDescription:
      'A C# system designed to help a university organize and manage a competition, focusing on programming logic, data handling and structured system development.',
    detailDescription:
      'A C# system designed to help a university organize and manage a competition, focusing on programming logic, data handling and structured system development.',
    technologies: ['C#', 'Programming', 'System Development'],
    images: [1, 2, 3, 4, 5, 6, 7].map((number) => ({
      src: asset(`level3/university-system/${number}.jpeg`),
      alt: 'University Competition Management System screenshot',
    })),
    hasDetailPage: true,
  },
  {
    id: 9,
    slug: 'loan-approval',
    title: 'Loan Approval Prediction',
    category: 'AI & DATA',
    level: 'BTEC LEVEL 3',
    icon: 'AI',
    cardDescription:
      'A Python machine learning project that predicts loan approval using a trained model, with a simple GUI created to make the prediction system easier to use.',
    detailDescription:
      'A Python machine learning project that predicts loan approval using a trained model, with a simple GUI created to make the prediction system easier to use.',
    technologies: ['Python', 'Machine Learning', 'GUI', 'Data Analysis'],
    images: [{ src: asset('level3/loan-prediction/1.png'), alt: 'Loan Approval Prediction screenshot' }],
    hasDetailPage: true,
  },
  {
    id: 10,
    slug: 'cybersecurity',
    title: 'Cybersecurity Risk & Protection Study',
    category: 'CYBERSECURITY',
    level: 'BTEC LEVEL 3',
    icon: 'SEC',
    cardDescription:
      'A detailed cybersecurity study covering different company environments, potential threats and vulnerabilities, and recommended measures for protecting systems and data.',
    detailDescription:
      'A detailed cybersecurity study covering different company environments, potential threats and vulnerabilities, and recommended measures for protecting systems and data.',
    technologies: ['Cybersecurity', 'Risk Assessment', 'Security'],
    images: [],
    hasDetailPage: true,
  },
  {
    id: 11,
    slug: 'project-management',
    title: 'Project Management Study',
    category: 'PROJECT MANAGEMENT',
    level: 'BTEC LEVEL 3',
    icon: 'PM',
    cardDescription:
      'A study of project planning and management approaches, including how projects can be organized, managed and supported using different project management methodologies.',
    detailDescription:
      'A study of project planning and management approaches, including how projects can be organized, managed and supported using different project management methodologies.',
    technologies: ['Project Management', 'Planning', 'Methodologies'],
    images: [],
    hasDetailPage: true,
  },
];
