'use client'
import React from 'react';
import { ReactComponent as BrendanMcLaughlin } from '@/public/img/BRENDAN MCLAUGHLIN.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const pathname = usePathname()

    return (
        <div className="group w-full mt-6 p-5 rounded-lg justify-between items-center inline-flex">
            <BrendanMcLaughlin className='opacity-60 text-saltlake' />
            <div className="flex items-center space-x-12">
                <div className="flex items-center space-x-12 font-semibold">
                    <Link className={`link ${pathname === '/' ? 'opacity-100' : 'opacity-60'}`} href="/">
                        Home
                    </Link>
                    <Link className={`link ${pathname === '/work' ? 'opacity-100' : 'opacity-60'}`} href="/work"
                    >
                        Work
                    </Link>
                </div>
            </div>
        </div>
    )
}