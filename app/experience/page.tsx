'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('@/components/ui/Navbar'));
const Experience = dynamic(() => import('@/components/ui/Experience'));
const FeaturedProject = dynamic(() => import('@/components/ui/FeaturedProject'));
const Project = dynamic(() => import('@/components/ui/Project'));
import { ReactComponent as Polaris } from '@/public/img/polaris.svg';
import { work } from '@/data/work';
import { projects } from '@/data/projects';

export default function Work() {
    const [showWork, setShowWork] = useState(true);

    const toggleSelection = () => {
        setShowWork(!showWork);
    };

    return (
        <div>
            <div className="mx-6 sm:mx-2 flex flex-col items-center h-full">
                <Navbar />
                <div className='flex flex-col md:w-[60%] sm:w-full space-y-16 my-[64px]'>
                    <div className='flex flex-col space-y-8'>
                        {/* <Polaris width={48} height={48} color={"#0E0616"} /> */}
                        <p className='text-5xl font-bold font-crimson'>
                            Experience
                        </p>
                        <div className='toggle-container'>
                            <div className='toggle-highlight' style={{ left: showWork ? 0 : '50%' }}></div>
                            <button onClick={toggleSelection} className='toggle-button'>
                                Work
                            </button>
                            <button onClick={toggleSelection} className='toggle-button'>
                                Projects
                            </button>
                        </div>
                    </div>
                    {showWork ? (
                        Object.keys(work).map((key) => (
                            <Experience key={key} experience={work[key]} />
                        ))
                    ) : (
                        <div className='flex flex-col space-y-12'>
                            <div>
                                <p className='font-ibmmono border-b border-duskwine15 py-3 mb-4'>
                                    FEATURED
                                </p>
                                <div className='grid md:grid-cols-2 gap-10'> {/* Updated line for 3-column grid */}
                                    {Object.keys(projects).filter(key => projects[key].featured).map((key) => (
                                        <FeaturedProject key={key} project={projects[key]} />
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className='font-ibmmono border-b border-duskwine15 py-3 mb-4'>
                                    MORE
                                </p>
                                <div className='flex flex-col space-y-10'> {/* Updated line for 3-column grid */}
                                    {Object.keys(projects).filter(key => !projects[key].featured).map((key) => (
                                        <Project key={key} project={projects[key]} />
                                    ))}
                                </div>
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
