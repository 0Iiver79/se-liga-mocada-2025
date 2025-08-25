"use client";

import { useState } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Sobre", href: "#sobre" },
    { name: "Quizz", href: "#quizz" },
    { name: "ONGs", href: "#ongs" },
    { name: "Contatos", href: "#contatos" },
  ];

  return (
    <nav className="bg-[#F3E8FF] text-[#1C1C1E] px-6 py-4 relative shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#8C4FA3]">Logo</div>

        {/* Links centralizados (Desktop) */}
        <ul className="hidden md:flex flex-1 justify-center items-center space-x-8">
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              <a
                href={item.href}
                className="px-1 py-2 font-semibold text-[#6E6E73] transition-colors hover:text-[#8C4FA3]"
              >
                {item.name}
                <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-[#E05A8D] rounded transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Dropdown de idiomas à direita */}
        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="px-3 py-2 border rounded bg-[#CC9AFC] text-[#1C1C1E] font-semibold hover:bg-[#E05A8D] transition flex items-center"
          >
            Idiomas ▼
          </button>
          {langOpen && (
            <ul className="absolute right-0 mt-2 w-40 bg-white text-[#1C1C1E] rounded shadow-lg z-50 flex flex-col">
              <li><a href="#" className="block px-4 py-2 hover:bg-[#F3E8FF]">English</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-[#F3E8FF]">Deutsch</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-[#F3E8FF]">Italiano</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-[#F3E8FF]">中文</a></li>
            </ul>
          )}
        </div>

        {/* Menu Mobile Button */}
        <button
          className="md:hidden flex items-center p-2 border rounded ml-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-[#F3E8FF] flex flex-col items-center md:hidden space-y-4 py-4">
          {navItems.map((item) => (
            <li key={item.name}><a href={item.href} className="hover:text-[#8C4FA3] transition">{item.name}</a></li>
          ))}

          {/* Idiomas Mobile */}
          <li className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="px-3 py-2 border rounded bg-[#CC9AFC] text-[#1C1C1E] font-semibold hover:bg-[#E05A8D] transition flex items-center"
            >
              Idiomas ▼
            </button>
            {langOpen && (
              <ul className="mt-2 w-40 bg-white text-[#1C1C1E] rounded shadow-lg z-50 flex flex-col">
                <li><a href="#" className="block px-4 py-2 hover:bg-[#F3E8FF]">English</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-[#F3E8FF]">Deutsch</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-[#F3E8FF]">Italiano</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-[#F3E8FF]">中文</a></li>
              </ul>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
}
