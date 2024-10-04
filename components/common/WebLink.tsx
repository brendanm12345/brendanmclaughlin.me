import Link from 'next/link'

interface WebLinkProps {
    href: string;
    text: string;
}


export default function WebLink({ href, text }: WebLinkProps) {
    return (
        <Link className="text-sundown hover:underline" href={href} target="_blank" rel="noopener noreferrer">{text}</Link>
    )
}
