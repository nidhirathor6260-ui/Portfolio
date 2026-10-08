/**
 * Projects. The first entry is the featured full-stack project (AI Chatbot).
 *
 * Each card shows two buttons: GitHub and Live Demo.
 *  - `github` : your GitHub profile until you have the exact repo URL. Replace it with the repo link,
 *               e.g. 'https://github.com/nidhirathor6260-ui/YOUR-REPO-NAME'.
 *  - `live`   : the deployed URL. While it is `null` the Live Demo button is greyed out ("Live soon")
 *               and not clickable. Paste the real deployed URL to switch it on. Never use a made-up URL.
 *  - `technologies: []` shows an "[Add Technologies]" placeholder (ABTalks: stack not confirmed).
 *
 * `icon` is a key from src/components/icons.js. `filters` decides which filter tabs it appears under.
 */
const GITHUB_PROFILE = 'https://github.com/nidhirathor6260-ui/';

export const projects = [
  {
    id: 'ai-chatbot',
    featured: true,
    name: 'AI Chatbot',
    category: 'Full Stack / MERN',
    filters: ['Full Stack', 'JavaScript'],
    icon: 'MessageSquare',
    description:
      'A full-stack AI chatbot application built using the MERN stack, combining a modern React frontend with a Node.js/Express backend and MongoDB-based application architecture.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JavaScript', 'AI integration'],
    github: GITHUB_PROFILE,
    githubIsProfile: true,
    live: null,
  },
  {
    id: 'amazon-clone',
    name: 'Amazon Clone',
    category: 'Frontend',
    filters: ['Frontend', 'JavaScript'],
    icon: 'ShoppingCart',
    description:
      'An Amazon-inspired e-commerce frontend built to practice responsive layouts, product interfaces, navigation, and interactive frontend development.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: GITHUB_PROFILE,
    githubIsProfile: true,
    live: null,
  },
  {
    id: 'netflix-clone',
    name: 'Netflix Clone',
    category: 'Frontend',
    filters: ['Frontend', 'JavaScript'],
    icon: 'Clapperboard',
    description:
      'A Netflix-inspired streaming platform interface focused on responsive frontend design, modern layouts, and recreating a polished entertainment UI.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: GITHUB_PROFILE,
    githubIsProfile: true,
    live: null,
  },
  {
    id: 'todo-list',
    name: 'To-Do Task List',
    category: 'JavaScript',
    filters: ['Frontend', 'JavaScript'],
    icon: 'ListChecks',
    description:
      'A JavaScript-based task management application created to practice DOM manipulation, user interactions, and dynamic frontend functionality.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: GITHUB_PROFILE,
    githubIsProfile: true,
    live: null,
  },
  {
    id: 'abtalks-website',
    name: 'ABTalks Website',
    category: 'Frontend Development',
    filters: ['Frontend'],
    icon: 'Globe',
    description:
      'A frontend website built for ABTalks, focusing on creating a clean, responsive and engaging web experience.',
    // [Add Technologies]: list only what the repository actually uses. Left empty on purpose.
    technologies: [],
    github: GITHUB_PROFILE,
    githubIsProfile: true,
    live: null,
  },
];

export const projectFilters = ['All', 'Full Stack', 'Frontend', 'JavaScript'];
