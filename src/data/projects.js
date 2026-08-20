export const categories = ['all', 'web', 'design'];

export const projectsData = [
{
id: 1,
title: 'Tempchat webapp',
description: 'self destructive chat rooms',
longDesc: 'Developed a real-time temporary group chat application with room-based messaging, file sharing, and automatic data deletion after chat expiry..',
tech: ['Next.js', 'Firebase', 'Cloudinary'],
category: 'web',
featured: true,
liveUrl: 'https://tempchat-opal.vercel.app/room/BQ79TXJZ',
githubUrl: 'https://github.com/niranjanamahendran2006-afk/tempchat'
},
{
id: 2,
title: 'Portfolio Site',
description: 'This very portfolio website',
longDesc: 'A multi-page React portfolio with routing, dark mode, and live GitHub stats.',
tech: ['React', 'CSS'],
category: 'web',
featured: true,
liveUrl: 'https://niranjanamportfolio.lovable.app/',
githubUrl: 'https://github.com/niranjanamahendran2006-afk/niranjanamportfolio'
},
{
id: 3,
title: 'Todo list',
description: 'Kanban task board',
longDesc: 'A basic todo list built with html,css and js',
tech: ['JavaScript', 'HTML'],
category: 'design',
featured: false,
liveUrl: '#',
githubUrl: 'https://github.com/niranjanamahendran2006-afk/to-do-list'
},
{
    id: 4,

    title: 'Movies & Anime Only Chatbot',

    description: 'AI chatbot for movie and anime recommendations',

    longDesc: 'A domain-specific AI chatbot that provides personalized movie and anime recommendations, watch-order guidance, spoiler-safe explanations, and content suitability information. Implemented intelligent recommendation logic and strict guardrails to ensure accurate, domain-focused responses while redirecting off-topic queries.',

    tech: ['AI', 'NLP'],

    category: 'ai',

    featured: true,

    liveUrl: 'https://watchalot.onrender.com',

    githubUrl: 'https://github.com/niranjanamahendran2006-afk/movie-anime-chatbot'
},

{
    id: 5,

    title: 'Obstacle Avoiding Robot',

    description: 'Arduino-based autonomous obstacle avoiding robot',

    longDesc: 'An autonomous robot capable of detecting and avoiding obstacles using an ultrasonic sensor and Arduino-based motor control. Implemented real-time distance sensing and intelligent navigation logic for automatic obstacle avoidance and direction control.',

    tech: ['Arduino', 'C++', 'Ultrasonic Sensor'],

    category: 'hardware',

    featured: false,

    liveUrl: '#',

    githubUrl: 'https://github.com/niranjanamahendran2006-afk/Obstacle-Avoiding-Robot'
},

{
    id: 6,

    title: 'Sepsis Guardian',

    description: 'AI-assisted healthcare monitoring application',

    longDesc: 'An AI-assisted healthcare web application for chemotherapy patients to monitor symptoms, track vitals, assess sepsis risk, and provide multilingual health guidance. Implemented rule-based clinical decision support, hydration tracking, emergency alerts, AI-powered symptom assistance, and PDF report generation for healthcare professionals.',

    tech: ['HTML', 'CSS', 'JavaScript'],

    category: 'healthcare',

    featured: false,

    liveUrl: '#',

    githubUrl: 'https://github.com/niranjanamahendran2006-afk/sepsis-guardian'
},
{
    id: 7,

    title: 'AIJukebox',

    description: 'AI-powered platform for discovering the best AI tools for any task',

    longDesc: 'An AI-powered discovery platform that takes a user’s natural-language goal, breaks it into a dynamic multi-step workflow, and recommends multiple real AI tools for each stage. AIJukebox uses an LLM for intent understanding and task decomposition, a MongoDB database containing verified AI tools, and a recommendation engine to rank tools based on capability, relevance, pricing, quality, API availability, and other requirements.',

    tech: ['React', 'Next.js', 'Node.js', 'MongoDB', 'LLM', 'AI'],

    category: 'ai',

    featured: true,

    liveUrl: '#',

    githubUrl: 'https://github.com/codesbyjes/AI-Jukebox-/pull/1'
},
{
    id: 8,

    title: 'Bookworm',

    description: 'Interactive book management web app',

    longDesc: 'A lightweight interactive web application built with HTML, CSS, and Vanilla JavaScript that allows users to add, view, and delete books dynamically. It includes an interactive popup modal for entering book details, dynamic book creation without page reloads, automatic form reset functionality, and the ability to delete individual book cards.',

    tech: ['HTML', 'CSS', 'JavaScript'],

    category: 'development',

    featured: false,

    liveUrl: '#',

    githubUrl: 'https://github.com/niranjanamahendran2006-afk/bookworm'
}

];

export const SKILLS = [
  { name: 'Python', level: 'Advanced', icon: '🐍' },
  { name: 'C Programming', level: 'Advanced', icon: '💻' },
  { name: 'C++', level: 'Intermediate', icon: '⚙️' },
  { name: 'Content Writing', level: 'Advanced', icon: '✍️' },
  { name: 'Presentation Design', level: 'Advanced', icon: '🎨' },
  { name: 'HTML5', level: 'Advanced', icon: '🌐' },
  { name: 'CSS3', level: 'Advanced', icon: '🎨' },
  { name: 'JavaScript', level: 'Advanced', icon: '⚡' },
  { name: 'React', level: 'Intermediate', icon: '⚛️' }
];