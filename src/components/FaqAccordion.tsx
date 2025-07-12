'use client';

import { useState } from 'react';

interface Faq {
    q: string;
    a: string;
}

const faqData: Faq[] = [
    {
        q: "What is Pixantara?",
        a: "Pixantara is a national game development competition that challenges students to create games inspired by Indonesian culture, heritage, and values, all wrapped in a retro, pixel-art aesthetic."
    },
    {
        q: "Who is eligible to participate?",
        a: "The competition is primarily open to university and high school students in Indonesia. We welcome developers, designers, artists, and anyone with a passion for game creation."
    },
    {
        q: "How do I register a team?",
        a: "First, each member must register for an individual account. Once registered, one person can act as the team leader, create a new team from their dashboard, and invite other registered members to join."
    },
    {
        q: "Is there a registration fee?",
        a: "Yes, a registration fee is required to finalize your team's participation. Details about the fee amount and payment process can be found on the registration page after logging in."
    },
    {
        q: "What are the submission requirements?",
        a: "Teams are required to submit a game proposal document, proof of following our social media channels, and proof of payment. All submissions are handled through the team dashboard."
    },
    {
        q: "What is the 'Pixel Nusantara' theme?",
        a: "'Pixel Nusantara' is our core concept. It's about blending the nostalgic charm of 8-bit/16-bit pixel art with the rich and diverse stories, myths, art styles, and landscapes of the Indonesian archipelago (Nusantara)."
    }
];

interface FaqItemProps {
    item: Faq;
    isOpen: boolean;
    onClick: () => void;
}

const FaqItem = ({ item, isOpen, onClick }: FaqItemProps) => {
    return (
        <div className={`faq-item temple-panel border-2 overflow-hidden ${isOpen ? 'open' : ''}`}>
            <div className='faq-question p-6 cursor-pointer flex justify-between items-center' onClick={onClick}>
                <h3 className="font-press-start text-xl text-white">{item.q}</h3>
                <span className="plus-icon text-2xl transition-transform duration-300">{isOpen ? '-' : '+'}</span>
            </div>
            <div className="faq-answer text-xl" style={{ maxHeight: isOpen ? '1000px' : '0' }}>
                <p className="p-6 pt-0">{item.a}</p>
            </div>
        </div>
    );
};

const FaqAccordion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div id="faq-accordion" className="space-y-4 max-w-4xl mx-auto">
            {faqData.map((item, index) => (
                <FaqItem 
                    key={index} 
                    item={item} 
                    isOpen={openIndex === index} 
                    onClick={() => handleClick(index)} 
                />
            ))}
        </div>
    );
};

export default FaqAccordion;
