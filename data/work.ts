import { WorkExperience } from '../interfaces/work';

export const work: Record<string, any> = {
    noramp: {
        name: 'NoRamp Labs',
        image: '/work/noramp.png',
        role: 'Software Engineer Intern › Junior Software Engineer',
        location: 'Remote',
        dates: 'AUG 2023 - PRESENT',
        description: 'Built and shipped a password-less crypto wallet to thousands of paying users in 1.5 months. Promoted to Junior Engineer to lead mobile app development and mentor an intern. Architected a secure multichain wallet API with an industry-leading user experience.',
        website: 'https://wallet.noramp.io/',
        skills: [
            'TypeScript',
            'Next.js',
            'GraphQL',
            'tRPC',
        ],
    },
    circles_app: {
        name: 'Circles',
        description: 'Developed an app to help users build a personal network map, revealing key contacts for easy reconnection and network management.',
        website: 'https://apps.apple.com/us/app/circles-a-better-contacts-app/id6470177473?uo=2',
        skills: [
            'React Native',
        ],
    },
    quext: {
        name: 'Quext',
        image: '/work/quext.png', // Replace with the actual image path
        role: 'Software Engineer Intern',
        location: 'Remote',
        dates: 'SEPT 2020 - FEB 2021',
        description: 'Built a full-stack internal dashboard for performance visualization of a $350M product suite. Designed the database and built both the REST API and front-end.',
        website: 'https://www.quext.com/', // Replace with the actual company website
        skills: [
            'JavaScript',
            'Vue.js',
            'Node.js',
            'PostgreSQL',
        ],
    },
    hatch_learning: {
        name: 'Hatch Learning',
        image: '/work/hatch_learning.png', // Replace with the actual image path
        role: 'Co-Founder, CEO',
        location: 'Remote',
        dates: 'AUG 2019 - PRESENT',
        description: 'Founded and grew a K-2 educational company to $20,000 quarterly revenue, managing the hiring of 90+ teachers and teaching 250+ students.',
        website: 'https://www.hatchlearning.com/', // Replace with the actual company website
        skills: [
            'Business Development',
            'Team Management',
        ],
    },
    tidepool: {
        name: 'Tidepool',
        image: 'https://assets-global.website-files.com/6481bc12e6485f763a8335ad/65268c9a0b87223056481288_iconnnn.svg', // Assuming this is correct
        role: 'Product Design Intern',
        location: 'Remote',
        dates: 'JUNE 2022 - SEPT 2022',
        description: 'Redesigned the data upload UX, significantly contributing to a partnership with a major company and implementation on a platform with 100k+ active users.',
        website: 'https://www.tidepool.org/', // Replace with the actual company website
        skills: [
            'User Experience Design',
        ],
    },
    storks_protocol: {
        name: 'Storks Protocol',
        description: 'Designed and implemented a secure blockchain protocol for a Stanford class project, resistant to both simple and complex attacks.',
        skills: [
            'TypeScript',
            'Blockchain Development',
        ],
    },
    glucosegpt: {
        name: 'GlucoseGPT',
        description: 'Created an AI-powered mobile app that converts glucose data into natural language insights, comparable to diabetes clinicians’ analyses.',
        skills: [
            'React Native',
            'Python',
            'Flask',
            'OpenAI',
        ],
    },
    custom_diffusion: {
        name: 'Custom Diffusion + Cross Attention',
        description: 'Devised an improved method for generating consistent image sequences from diffusion models by integrating cross-attention control mechanisms.',
        skills: [
            'Python',
            'Deep Learning',
        ],
    },
    image_capture_patent: {
        name: 'Patent Granted for 3-D Image Capture Device',
        description: 'Invented and patented an automated 3D image-capture device, USPTO 10,765,346, enhancing digital imaging capabilities.',
        skills: [
            'Product Design',
            'Patenting Process',
        ],
    },
}
