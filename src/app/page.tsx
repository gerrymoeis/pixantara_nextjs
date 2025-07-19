import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 temple-panel p-6 border-2">
          <h3 className="font-press-start text-xl mb-4 text-white">ABOUT PIXANTARA</h3>
          <p className="text-xl mb-4">A game development competition focused on creating games that celebrate Indonesian culture, heritage, and values through pixel art and retro gaming aesthetics.</p>
          <p className="text-xl">The theme, <span className="text-white font-bold">&quot;Pixel Nusantara,&quot;</span> challenges developers to combine the nostalgia of 8-bit gaming with the rich, diverse identity of the Indonesian archipelago.</p>
        </div>
        <div className="lg:col-span-1 temple-panel p-6 border-2">
          <h3 className="font-press-start text-xl mb-4 text-white">WHY JOIN?</h3>
          <ul className="space-y-3 text-xl list-disc list-inside">
            <li>Win exciting prizes</li>
            <li>Showcase your skills</li>
            <li>Build your portfolio</li>
            <li>Connect with the industry</li>
            <li>Celebrate Indonesian culture</li>
          </ul>
        </div>
        <div className="lg:col-span-3 temple-panel p-6 border-2">
          <h3 className="font-press-start text-xl mb-4 text-white">COMPETITION PHASES</h3>
          <ol className="space-y-2 text-xl list-decimal list-inside">
            <li><strong>Registration Phase</strong> - Individual participant registration</li>
            <li><strong>Team Formation Phase</strong> - Creating teams and adding members</li>
            <li><strong>Document Submission Phase</strong> - Uploading required documents</li>
            <li><strong>Social Media & Payment</strong> - Fulfilling engagement & payment tasks</li>
            <li><strong>Final Submission</strong> - Confirming complete entry for review</li>
            <li><strong>Judging & Finals</strong> - Elimination rounds and winner announcement</li>
          </ol>
        </div>
      </div>
    </>
  );
}
