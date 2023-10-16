import React from 'react'
import Link from 'next/link'
import { ReactComponent as Polaris } from '@/public/img/polaris.svg'

export default function Intro() {
    return (
        <div className='absolute h-full flex flex-col items-center justify-center'>
            <div className='space-y-6 w-[64%]'>
                <Polaris width={48} height={48} color={"#e7e7e7"}/>
                <p className='text-5xl font-bold'>
                    Hi, I&apos;m Brendan
                </p>
                <p className='text-lg'>
                    I&apos;m a fourth year Computer Science student at Stanford University with several years of full-stack engineering and UX design experience at crypto, AI, and health tech companies.
                </p>
                <div className='flex flex-row space-x-6'>
                    <Link href="/work" className='bg-none border border-duskwine underline text-xl text-sundown font-semibold'>
                        Work
                    </Link>
                    <Link href="https://github.com/brendanm12345" className='bg-none border border-duskwine underline text-xl text-sundown font-semibold'>
                        Github
                    </Link>
                    <Link href="https://www.linkedin.com/in/blam0407/" className='bg-none border border-duskwine underline text-xl text-sundown font-semibold'>
                        LinkedIn
                    </Link>
                </div>
            </div>
        </div>
    )
}
