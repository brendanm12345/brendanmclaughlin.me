import { workExperience } from "@/data/work";
import { WorkExperienceRow } from './WorkExperienceRow';

export const Work: React.FC = () => {
    return (
        <section className="max-w-2xl w-full">
            <h2 className="text-2xl font-bold pb-3 border-b border-black border-opacity-10">Experience</h2>
            <div className="overflow-hidden">
                {workExperience.map((experience, index) => (
                    <WorkExperienceRow
                        key={index}
                        company={experience.company}
                        role={experience.role}
                        year={experience.year}
                        image={experience.image}
                    />
                ))}
            </div>
        </section>
    );
};