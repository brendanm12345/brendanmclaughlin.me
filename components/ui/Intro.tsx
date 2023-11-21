import React from 'react'
import Link from 'next/link'
import { ReactComponent as Polaris } from '@/public/img/polaris.svg'

export default function Intro() {
    return (
        <div className='absolute h-full flex flex-col items-center justify-center'>
            <div className='space-y-6 md:w-[72%] sm:w-full px-8'>
                <Polaris width={48} height={48} color={"#e7e7e7"}/>
                <p className='text-5xl font-bold font-source'>
                    Hi, I&apos;m Brendan
                </p>
                <p className='text-lg'>
                    I&apos;m a fourth year Computer Science student at Stanford University with several years of full-stack engineering and experience at AI, health-tech, and web2.5 companies.
                </p>
                <div className='flex flex-row space-x-6'>
                    <Link href="/experience" className='bg-none border border-duskwine underline text-xl text-sundown font-semibold hover:no-underline'>
                        Experience
                    </Link>
                    <Link href="https://github.com/brendanm12345" className='bg-none border border-duskwine underline text-xl text-sundown font-semibold hover:no-underline'>
                        Github
                    </Link>
                    <Link target='_blank' href="https://www.linkedin.com/in/blam0407/" className='bg-none border border-duskwine underline text-xl text-sundown font-semibold hover:no-underline'>
                        LinkedIn
                    </Link>
                    <Link href="mailto:mclaughlin@stanford.edu" className='bg-none border border-duskwine underline text-xl text-sundown font-semibold hover:no-underline'>
                        Email
                    </Link>
                </div>
            </div>
        </div>
    )
}
