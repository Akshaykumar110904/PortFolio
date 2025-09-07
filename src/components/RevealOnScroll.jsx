import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children }) => {
    const ref = useRef(null); // Initialize ref with null

    useEffect(() => {
        const element = ref.current;

        // 1. The observer is created
        const observer = new IntersectionObserver(
            ([entry]) => { 
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0');
                    entry.target.classList.add('opacity-100');
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1
            }
        );
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    return (
        <div ref={ref} className="opacity-0 transition-opacity duration-1000 ease-in-out">
            {children}
        </div>
    );
};