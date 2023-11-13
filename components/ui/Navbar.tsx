'use client';
import React, { useState } from 'react';
import { ReactComponent as BrendanMcLaughlin } from '@/public/img/BRENDAN MCLAUGHLIN.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="w-full mt-2 py-4 md:px-4 px-0 rounded-lg flex justify-between items-center relative" style={{ zIndex: 1000 }}>
            <BrendanMcLaughlin className='opacity-60 text-saltlake' />

            {/* Hamburger Menu Icon */}
            <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>

            {/* Menu Items */}
            <div className={`absolute top-full right-0 bg-duskwine shadow-md rounded-lg md:shadow-none md:bg-transparent md:rounded-none md:relative md:flex md:flex-row space-y-2 md:space-y-0 md:space-x-6 font-semibold transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'}`}>
                <Link href="/" className={`block text-right ${pathname === '/' ? 'opacity-100' : 'opacity-60 hover:opacity-90 transition-all duration-300'}`}>
                    Home
                </Link>
                <Link
                    href="/experience" className={`block text-center ${pathname === '/experience' ? 'opacity-100' : 'opacity-60 hover:opacity-90 transition-all duration-300'}`}>
                    Experience
                </Link>
            </div>
        </nav>
    );
}
