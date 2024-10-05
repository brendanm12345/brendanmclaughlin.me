import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import ArrowLink from '@/components/common/ArrowLink';

interface ProjectProps {
    name: string;
    description: string;
    links: { name: string; url: string }[];
}

const Project: React.FC<ProjectProps> = ({ name, description, links }) => {
    return (
        <div className="mb-4 flex flex-col gap-1">
            <div className="flex items-center gap-2">
                <h3 className="font-semibold text-sm truncate">{name}</h3>
                {links.map((link, index) => (
                    <ArrowLink
                        key={index}
                        value={link.name}
                        href={link.url}
                        className="opacity-50 text-sm"
                    />
                ))}
            </div>
            <p className="text-sm opacity-50">{description}</p>
        </div>
    );
};

export default Project;