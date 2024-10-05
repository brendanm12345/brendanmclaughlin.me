import { useAnimateIn } from '@/hooks/useAnimateIn';

interface AnimateInProps {
    children: React.ReactNode;
    delay?: number;
}

export default function AnimateIn({ children, delay = 0 }: AnimateInProps) {
    const isVisible = useAnimateIn(delay);

    return (
        <div className={`${isVisible ? 'animate-in' : 'invisible'}`}>
            {children}
        </div>
    );
};
