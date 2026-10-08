/**
 * Skills are grouped by honest status, not by invented percentages.
 *
 * status  -> visual style:  'strong' | 'student' | 'core' | 'learning' | 'exploring' | 'tools'
 * width   -> layout hint:   'wide' spans two columns on large screens
 * item.note -> optional small label next to a single skill
 */
export const skillGroups = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'Layers',
    status: 'strong',
    statusLabel: 'Completed / Strongest area',
    width: 'wide',
    blurb: 'The part of the stack I have built with most often.',
    items: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
      { name: 'React.js' },
      { name: 'Responsive Web Design' },
    ],
  },
  {
    id: 'programming',
    title: 'Programming',
    icon: 'Terminal',
    status: 'student',
    statusLabel: 'Student level',
    blurb: 'Languages I use for coursework and practice.',
    items: [{ name: 'C++' }, { name: 'Java' }, { name: 'Python' }, { name: 'JavaScript' }],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'Server',
    status: 'learning',
    statusLabel: 'Currently learning',
    items: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'MongoDB' },
      { name: 'REST APIs' },
      { name: 'MERN Stack' },
    ],
  },
  // {
  //   id: 'cs',
  //   title: 'Computer Science',
  //   icon: 'Cpu',
  //   status: 'core',
  //   statusLabel: 'Core coursework and practice',
  //   width: 'wide',
  //   items: [
  //     { name: 'Data Structures & Algorithms' },
  //     { name: 'Object-Oriented Programming' },
  //     { name: 'Problem Solving' },
  //     { name: 'DBMS', note: 'Academic subject' },
  //     { name: 'Operating Systems', note: 'Academic subject' },
  //     { name: 'Computer Networks', note: 'Academic subject' },
  //   ],
  // },
  {
    id: 'tools',
    title: 'Tools',
    icon: 'Wrench',
    status: 'tools',
    items: [{ name: 'Git' }, { name: 'GitHub' }, { name: 'VS Code' }, { name: 'Vite' }],
  },
  {
    id: 'cloud',
    title: 'Cloud',
    icon: 'Cloud',
    status: 'learning',
    statusLabel: 'Currently learning',
    items: [{ name: 'Cloud Computing' }],
  },
  {
    id: 'ai',
    title: 'AI / Modern Development',
    icon: 'Sparkles',
    status: 'exploring',
    statusLabel: 'Exploring',
    items: [
      { name: 'AI-powered applications' },
      { name: 'Generative AI concepts' },
      { name: 'AI API integration' },
    ],
  },
];

/** Explains the badge styles used in the Skills section. */
export const skillLegend = [
  { status: 'strong', label: 'Completed / strongest area' },
  { status: 'student', label: 'Student level' },
  { status: 'learning', label: 'Learning now' },
];
