'use client';
import React from 'react'
import Image from 'next/image';

interface ProjectProps {
    project: any
}

export default function Project({ project }: ProjectProps) {
    console.log(project);

    if (!project) {
        console.log("Looking for a missing experience")
        return null
    }

    return (
        <div className='flex flex-col space-y-4'>
            <div className="relative aspect-square h-[348px] image-container rounded-2xl">
                <Image
                    onClick={() => window.open(project.website, "_blank")}
                    className="object-cover rounded-2xl zoom-on-hover"
                    fill={true}
                    src={project.image}
                    alt={project.name}
                />
            </div>
            <div className='font-sourcesans'>
                <div className='flex flex-col space-y-2'>
                    <h2 className='text-2xl font-bold'>{project.name}</h2>
                    <p className='text-xl'>{project.description}</p>
                    {project.skills && project.skills.length > 0 && (
                        <div className='flex flex-row space-x-4 '>
                            {project.skills.map((skill: any, index: any) => (
                                <span key={index} className='text-md bg-moonmist05 rounded-xl py-2 px-4 font-sourcesans text-white font-semibold'>#{skill.toLowerCase()}</span>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}
