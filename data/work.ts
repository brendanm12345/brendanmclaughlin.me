import { WorkExperience } from '../interfaces/work';

export const work: Record<string, WorkExperience> = {
    noramp: {
        name: 'NoRamp',
        image: '/work/noramp.png',
        role: 'Software Engineer Intern',
        location: 'NYC',
        dates: 'JUNE 2023 - PRESENT',
        description: 'NoRamp is the fastest checkout in web3. In August, I built from scratch and deployed to 1000s of users NoRamp’s fully functional web3 wallet (www.wallet.noramp.io). I was subsequently promoted to Junior Software Engineer where I manage a dev team of 2 and am responsible for the development of a new product.',
        website: 'https://www.noramp.io/',
        tags: [
            'Internship',
            'Software Engineering',
        ],
        skills: [
            'TypeScript',
            'Next.js',
            'web3.js',
            'fullstack',
        ],
    },
    // tidepool: {
    //     name: 'Tidepool',
    //     image: 'https://assets-global.website-files.com/6481bc12e6485f763a8335ad/65268c9a0b87223056481288_iconnnn.svg',
    //     role: 'Software Engineer Intern',
    //     location: 'SF',
    //     dates: 'JUNE 2023 - PRESENT',
    //     description: 'Tidepool is a non-profit organization dedicated to making diabetes data more accessible, actionable, and meaningful for people with diabetes, their care teams, and researchers.',
    //     website: 'https://www.noramp.io/',
    //     tags: [
    //         'Internship',
    //         'Software Engineering',
    //     ],
    //     skills: [
    //         'TypeScript',
    //         'React',
    //         'tRPC',
    //         'webjs',
    //     ],
    // },
}

