import { useEffect, useState } from 'react';

export function useAnimateIn(delay: number = 0) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return isVisible;
}