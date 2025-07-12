import Link from 'next/link';

const AboutPage = () => {
  return (
    <>
      <header className="text-center mb-12">
        <h1 className="font-press-start text-3xl md:text-4xl text-white">FORGE LEGENDS, CODE REALITIES.</h1>
        <p className="text-xl mt-4 text-gray-300">Welcome to the heart of the Indonesian game development revolution.</p>
      </header>

      <div className="space-y-12">
        <div className="temple-panel p-8 border-2 grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-2 text-center">
            <svg className="w-16 h-16 mx-auto text-[#16a34a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
          </div>
          <div className="md:col-span-10">
            <h3 className="font-press-start text-xl mb-3 text-white">OUR MISSION</h3>
            <p className="text-xl">To be the launchpad for Indonesia's next generation of game developers, celebrating our rich cultural heritage through the universal language of pixels and play.</p>
          </div>
        </div>

        <div className="temple-panel p-8 border-2 grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-10">
            <h3 className="font-press-start text-xl mb-3 text-white">THE "PIXEL NUSANTARA" SAGA</h3>
            <p className="text-xl">This is more than a theme; it's a challenge. We call upon you to weave the myths, landscapes, and spirit of Nusantara into the fabric of retro gaming. Combine 8-bit nostalgia with the soul of our archipelago.</p>
          </div>
          <div className="md:col-span-2 text-center">
            <svg className="w-16 h-16 mx-auto text-[#16a34a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
        </div>

        <div className="temple-panel p-8 border-2">
          <h3 className="font-press-start text-xl mb-6 text-white text-center">WHO CAN JOIN THE QUEST?</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <svg className="w-12 h-12 mx-auto mb-3 text-[#16a34a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20M1 12l5.373-2.986L12 12l5.627-3.015L23 12"></path></svg>
              <h4 className="font-press-start text-xl mb-2 text-white">UNIVERSITY STUDENTS</h4>
              <p>Aspiring developers and designers ready to build their legacy and connect with the industry.</p>
            </div>
            <div>
              <svg className="w-12 h-12 mx-auto mb-3 text-[#16a34a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6L14.6 7.2A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"></path></svg>
              <h4 className="font-press-start text-xl mb-2 text-white">HIGH SCHOOL STUDENTS</h4>
              <p>Young tech enthusiasts eager to forge their skills and take their first steps into a larger world.</p>
            </div>
            <div>
              <svg className="w-12 h-12 mx-auto mb-3 text-[#16a34a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              <h4 className="font-press-start text-xl mb-2 text-white">STAKEHOLDERS</h4>
              <p>Sponsors and industry leaders looking to discover and champion the future of Indonesian gaming.</p>
            </div>
          </div>
        </div>

        <div className="text-center py-10">
          <h2 className="font-press-start text-3xl text-white">YOUR ODYSSEY AWAITS.</h2>
          <p className="text-xl mt-4 mb-8 text-gray-300">The tools are ready. The challenge is set. Will you answer the call?</p>
          <Link href="/register" className="font-press-start inline-block bg-[#16a34a] text-gray-900 px-8 py-4 text-xl border-2 border-transparent hover:bg-transparent hover:border-[#a3e635] hover:text-white transition-all duration-300 transform hover:scale-105">
            REGISTER NOW
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
