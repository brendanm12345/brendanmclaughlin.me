'use client';
import React from 'react'
// import Image from 'next/image';
import { WorkExperience } from '@/interfaces/work';

interface ExperienceProps {
    experience: WorkExperience
}

export default function Experience({ experience }: ExperienceProps) {
    console.log(experience);

    if (!experience) {
        console.log("Looking for a missing experience")
        return null
    }

    return (
        <div className='flex flex-row space-x-6'>
            {/* <div className="relative aspect-square w-[248px] h-[248px]">
                <Image
                    onClick={() => window.open(experience.website, "_blank")}
                    className="object-cover rounded-2xl"
                    fill={true}
                    src={experience.image}
                    alt={experience.name}
                />
            </div> */}
            <div className='flex flex-col space-y-4 font-sourcesans'>
                <span className='flex flex-row space-x-2 items-center'>
                    <h2 className='text-2xl font-bold'>{experience.name}</h2>
                    {experience.role && (
                        <>
                            <div className='font-bold'>
                                -
                            </div>
                            <p className='text-2xl'>{experience.role}</p>
                        </>
                    )}
                </span>
                {experience.dates && (
                    <p className='text-lg font-ibmmono opacity-60 font-semibold'>{experience.dates}</p>
                )}
                <p className='text-xl'>{experience.description}</p>
                {experience.skills && experience.skills.length > 0 && (
                    <div className='flex flex-row space-x-4 '>
                        {experience.skills.map((skill, index) => (
                            <span key={index} className='text-lg bg-moonmist05 rounded-xl py-2 px-4 font-ibmmono text-white font-semibold'>#{skill.toLowerCase()}</span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
