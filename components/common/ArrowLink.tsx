import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface ArrowLinkProps {
    value: string;
    href: string;
    className?: string;
}

export default function ArrowLink({ value, href, className }: ArrowLinkProps) {
    return (
        <div className="flex flex-col gap-1">
            <Link
                href={href}
                className={`flex items-center gap-1 hover:underline text-md ${className}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                {value}
                <ArrowUpRight size={16} />
            </Link>
        </div>
    );
};
