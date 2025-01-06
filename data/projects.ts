import { link } from "fs"

export const projects: Record<string, any> = {
    circles_app: {
        name: 'Circles',
        featured: true,
        image: '/work/circles.webp',
        description: 'Designed, built, and launched personal CRM app that empowers users to 10x the power of their relationships.',
        website: 'https://apps.apple.com/us/app/circles-a-better-contacts-app/id6470177473?uo=2',
        links: [
            {
                name: 'App Store',
                url: 'https://apps.apple.com/us/app/circles-a-better-contacts-app/id6470177473?uo=2',
            },
        ],
        skills: [
            'React Native',
        ],
    },
    sage: {
        name: 'Sage',
        featured: true,
        image: '/work/sage.webp',
        description: 'Led design and development of app that allows elderly adults to effortlessly organize gardening groups. Won 1st place for visual design, 2nd place for best project and 3rd place for best website out of 190 students in CS 147.',
        website: 'https://web.stanford.edu/class/cs147/projects/DesigningforActiveLifestyles/Sage/',
        links: [
            {
                name: 'Website',
                url: 'https://web.stanford.edu/class/cs147/projects/DesigningforActiveLifestyles/Sage/',
            },
            {
                name: 'GitHub',
                url: 'https://github.com/adamjohnbarry/sage'
            },
        ],
        skills: [
            'React Native',
            'Firebase',
        ],
    },
    glucosegpt: {
        name: 'GlucoseGPT',
        featured: true,
        image: '/work/glucosegpt.webp',
        description: 'Built an AI-powered mobile app that converts glucose data into natural language insights.',
        skills: [
            'React Native',
            'Python',
            'Flask',
            'GPT',
        ],
    },
    storks_protocol: {
        name: 'Storks Protocol',
        featured: false,
        image: '/work/github.webp',
        website: 'https://github.com/brendanm12345/storks-protocol',
        description: 'Designed and implemented a secure blockchain protocol for a Stanford class project, resistant to both simple and complex attacks.',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/brendanm12345/storks-protocol'
            },
        ],
        skills: [
            'TypeScript',
            'Blockchain Development',
        ],
    },
    custom_diffusion: {
        name: 'Custom Diffusion + Cross Attention',
        featured: false,
        image: '/work/customdiffusion.webp',
        website: 'https://drive.google.com/file/d/1qptjSemkvdsHZtyAFsRnWdHaYW5IAYyd/view?pli=1',
        description: 'Devised an improved method for generating consistent image sequences from diffusion models by integrating cross-attention control mechanisms.',
        links: [
            {
                name: 'Video Demo',
                url: 'https://drive.google.com/file/d/1qptjSemkvdsHZtyAFsRnWdHaYW5IAYyd/view?pli=1'
            },
        ],
        skills: [
            'Python',
            'Deep Learning',
            'Stable Diffusion',
        ],
    },
    mocksalary: {
        name: 'AI Mock Salary Negotiation',
        featured: false,
        image: '/work/mocksalary.webp',
        website: 'https://github.com/brendanm12345/salary-mock-interview',
        description: 'Built a salary negotiation tool that empowers job seekers to get paid what they deserve. Built for life--upgrade hackathon using Next.js, GPT, and Python.',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/brendanm12345/salary-mock-interview'
            },
        ],
        skills: [
            'React',
            'Next.js',
            'GPT',
            'Python',
        ],
    },
    image_capture_patent: {
        name: 'Patent Granted for 3-D Image Capture Device',
        featured: false,
        website: 'https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/10765346',
        image: '/work/patent.webp',
        description: 'Invented and patented an automated 3D image-capture device, USPTO 10,765,346, enhancing digital imaging capabilities.',
        links: [
            {
                name: 'USPTO',
                url: 'https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/10765346'
            },
        ],
        skills: [
            'Product Design',
            'Patenting Process',
        ],
    },
    treasure_swap: {
        name: 'Treasure Swap',
        featured: false,
        description: 'Built a fully functional decentralized cryptocurrency exchange on Ethereum for CS 251.',
        website: 'https://github.com/brendanm12345/treasure-swap',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/brendanm12345/treasure-swap',
            }
        ],
        skills: [
            'Solidity',
            'JavaScript',
        ],
    },
    codebaseGPT: {
        name: 'CodebaseGPT',
        featured: false,
        description: 'Built an app that allows users to chat with and ask questions over their codebase using GPT-3.5.',
        website: 'https://github.com/brendanm12345/codebaseGPT',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/brendanm12345/codebaseGPT',
            }
        ],
        skills: [
            'Python',
            'JavaScript',
            'GPT',
        ],
    },
    photo_share: {
        name: 'Photo Share',
        featured: false,
        description: 'Built a full-stack photo sharing app for CS 142: Web Development.',
        website: 'https://github.com/brendanm12345/PhotoShare',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/brendanm12345/PhotoShare',
            }
        ],
        skills: [
            'React.js',
            'MongoDB',
            'Node.js',
            'Express.js',
        ],
    }
}


