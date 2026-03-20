import React from 'react';
import { User, Search, ShoppingBag } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-blue-950 text-white px-10 py-4 h-24 font-sans border-b border-gray-800">
      
      {/* Brand Logo Section */}
      <div className="flex flex-col items-center group cursor-pointer">
        <div className="border-2 border-white rounded-full w-7 h-7 flex items-center justify-center mb-1 transition-transform group-hover:scale-105">
          <span className="text-xs font-bold leading-none">V</span>
        </div>
        <h1 className="text-3xl font-bold tracking-[0.2em] leading-none">VIDARA</h1>
        <span className="text-[10px] tracking-widest mt-1 opacity-80 uppercase">Watches</span>
      </div>

      {/* Navigation Links - Hidden on Mobile, Flex on Desktop */}
      <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
        <a href="#" className="text-sm font-semibold hover:text-gray-300 transition-colors">NEW ARRIVAL</a>
        <a href="#" className="text-sm font-semibold hover:text-gray-300 transition-colors">SMART WATCHES</a>
        <a href="#" className="text-sm font-semibold hover:text-gray-300 transition-colors">MEN</a>
        <a href="#" className="text-sm font-semibold hover:text-gray-300 transition-colors">WOMEN</a>
        <a href="#" className="text-sm font-semibold hover:text-gray-300 transition-colors">BEST SELLERS</a>
        <a href="#" className="text-sm font-semibold hover:text-gray-300 transition-colors">FOR COUPLES</a>
        <a href="#" className="text-sm font-semibold hover:text-gray-300 transition-colors">TRACK ORDER</a>
      </nav>

      {/* Action Icons */}
      <div className="flex items-center gap-6">
        <User className="w-5 h-5 cursor-pointer hover:opacity-70 transition-opacity" />
        <Search className="w-5 h-5 cursor-pointer hover:opacity-70 transition-opacity" />
        <div className="relative">
          <ShoppingBag className="w-5 h-5 cursor-pointer hover:opacity-70 transition-opacity" />
          {/* Optional: Cart Badge */}
          <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] rounded-full w-3.5 h-3.5 flex items-center justify-center font-bold">0</span>
        </div>
      </div>
    </header>
  );
};

export default Header;