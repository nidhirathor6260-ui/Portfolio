/**
 * Site-wide settings and personal details.
 * Edit this file first: everything here is shown somewhere on the page.
 */

/**
 * When true, missing information (GitHub URLs, credential links, screenshots...)
 * appears as a dashed "[Add ...]" placeholder so nothing is silently invented.
 * Set to false before you publish to hide every placeholder in one go.
 */
export const SHOW_PLACEHOLDERS = true;

/**
 * Every project card has two buttons: GitHub and Live Demo. While a project has no deployed
 * URL (`live: null` in projects.js) the Live Demo button is shown greyed out as "Live soon"
 * and cannot be clicked. Set this to false to hide that button until a real URL exists.
 */
export const SHOW_LIVE_PLACEHOLDER = true;

export const site = {
  name: 'Nidhi',
  shortName: 'Nidhi',
  title: 'Computer Science Engineering Student | Aspiring Software Developer',
  titleParts: ['Computer Science Engineering Student', 'Aspiring Software Developer'],
  tagline:
    'Building practical web applications, strengthening problem-solving skills, and exploring full-stack and modern software development.',

  location: 'Ghaziabad, Uttar Pradesh, India',
  email: 'nidhirathor6260@gmail.com',
  phone: '6260481478', // shown as written
  phoneHref: 'tel:+916260481478',

  // Files you add yourself inside /public/assets (see README).
  profilePhoto: '/assets/profile.jpg',
  resume: {
    path: '/assets/Nidhi-Resume.pdf',
    downloadName: 'Nidhi-Resume.pdf',
  },

};

export const profiles = [
  { id: 'github', label: 'GitHub', domain: 'github.com', url: 'https://github.com/nidhirathor6260-ui/' },
  { id: 'linkedin', label: 'LinkedIn', domain: 'linkedin.com', url: 'https://www.linkedin.com/in/nidhi-rathor-6656aa382/' },
  { id: 'leetcode', label: 'LeetCode', domain: 'leetcode.com', url: 'https://leetcode.com/u/nidhirathor6260-ui/' },
  { id: 'codechef', label: 'CodeChef', domain: 'codechef.com', url: 'https://www.codechef.com/users/nidhi_6260' },
  { id: 'codolio', label: 'Codolio', domain: 'codolio.com', url: 'https://codolio.com/profile/nidhirathor6260' },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const about = {
  paragraphs: [
    "I'm a B.Tech Computer Science student at ABES Engineering College, currently in my third semester. I enjoy turning problems into working software, and so far that has meant frontend projects in HTML, CSS, JavaScript and React.",
    "I'm now moving toward backend and full-stack development with the MERN stack, while practising DSA regularly (250+ LeetCode problems) and taking part in hackathons and technical events. I'm looking for internships, open-source work and hackathon teams where I can keep learning by building.",
  ],
  interests: [
    'Software Development',
    'Full Stack Development',
    'Data Structures & Algorithms',
    'JavaScript',
    'React',
    'MERN Stack',
    'Java',
    'C++',
    'Cloud Computing',
    'AI-powered applications',
    'Open Source',
  ],
};

/** Contact form delivery. Leave everything empty and the form opens the visitor's email app instead. */
export const contactConfig = {
  formspreeEndpoint: import.meta.env.VITE_FORMSPREE_ENDPOINT || '',
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  },
};
