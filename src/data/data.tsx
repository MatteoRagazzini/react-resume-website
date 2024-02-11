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
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Matteo Ragazzini',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  // Testimonials: 'testimonials',
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
        I'm a <strong className="text-stone-100">Software Developer Engineer</strong> working at <strong className="text-stone-100">Amazon</strong>. 
        I'm responsible of enabling the Transportation org. with all the <strong className="text-stone-100">AWS resources</strong> needed to run optimization models that shape how Amazon will look like in the future. 
        Previously I was working as a <strong className="text-stone-100">Business Intelligence Engineer</strong>, with the goal of improving the E2E Cost per Package without degrading the Customer Experience.  
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
       In my free time, you can catch me <strong className="text-stone-100">cooking</strong>, mainly traditional Italian recipies, <strong className="text-stone-100">training</strong> or <strong className="text-stone-100">planning</strong> my next vacation. 
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
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
  description: `I am an energetic and collaborative individual who is easy to work with. During my studies, I worked as a barman in various discos, which allowed me to develop strong communication and interpersonal skills. 
   Having lived in different countries, including Italy, Stockholm, Luxembourg, and Munich, I bring a global perspective to everything I do, which helps me adapt to new situations and work collaboratively with people from diverse backgrounds. I am committed to using my skills and experience to contribute to the success of any team I join.`,
  aboutItems: [
    {label: 'Location', text: 'Munich, DE', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
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
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2023',
    location: 'University of Bologna',
    title: 'Masters in Computer Science and Engineering',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: '2022',
    location: 'Stockholm University',
    title: 'Erasmus+ program in Computer Science',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: '2020',
    location: 'University of Bologna',
    title: 'Bachelors in Computer Science and Engineering',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'December 2023 - Current',
    location: 'Amazon, Munich',
    title: 'Software Developer Engineer',
    content: (
      <p>
        Develop, deploy and maintain highly robust infrastructure service to support Amazon Network Optimization. 
      </p>
    ),
  },
  {
    date: 'Sept 2022 - December 2023',
    location: 'Amazon, Munich',
    title: 'Business Intelligence Engineer',
    content: (
      <p>
      collect and analyze data, providing insights that drive business decisions. Focusing on E2E Cost per Package reduction on Amazon supply-chain
      </p>
    ),
  },
  {
    date: 'Feb 2022 - Sept 2022',
    location: 'Amazon, Luxembourg',
    title: 'Business Intelligence Engineer Intern',
    content: (
      <p>
        Development of data pipelines and dashboard on Speed. 
      </p>
    ),
  },
  {
    date: 'Jun 2020 - Sept 2020',
    location: 'University of Bologna - Network and security department',
    title: 'Software Engineer Intern',
    content: (
      <p>
        Creation, test and deployment of Guacamole, a containerized clientless remote desktop
gateway to access computer’s lab remotely. This service is now active and reachable for all
students of the UNIBO.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

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
