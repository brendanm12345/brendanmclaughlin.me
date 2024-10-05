import { workExperience } from "@/data/work";
import { WorkExperienceRow } from './WorkExperienceRow';

export const Work: React.FC = () => {
    return (
        <section className="w-full flex flex-col">
            <h2 className="text-lg pb-2 border-b border-black border-opacity-5">Work</h2>
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