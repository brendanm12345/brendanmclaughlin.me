import React from 'react'
import Link from 'next/link';
import { ReactComponent as ArrowUp } from '@/public/img/arrow-up-right.svg';

interface SkillsProps {
    skills: string[],
    link?: string
}

export default function Skills({ skills, link }: SkillsProps) {
    return (
        <div className='flex flex-wrap gap-2'>
            {skills.map((skill, index) => (
                <span key={index} className='text-md bg-moonmist05 rounded-xl py-2 px-4 font-sourcesans text-white whitespace-nowrap'>#{skill.toLowerCase()}</span>
            ))}
            {link && (
                <Link href={link} target='_blank' className='text-md bg-sundown25 rounded-xl py-2 px-4 hover:underline font-sourcesans flex flex-row items-center space-x-1 text-white '><p>View Work</p><ArrowUp width={24} /></Link>
            )}
        </div>
    )
}
