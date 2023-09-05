import React from 'react'
import Button from '@/components/common/Button'
import { ReactComponent as ArrowRight } from '@/public/img/arrowright.svg'

export default function Intro() {
    return (
        <div className='absolute h-full flex flex-col items-center justify-center'>
            <div className='space-y-6 w-2/3'>
                <p className='text-4xl'>
                    Hi, I&apos;m Brendan
                </p>
                <p className='text-lg'>
                    I&apos;m a forth year Computer Science student at Stanford University with several years of
                    full-stack engineering and UX design experience at crypto, AI, and health tech companies.
                    When I&apos;m not coding or designing in my free time, I&apos;m producing music or exploring nature.
                </p>
                <Button className='bg-none border border-duskwine' icon={<ArrowRight />}>
                    View Work
                </Button>
            </div>
        </div>

    )
}
