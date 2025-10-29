import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import {calculateAge} from '../utils/calculateAge';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Matteo Ragazzini',
  description: "Hi, I'm Matteo — a Software Development Engineer at Amazon focused on transportation network optimization. Come check out my page!",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats'
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Matteo Ragazzini.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Software Development Engineer</strong> at <strong className="text-stone-100">Amazon</strong> in Munich, working on transportation network optimization and planning systems. I build scalable services and automation to support forecasting and planning across the organization.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Previously I worked as a <strong className="text-stone-100">Business Intelligence Engineer</strong> in Luxembourg where I focused on data pipelines and real-time analytics to improve delivery cost and performance.
      </p>
    </>
  ),
  actions: [
    {
      href: '/matteo_ragazzini_cv.pdf',
      text: 'Download CV',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Energetic and collaborative software engineer experienced in building data pipelines, automation, and full-stack tools. I have lived and worked across Italy, Sweden, Luxembourg and Germany which helps me adapt quickly and work well in diverse teams.`,
  aboutItems: [
    {label: 'Location', text: 'Munich, DE', Icon: MapIcon},
    {label: 'Age', text: `${calculateAge('1998-03-03')}`, Icon: CalendarIcon},
    {label: 'Nationality', text: 'Italian', Icon: FlagIcon},
    {label: 'Interests', text: 'Cooking, Sports, Travelling', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Bologna', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Amazon', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Italian',
        level: 10,
      },
      {
        name: 'German',
        level: 2,
      },
    ],
  },
  {
    name: 'AWS services',
    skills: [
      {
        name: 'CDK',
        level: 9,
      },
      {
        name: 'IAM',
        level: 8,
      },
      {
        name: 'Compute Services',
        level: 8,
      },
    ],
  },
  {
    name: 'Software Development',
    skills: [
      {
        name: 'Web Development',
        level: 8,
      },
      {
        name: 'Java',
        level: 9,
      },
      {
        name: 'Python',
        level: 7,
      },
    ],
  },
  {
    name: 'Data Engineering',
    skills: [
      {
        name: 'SQL',
        level: 10,
      },
      {
        name: 'Excel',
        level: 9,
      },
      {
        name: 'Data Visualization',
        level: 9,
      },
    ],
  }
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2023',
    location: 'University of Bologna',
    title: 'Master of Engineering in Computer Science and Software Engineering — 110L/110' 
  },
  {
    date: '2022',
    location: 'Stockholm University',
    title: 'Master of Science in Computer Science'
  },
  {
    date: '2020',
    location: 'University of Bologna',
    title: 'Bachelor of Engineering in Computer Science and Software Engineering — 108/110'
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2023 - Present',
    location: 'Amazon, Munich, Germany',
    title: 'Software Development Engineer',
    content: (
      <ul className="list-disc ml-6 space-y-2">
        <li>
          Developed a <strong>Java</strong> application to analyze Amazon's Same Day delivery network, identifying opportunities to increase delivery speed and extend service hours. Built interactive dashboards using <strong>AWS Quicksight</strong> to visualize network performance metrics.
        </li>
        <li>
          Led the design and development of an automated modeling framework using <strong>AWS CDK</strong>, <strong>AWS Lambda</strong>, <strong>Step Functions</strong>, <strong>DynamoDB</strong>, and <strong>REST APIs</strong>, automating manual modeling processes across multiple teams and reducing analysts' time by ~35%.
        </li>
        <li>
          Built a full-stack planning support tool using <strong>Python</strong>, <strong>AWS Step Functions</strong>, and <strong>React</strong> that interacts with external APIs to compare forecasted plans against actual results, enabling VP-level strategic planning.
        </li>
        <li>
          Served as the software engineering representative for a 200+ person organization, driving adoption of security best practices, code quality standards, and maintainable architecture.
        </li>
      </ul>
    ),
  },
  {
    date: 'Feb 2022 - July 2023',
    location: 'Amazon, Luxembourg',
    title: 'Business Intelligence Engineer',
    content: (
      <ul className="list-disc ml-6 space-y-2">
        <li>
          Built a <strong>SQL</strong> data pipeline aggregating 12+ datasets to calculate granular delivery costs across Amazon's logistics network. Processed ~5TB annually and enabled 65+ teams to identify cost-saving opportunities for SVP-level initiatives.
        </li>
        <li>
          Developed a real-time analytics pipeline in <strong>Amazon Redshift</strong> to monitor delivery performance, missed deliveries, and weather conditions at zip code level; dashboards served 85+ users with 3,000+ interactions.
        </li>
      </ul>
    ),
  },
  {
    date: 'Jun 2020 - Sept 2020',
    location: 'University of Bologna - Network and security department',
    title: 'Software Engineer Intern',
    content: (
      <ul className="list-disc ml-6">
        <li>
          Created, tested and deployed Guacamole, a containerized clientless remote desktop gateway to access computer labs remotely; the service is active and used by UNIBO students.
        </li>
      </ul>
    ),
  },
];


/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel Free to drop me an email or contact me through the socials below.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@matteoragazzini.com',
      href: 'reachout@matteoragazzini.com',
    },
    {
      type: ContactType.Location,
      text: 'Munich, Germany',
      href: 'https://www.google.com/maps/place/Amazon/@48.1829902,11.5930654,17z/data=!3m1!4b1!4m6!3m5!1s0x479e7448095723ed:0x7747ed42175341c6!8m2!3d48.1829867!4d11.5956403!16s%2Fg%2F1q5gvfjvs?entry=ttu',
    },
    {
      type: ContactType.Instagram,
      text: '@matteoraga',
      href: 'https://www.instagram.com/matteoraga/',
    },
    {
      type: ContactType.Github,
      text: 'MatteoRagazzini',
      href: 'https://github.com/MatteoRagazzini',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/MatteoRagazzini'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/matteo-ragazzini-9b41961b0/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/matteoraga/'},
];
