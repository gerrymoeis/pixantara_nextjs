import Timeline from '../../components/Timeline';
import Link from 'next/link';

const TimelinePage = () => {
  return (
    <>
      <header className="text-center mb-16">
        <h1 className="font-press-start text-3xl md:text-4xl text-white">COMPETITION TIMELINE</h1>
        <p className="text-xl mt-4 text-gray-300">Follow the journey from registration to the grand finals.</p>
      </header>

      <Timeline />

      <div className="text-center mt-16">
        <h2 className="font-press-start text-2xl md:text-3xl text-white mb-6">Ready to Forge Your Legend?</h2>
        <Link href="/register" role="button" className="font-press-start text-xl text-gray-900 bg-[#a3e635] hover:bg-white px-8 py-4 transition-transform duration-300 inline-block hover:scale-105">
          REGISTER NOW
        </Link>
      </div>
    </>
  );
};

export default TimelinePage;
