export const workExperience = [
    {
        company: "HazyResearch",
        role: "AI Research",
        year: "2025",
        image: "/img/hazy.webp"
    },
    {
        company: "Apple",
        role: "ML Infra",
        year: "2024",
        image: "/img/apple.webp"
    },
    {
        company: "Tesla",
        role: "Engineering",
        year: "2024",
        image: "/img/tesla.webp"
    },
    {
        company: "Noramp",
        role: "Engineering",
        year: "2023",
        image: "/img/noramp.webp"
    },
    {
        company: "Tidepool",
        role: "Design",
        year: "2022",
        image: "/img/tidepool.webp"
    },
    {
        company: "January AI",
        role: "Design",
        year: "2022",
        image: "/img/january.webp"
    },
    {
        company: "Quext",
        role: "Engineering",
        year: "2020-21",
        image: "/img/quext.webp"
    },
    {
        company: "Hatch Learning",
        role: "Founder",
        year: "2019-24",
        image: "/img/hatch.webp"
    },
    {
        company: "Stanford",
        role: "Stem Cell Research",
        year: "2018",
        image: "/img/stanford.webp"
    }
];


export const work: Record<string, any> = {
    tesla: {
        name: 'Tesla',
        image: '/work/tesla.png',
        role: 'Software Engineer Intern',
        location: 'Remote',
        dates: 'JAN 2024 - PRESENT',
        description: 'Building backend infrastructure for engineering automation products.',
        website: 'https://www.tesla.com/',
        skills: [
            'Python',
            'Distributed Systems',
            'Apache Spark',
        ],
    },
    noramp: {
        name: 'NoRamp Labs',
        image: '/work/noramp.webp',
        role: 'Junior Software Engineer',
        location: 'Remote',
        dates: 'AUG 2023 - JAN 2024',
        description: 'Built and shipped a password-less crypto wallet to thousands of paying users in 1.5 months. Promoted to Junior Engineer to lead mobile app development and mentor an intern. Led development of proprietary API, enabling data retrieval and transactions across multiple blockchains.',
        website: 'https://www.noramp.io/',
        links: [
            {
                name: 'View Work',
                url: 'https://wallet.noramp.io/'
            },
        ],
        skills: [
            'TypeScript',
            'Next.js',
            'GraphQL',
            'tRPC',
        ],
        images: [
            '/work/NR Wallet Demo.webp',
            '/work/noramp.webp',
        ],
    },
    quext: {
        name: 'Quext',
        image: '/work/quext.png', // Replace with the actual image path
        role: 'Software Engineer Intern',
        location: 'Remote',
        dates: 'SEPT 2020 - FEB 2021',
        description: 'Developed a comprehensive full-stack dashboard for performance analytics of a $350M product suite, improving stakeholder reporting efficiency. Designed and implemented robust PostgreSQL database, crafted a scalable REST API using Node.js, and developed an intuitive front-end interface with Vue.js.',
        website: 'https://www.quext.com/', // Replace with the actual company website
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/brendanm12345/Quext-Product-Performance'
            },
        ],
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
            'Entrepreneurship',
            'Leadership',
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
            'UI/UX Design',
        ],
    },
    january: {
        name: 'January AI',
        image: 'https://assets-global.website-files.com/6481bc12e6485f763a8335ad/65268c9a0b87223056481288_iconnnn.svg', // Assuming this is correct
        role: 'Product Design Intern',
        location: 'Remote',
        dates: 'APR 2022 - JUNE 2022',
        description: 'Redesigned website and mobile app onboarding flows. Worked directly with ex-design directors from Spotify & Airbnb',
        website: 'https://www.january.ai/', // Replace with the actual company website
        skills: [
            'UI/UX Design',
        ],
    },
}
