'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const timelineData = [
    {
        date: 'August 1-15, 2025',
        title: 'Registration Phase',
        description: 'Individual participants sign up and create their accounts to join the competition.',
        align: 'left',
    },
    {
        date: 'August 16-31, 2025',
        title: 'Team Formation',
        description: 'Participants form teams and team leaders manage their members.',
        align: 'right',
    },
    {
        date: 'September 1-15, 2025',
        title: 'Document Submission',
        description: 'Teams upload required documents like proposals and student IDs.',
        align: 'left',
    },
    {
        date: 'September 16-30, 2025',
        title: 'Social & Payment Proof',
        description: 'Teams submit proof of social media engagement and payment confirmation.',
        align: 'right',
    },
    {
        date: 'October 1-15, 2025',
        title: 'Final Submission',
        description: 'All documents and requirements are finalized and confirmed by the teams.',
        align: 'left',
    },
    {
        date: 'October 16 - November 15, 2025',
        title: 'Elimination Rounds',
        description: 'Judges review submissions and teams compete through elimination phases.',
        align: 'right',
    },
    {
        date: 'December 1, 2025',
        title: 'Grand Finals',
        description: 'The final competition event and the announcement of the winners.',
        align: 'left',
    },
] as const;

const TimelineItem = ({ date, title, description, align }: { date: string; title: string; description: string; align: 'left' | 'right' }) => {
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!itemRef.current) return;

        const item = itemRef.current;
        const content = item.querySelector('.timeline-content');
        const marker = item.querySelector('.timeline-marker');

        if (!content || !marker) return;

        gsap.set(item, { autoAlpha: 1 });
        gsap.set(content, { xPercent: align === 'left' ? -30 : 30, autoAlpha: 0 });
        gsap.set(marker, { scale: 0 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
        });

        tl.to(marker, { scale: 1, duration: 0.5, ease: 'back.out(1.7)' })
          .to(content, { xPercent: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out' }, '-=0.3');

    }, [align]);

    const alignmentClass = align === 'left' ? 'justify-start' : 'justify-end';
    const textAlignClass = align === 'left' ? 'text-right' : 'text-left';

    return (
        <div ref={itemRef} className={`timeline-item flex ${alignmentClass} items-center w-full mb-12`} style={{ visibility: 'hidden' }}>
            {align === 'left' && (
                <>
                    <div className={`timeline-content ${textAlignClass}`}>
                        <div className="temple-panel p-6 border-2">
                            <p className="text-sm text-lime-300 mb-2">{date}</p>
                            <h3 className="font-press-start text-xl mb-2 text-white">{title}</h3>
                            <p className="text-gray-300">{description}</p>
                        </div>
                    </div>
                    <div className="timeline-marker"></div>
                </>
            )}
            {align === 'right' && (
                <>
                    <div className="timeline-marker"></div>
                    <div className={`timeline-content ${textAlignClass}`}>
                        <div className="temple-panel p-6 border-2">
                            <p className="text-sm text-lime-300 mb-2">{date}</p>
                            <h3 className="font-press-start text-xl mb-2 text-white">{title}</h3>
                            <p className="text-gray-300">{description}</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

const Timeline = () => {
    return (
        <div className="relative timeline-container max-w-4xl mx-auto">
            {timelineData.map((item, index) => (
                <TimelineItem key={index} {...item} />
            ))}
        </div>
    );
};

export default Timeline;
