import React from 'react';
import Navbar from '@/components/ui/Navbar';
import Experience from '@/components/ui/Experience';
import { ReactComponent as Polaris } from '@/public/img/POLARIS.svg';
import { work } from '@/data/work';

export default function Work() {
    return (
        <div>
            <div className="mx-6 flex flex-col items-center h-full">
                <Navbar />
                <div className='flex flex-col w-[64%] space-y-16 mt-[64px]'>
                    <div className='flex flex-col space-y-6'>
                        <Polaris width={48} height={48} color={"#e7e7e7"} />
                        <p className='text-5xl font-bold'>
                            Work
                        </p>
                    </div>

                    {Object.keys(work).map((key) => (
                        <Experience key={key} experience={work[key]} />
                    ))}
                </div>
            </div>
        </div>
    );
}
