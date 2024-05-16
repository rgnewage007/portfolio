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
import TwitterIcon from '../components/Icon/TwitterIcon';
import alcor from '../images/alcor.jpg';
import audits from '../images/audits.jpg';
import euritium from '../images/euritium.jpg';
import factura from '../images/factura.png';
import heroImage from '../images/header-background.webp';
import latexcocana from '../images/latexcocana.png';
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
  title: 'Resume and Portfolio',
  description: "Protype of resume",
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
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Raul G.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am a <strong className="text-stone-100">Full Stack Software Engineer</strong> based in Mexico,contributing to the development of a modern, mobile-first domain registrar, and site builder.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Currently, I have been working with the <strong className="text-stone-100">Next.js</strong> framework, representing an evolution of my knowledge. I applied this knowledge in companies where I worked before, mainly in the food and real state industry. There has been a progression in my understanding of the companies' needs.
      </p>


      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        The <strong className="text-stone-100">pursuit</strong> of new challenges has become my newfound <strong className="text-stone-100">passion </strong>and primary focus in this new era where the world demands the best of yourself. Of course, I consider this a full-time job executed with the best practices.
      </p>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.Resume}`,
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
  description: `A Food Chemistry  with passion dedicated to improve the food industry trought the software development. 
  I encourage myself every day to achieve my personal goals through discipline.`,
  aboutItems: [
    {label: 'Location', text: 'Texcoco, Mexico', Icon: MapIcon},
    {label: 'Age', text: '35', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Mexican', Icon: FlagIcon},
    {label: 'Interests', text: 'Mountain biking, hiking', Icon: SparklesIcon},
    {label: 'Study', text: 'UNAM', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Several', Icon: BuildingOffice2Icon},
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
      }
    ],
  },
  {
    name: 'Full Stack',
    skills: [
      {
        name: 'Nextjs',
        level: 10,
      },
      {
        name: 'React',
        level: 9,
      }, {
        name: 'Node.js',
        level: 8,
      },

      {
        name: 'Mysql',
        level: 10,
      },

    ],
  },


];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Ecommerce la Texcocana',
    description: 'Ecommerce Stripe.',
    url: 'latexcocana.com',
    image: latexcocana,
  },
  {
    title: 'SAT CFDI 4.0 Invoice Mexico',
    description: 'Development of a web application to manage the process of stamping CDFI 4.0 invoices valid before SAT. facturaaldia.com',
    url: 'https://www.youtube.com/watch?v=XoYosvQUzKM&t',
    image: factura,
  },
  {
    title: 'Full Stack - Audits (Demo)',
    description: 'A complete develop, an app with the pursuit of managment of audits a colaborative project between users.',
    url: 'https://inspiring-cobbler-630596.netlify.app/',
    image: audits,
  },
  {
    title: 'Full Stack - Publications',
    description: 'Administration of publication of properties in sale. Confidential info',
    url: '',
    image: alcor,
  },
  {
    title: 'Euritium pages',
    description: 'Project focused on resolving some of the communication and technical issues in the food industry. This is an old project, and over time, I will share some information using Next.js.',
    url: 'https://www.youtube.com/channel/UCFuiDZrY-zwMsI9M89NChzA',
    image: euritium,
  },

];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [

  {
    date: 'April 2021',
    location: 'Mexico FUNVAL',
    title: 'English Seminary',
    content: <p></p>,
  },
  {
    date: 'April 2014',
    location: 'Mexico UNAM',
    title: 'Safety management auditor',
    content: <p>Safety management auditor.</p>,
  },
  {
    date: 'March 2003',
    location: 'Mexico UNAM',
    title: 'Food Chemistry - Bachelor degree',
    content: <p>The basics to learn about the scientific method and their aproach in the food industry.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2021 - Present',
    location: 'Alcor',
    title: 'Project Managment',
    content: (
      <p>
        Development of a web application to manage the process of stamping CDFI 4.0 invoices valid before SAT. Created using Nextjs. Projects to standardize logistical, financial and online quality processes, development of web applications, database analysis. Work and supervision on site
      </p>
    ),
  },
  {
    date: 'March 2013 - February 2020',
    location: 'Alsea',
    title: 'Quality Assurance Coordinator',
    content: (
      <p>
        Experience in mapping and standardization of processes, knowledge of logistics in the supply chain.
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
  headerText: 'Get in touch',
  description: 'Contact me and with projects, we will make a better world.',
  items: [
    {
      type: ContactType.Email,
      text: 'rgnewage007@gmail.com',
      href: 'mailto:rgnewage007@gmail.com',
    },
    {
      type: ContactType.Location,
      text: ' Mexico',
      href: 'https://maps.app.goo.gl/brUxenm9KfVhTkJj8',
    },
    {
      type: ContactType.Instagram,
      text: '@rgmosqueda',
      href: 'https://www.instagram.com/rgmosqueda/',
    },
    {
      type: ContactType.Github,
      text: 'rgonzalez007',
      href: 'https://github.com/rgonzalez007',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/rgonzalez007'},

  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/raulmosk-27b2a662/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/rgmosqueda/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/EAuwolf64137'},
];
