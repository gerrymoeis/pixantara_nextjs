import type { Metadata } from 'next';
import FaqAccordion from '../../components/FaqAccordion';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Find answers to frequently asked questions about the Pixantara competition, including registration, rules, and submission details.',
};

const FaqPage = () => {
  return (
    <>
      <header className="text-center mb-12">
        <h1 className="font-press-start text-3xl md:text-4xl text-white">FREQUENTLY ASKED QUESTIONS</h1>
        <p className="text-xl mt-4 text-gray-300">Your guide to the Pixantara competition. Find answers to common queries below.</p>
      </header>

      <FaqAccordion />
    </>
  );
};

export default FaqPage;
