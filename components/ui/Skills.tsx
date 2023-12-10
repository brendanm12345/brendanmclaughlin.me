import React from 'react'
import Link from 'next/link';
import { ReactComponent as ArrowUp } from '@/public/img/arrow-up-right.svg';

interface SkillsProps {
    skills: string[],
    links?: {
        name: string
        url: string,
    }[]
}

export default function Skills({ skills, links }: SkillsProps) {
    return (
        <div className='flex flex-wrap gap-2'>
            {skills.map((skill, index) => (
                <span key={index} className='text-md bg-duskwine08 rounded-xl py-2 px-4 font-crimson font-bold whitespace-nowrap'>{skill}</span>
            ))}
            {links && ( links.map((link, index) =>
                <Link key={index} href={link.url} target='_blank' className='text-md border border-black rounded-xl py-2 px-4 hover:underline font-crimson font-bold flex flex-row items-center space-x-1 '><p>{link.name}</p><ArrowUp width={24} /></Link>
            )
            )}
        </div>
    )
}
