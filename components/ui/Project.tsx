'use client';
import React from 'react'
import Skills from './Skills';

interface ProjectProps {
    project: any
}

export default function FeaturedProject({ project }: ProjectProps) {
    console.log(project);

    if (!project) {
        console.log("Looking for a missing experience")
        return null
    }

    return (
        <div className='flex flex-col space-y-4'>
            <div className='font-crimson'>
                <div className='flex flex-col space-y-2'>
                    <h2 className='text-2xl font-bold'>{project.name}</h2>
                    <p className='text-xl'>{project.description}</p>
                    {project.skills && project.skills.length > 0 && (
                        <Skills skills={project.skills} links={project.links} />
                    )}
                </div>
            </div>
        </div>
    )
}
