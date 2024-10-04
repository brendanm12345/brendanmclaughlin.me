import Image from 'next/image';

interface WorkExperienceProps {
    company: string;
    role: string;
    year: string;
    image: string;
}

export const WorkExperienceRow: React.FC<WorkExperienceProps> = ({ company, role, year, image }) => {
    return (
        <div className="flex flex-row items-center py-2 border-b border-black border-opacity-10 last:border-b-0 justify-between">
            <div className="flex flex-row gap-2 items-center">
                <div className="flex-shrink-0 w-7 h-7">
                    <Image src={image} alt={`${company} logo`} width={48} height={48} className="rounded-md" />
                </div>
                <h3 className="text-sm font-sans">{company}</h3>
                <p className="text-sm opacity-50 font-sans">{role}</p>
            </div>
            <div className="text-gray-400 text-sm font-sans">{year}</div>
        </div>
    );
};