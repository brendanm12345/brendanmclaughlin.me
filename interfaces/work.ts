export interface WorkExperience {
    name: string;
    // image: string;
    role: string;
    location: string;
    dates: string;
    description: string;
    website: string;
    links?: {
        name: string;
        url: string;
    }[];
    skills: string[];
    images?: string[];
}