export const projectsV2: Record<string, any> = {
    d3n: {
        name: 'd3n (1st place winner of Cognition Labs AI hackathon)',
        description: 'AI agent orchestration framework (k8s for agents)',
        image: '',
        links: [
            {
                name: 'Twitter',
                url: 'https://x.com/cognition_labs/status/1787331651258765456',
            },
        ],
    },
    imcts: {
        name: 'Imaginary Monte-Carlo Tree Search (IMCTS) Algorithm',
        description: 'Test-time reasoning algorithm to improve computer agent task completion',
        image: '',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/brendanm12345/imcts_computer_agent',
            },
        ],
    },
    transr: {
        name: 'TransR Knowledge Graph Embeddings in PyTorch Geometric',
        description: 'Added implementation of TransR knowledge graph embeddings to PyTorch Geometric',
        image: '',
        links: [
            {
                name: 'Medium',
                url: 'https://medium.com/stanford-cs224w/transr-knowledge-embeddings-for-pytorch-geometric-5e88269bfd1e',
            },
        ],
    },
    circuit: {
        name: 'Circuit',
        description: 'An agentic patient message routing API and real-time messaging service to reduce clinician burnout',
        image: '',
        links: [
            {
                name: 'Demo',
                url: 'https://www.loom.com/share/2138dd7da4954127b9d0a6a06af86297?sid=365596ea-3fa7-441a-bf8b-8a53d93ab725'
            },
        ],
    },
    workflowGPT: {
        name: 'WorkflowGPT',
        description: 'An open-source browser agent designed for automating your enterprise workflows',
        image: '',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/brendanm12345/WorkflowGPT'
            },
        ],
    },
    simple_renderer: {
        name: 'Simple CUDA Renderer',
        description: 'A simple parallel renderer written in CUDA',
        image: '',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/brendanm12345/simple_renderer'
            },
        ],
    },
    sage: {
        name: 'Sage (2nd place overall, 1st place "best visual design" in CS 147)',
        description: 'Mobile app for organizing elderly gardening groups',
        image: '/work/sage.webp',
        links: [
            {
                name: 'Website',
                url: 'https://web.stanford.edu/class/cs147/projects/DesigningforActiveLifestyles/Sage/',
            },
            {
                name: 'GitHub',
                url: 'https://github.com/adamjohnbarry/sage'
            },
        ],
    },
    circles_app: {
        name: 'Circles',
        description: 'Personal CRM app to 10x the power of your relationships',
        image: '/work/circles.webp',
        links: [
            {
                name: 'App Store',
                url: 'https://apps.apple.com/us/app/circles-a-better-contacts-app/id6470177473?uo=2',
            },
        ],
    },
    simcse: {
        name: 'Enhanced Sentence Embeddings with SimCSE',
        description: 'Implemented an unsupervised SimCSE variant of BERT, achieving improvements in paraphrase detection',
        image: '',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/brendanm12345/bert-sim-cse'
            },
        ],
    },
    glucosegpt: {
        name: 'GlucoseGPT',
        description: 'AI-powered app converting glucose data into natural language insights',
        image: '/work/glucosegpt.webp',
        links: [],
    },
    storks_protocol: {
        name: 'Storks Protocol',
        description: 'Secure blockchain protocol built for CS 251',
        image: '/work/github.webp',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/brendanm12345/storks-protocol'
            },
        ],
    },
    custom_diffusion: {
        name: 'Custom Diffusion + Cross Attention',
        description: 'Improved method for generating consistent image sequences from diffusion models',
        image: '/work/customdiffusion.webp',
        links: [
            {
                name: 'Video Demo',
                url: 'https://drive.google.com/file/d/1qptjSemkvdsHZtyAFsRnWdHaYW5IAYyd/view?pli=1'
            },
        ],
    },
    mocksalary: {
        name: 'AI Mock Salary Negotiation',
        description: 'Salary negotiation tool built for life --upgrade hackathon',
        image: '/work/mocksalary.webp',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/brendanm12345/salary-mock-interview'
            },
        ],
    },
    image_capture_patent: {
        name: 'Patent: 3-D Image Capture Device',
        description: 'Invented and patented an automated 3D image-capture device for custom foot orthotic generation',
        image: '/work/patent.webp',
        links: [
            {
                name: 'USPTO',
                url: 'https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/10765346'
            },
        ],
    },
    treasure_swap: {
        name: 'Treasure Swap',
        description: 'Decentralized cryptocurrency exchange on Ethereum for CS 251',
        image: '/work/github.webp',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/brendanm12345/treasure-swap',
            }
        ],
    },
    codebaseGPT: {
        name: 'CodebaseGPT',
        description: 'App for chatting with codebases using GPT-3.5',
        image: '/work/github.webp',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/brendanm12345/codebaseGPT',
            }
        ],
    },
}