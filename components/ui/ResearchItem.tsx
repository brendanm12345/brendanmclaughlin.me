import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import ArrowLink from '@/components/common/ArrowLink';

interface ResearchItemProps {
    name: string;
    description: string;
    conferences: string[];
    links: { name: string; url: string }[];
}

const ResearchItem: React.FC<ResearchItemProps> = ({ name, description, conferences, links }) => {
    return (
        <div className="mb-4 flex flex-col gap-1">
            <div className="flex items-center gap-2">
                <h3 className="font-semibold text-sm truncate">{name}</h3>
            </div>
            <p className="text-sm opacity-50">{description}</p>
            <div className="flex items-center gap-2">
                <p className={`flex items-center gap-1 text-sm`}>
                    {conferences.join(', ')}
                </p>
                <p className="text-sm opacity-50">·</p>
                {links.map((link, index) => (
                    <ArrowLink
                        key={index}
                        value={link.name}
                        href={link.url}
                        className="opacity-50 text-sm"
                    />
                ))}
            </div>
        </div>
    );
};

export default ResearchItem;