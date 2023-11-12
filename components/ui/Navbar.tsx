'use client';
import React from 'react';
import { ReactComponent as BrendanMcLaughlin } from '@/public/img/BRENDAN MCLAUGHLIN.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const pathname = usePathname();

    return (
        <div className="group w-full mt-6 p-5 rounded-lg justify-between items-center inline-flex" style={{ zIndex: 1000 }}>
            <BrendanMcLaughlin className='opacity-60 text-saltlake' />
            <div className="flex items-center space-x-6 font-semibold">
                <Link href="/" className={`p-2 ${pathname === '/' ? 'opacity-100' : 'opacity-60 hover:opacity-90 transition-all duration-300'}`}>
                    Home
                </Link>
                <Link
                    href="/experience" className={`p-2 ${pathname === '/work' ? 'opacity-100' : 'opacity-60 hover:opacity-90 transition-all duration-300'}`}>
                    Experience
                </Link>
            </div >
        </div >
    );
}
