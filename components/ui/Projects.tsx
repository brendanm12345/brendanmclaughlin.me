import React from 'react';
import Project from '@/components/ui/Project';
import { projectsV2 } from '@/data/projects';

export default function Projects() {
    return (
        <section className="w-full flex flex-col">
            <h2 className="text-lg pb-2 border-b border-black border-dashed border-opacity-10">Projects</h2>
            <div className="overflow-hidden mt-4">
                {Object.values(projectsV2).map((project, index) => (
                    <Project
                        key={index}
                        name={project.name}
                        description={project.description}
                        links={project.links}
                    />
                ))}
            </div>
        </section>
    );
}