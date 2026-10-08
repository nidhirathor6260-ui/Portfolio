/**
 * Certifications and event records.
 *
 * `credentialUrl: null` renders a visible "[Add Credential Link]" placeholder
 * (hidden when SHOW_PLACEHOLDERS is false). Paste the real link and a
 * "View Credential" button appears automatically.
 *
 * `domain`: the organisation's website. Its own site icon is used as the logo.
 * `logo`: optional path to an official logo file inside /public; it wins over `domain`.
 * If neither can be loaded, a plain text monogram is shown. No logos are drawn or imitated here.
 */
export const certifications = [
  {
    id: 'fcc-legacy-js',
    name: 'Legacy JavaScript Algorithms and Data Structures V7',
    organization: 'freeCodeCamp',
    mark: 'fCC',
    issued: 'June 2026',
    issuedISO: '2026-06',
    credentialId: null,
    credentialUrl: 'https://www.freecodecamp.org/certification/fcc-1d6b17b3-c23a-4e23-be4a-331e4042b720/javascript-algorithms-and-data-structures',
    domain: 'freecodecamp.org',
    logo: null,
  },
  {
    id: 'hackerrank-ps-basic',
    name: 'Problem Solving (Basic)',
    organization: 'HackerRank',
    mark: 'HR',
    issued: 'March 2025',
    issuedISO: '2025-03',
    credentialId: 'B278C6DDA2EA',
    credentialUrl: 'https://www.hackerrank.com/certificates/b278c6dda2ea',
    domain: 'hackerrank.com',
    logo: null,
  },
  {
    id: 'simplilearn-js',
    name: 'JavaScript for Beginners',
    organization: 'Simplilearn',
    mark: 'SL',
    issued: 'January 2026',
    issuedISO: '2026-01',
    credentialId: '9670009',
    credentialUrl: 'https://certificates.simplicdn.net/share/9670009_9924561_1767348547970.pdf',
    domain: 'simplilearn.com',
    logo: null,
  },
  {
    id: 'simplilearn-dsa-python',
    name: 'Data Structures & Algorithms in Python',
    organization: 'Simplilearn',
    mark: 'SL',
    issued: 'January 2026',
    issuedISO: '2026-01',
    credentialId: '9720979',
    credentialUrl: 'https://lms.simplilearn.com/courses/8644/Data-Structures-&-Algorithms-in-Python/certificate/download-skillup',
    domain: 'simplilearn.com',
    logo: null,
  },
  {
    id: 'fcc-rwd',
    name: 'Responsive Web Design',
    organization: 'freeCodeCamp',
    mark: 'fCC',
    issued: 'January 2026',
    issuedISO: '2026-01',
    credentialId: 'fcc-1d6b17b3-c23a-4e23-be4a-331e4042b720-rwdv9',
    credentialUrl: 'https://freecodecamp.org/certification/fcc-1d6b17b3-c23a-4e23-be4a-331e4042b720/responsive-web-design-v9',
    domain: 'freecodecamp.org',
    logo: null,
  },
];

/** Participation records. These are listed as what they are: participation, not awards. */
export const events = [
  {
    id: 'decode-sih-2026',
    name: 'Decode SIH 2026',
    organization: 'OSCode',
    mark: 'OS',
    type: 'Certificate of Participation',
    issued: 'August 2026',
    issuedISO: '2026-08',
    credentialId: null,
    credentialUrl: null,
    skills: [],
    logo: null,
  },
  {
    id: 'adobe-university-hackathon-2026',
    name: 'Adobe University Hackathon 2026',
    organization: 'Unstop',
    mark: 'U',
    type: 'Round 1: Online Assessment (MCQ + Coding)',
    issued: 'August 2026',
    issuedISO: '2026-08',
    credentialId: '5de3d90b-fac3-49f2-86ef-9f0c12b8fe0a',
    credentialUrl: 'https://unstop.com/certificate-preview/5de3d90b-fac3-49f2-86ef-9f0c12b8fe0a',
    skills: [],
    domain: 'unstop.com',
    logo: null,
  },
  {
    id: 'abtalksonai-hackathon',
    name: 'Hackathon Participant Certificate',
    organization: 'ABTalksOnAI',
    mark: 'AB',
    type: 'Hackathon participation',
    issued: 'August 2026',
    issuedISO: '2026-08',
    credentialId: null,
    credentialUrl: 'https://www.abtalks.in/verify/ABT-HK-W2T8B',
    skills: ['Web Development'],
    domain: 'abtalks.in',
    logo: null,
  },
];
