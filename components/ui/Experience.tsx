'use client';
import React from 'react'
import Image from 'next/image';
import { WorkExperience } from '@/interfaces/work';
import Skills from './Skills';

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
        <div className='flex flex-col space-y-6'>
            <div className='font-crimson grid-container gap-2 grid grid-cols-1'>
                <div className='flex flex-col items-left space-y-4'>
                    <div className='flex flex-col space-y-1'>
                        <h2 className='text-3xl font-bold'>{experience.name}</h2>
                        {experience.role && (
                            <p className='text-xl font-regular'>{experience.role}</p>
                        )}
                        {experience.dates && (
                            <p className='text-lg font-ibmmono opacity-60 '>{experience.dates}</p>
                        )}
                    </div>
                    {experience.images && (
                        <div className='flex flex-row space-x-2'>
                            {experience.images.map((image, index) => (
                                <Image
                                    key={index}
                                    onClick={() => window.open(image, "_blank")}
                                    className="object-cover rounded-2xl zoom-on-hover"
                                    src={image}
                                    alt={experience.name}
                                    height={125}
                                    width={125}
                                    quality={100}
                                />
                            ))}
                        </div>
                    )}
                </div>
                <div className='flex flex-col space-y-2'>
                    <p className='text-xl'>{experience.description}</p>
                    {experience.skills && experience.skills.length > 0 && (
                        <Skills skills={experience.skills} links={experience.links} />
                    )}
                </div>
            </div>
        </div>
    )
}
