import React from 'react'
import { ReactComponent as BrendanMcLaughlin } from '@/public/img/brendanmcLaughlin.svg'
import { ReactComponent as Github } from '@/public/img/github.svg'
import { ReactComponent as Linkedin } from '@/public/img/linkedin.svg'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className="w-full mt-6 p-5 bg-gray-300 rounded-lg justify-between items-center inline-flex">
            <BrendanMcLaughlin />
            <div className="flex items-center space-x-12">
                <div className="flex items-center space-x-12">
                    <Link href='/'>
                        Home
                    </Link>
                    <Link href='/' >
                        Work
                    </Link>
                    <Link href='/' >
                        About
                    </Link>
                </div>
                <div className="flex items-center space-x-4">
                    <Github />
                    <Linkedin />
                </div>
            </div>
        </div>
    )
}