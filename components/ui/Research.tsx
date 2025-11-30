import React from 'react';
import ResearchItem from '@/components/ui/ResearchItem';
import { research } from '@/data/research';

export default function Research() {
    return (
        <section className="w-full flex flex-col">
            <h2 className="text-lg pb-2 border-b border-black border-opacity-5">Research</h2>
            <div className="overflow-hidden mt-4">
                {Object.values(research).map((research, index) => (
                    <ResearchItem
                        key={index}
                        name={research.name}
                        conferences={research.conferences}
                        description={research.description}
                        links={research.links}
                    />
                ))}
            </div>
        </section>
    );
}