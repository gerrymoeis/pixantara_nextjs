import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 space-y-4 md:space-y-0">
      <h1 className="font-press-start text-2xl md:text-3xl text-white">Pixel Nusantara Game Development Competition</h1>
      <div className="flex items-center space-x-4">
        <Link href="/register" role="button" className="font-press-start text-base text-gray-900 bg-[#a3e635] hover:bg-white px-6 py-3 transition-colors duration-300">REGISTER NOW</Link>
      </div>
    </header>
  );
};

export default Header;
