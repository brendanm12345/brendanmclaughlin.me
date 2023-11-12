'use client';
import React from 'react'
// import Image from 'next/image';
import { WorkExperience } from '@/interfaces/work';
import Link from 'next/link';
import { ReactComponent as ArrowUp } from '@/public/img/arrow-up-right.svg';

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
            <div className='font-sourcesans grid-container gap-2 grid grid-cols-1'>
                <div className='flex flex-col items-left space-y-2'>
                    <h2 className='text-3xl font-bold'>{experience.name}</h2>
                    {experience.role && (
                        <p className='text-xl font-regular'>{experience.role}</p>
                    )}
                    {experience.dates && (
                        <p className='text-lg font-ibmmono opacity-60 '>{experience.dates}</p>
                    )}
                </div>
                <div className='flex flex-col space-y-2'>
                    <p className='text-xl'>{experience.description}</p>
                    {experience.skills && experience.skills.length > 0 && (
                        <div className='flex flex-row space-x-4 '>
                            {experience.skills.map((skill, index) => (
                                <span key={index} className='text-md bg-moonmist05 rounded-xl py-2 px-4 font-sourcesans text-white'>#{skill.toLowerCase()}</span>
                            ))}
                            {experience.link && (
                                <Link href={experience.link} target='_blank' className='text-md bg-sundown25 rounded-xl py-2 px-4 hover:underline font-sourcesans flex flex-row items-center space-x-1 text-white '><p>View Work</p><ArrowUp width={24} /></Link>
                            )}
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}
