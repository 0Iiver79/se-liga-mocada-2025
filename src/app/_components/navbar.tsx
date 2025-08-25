"use client";

import { useState } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  return (
    <nav className="bg-[#a952fb] text-white px-6 py-4 flex items-center justify-between relative">
      {/* Logo */}
      <div className="text-2xl font-bold">Logo</div>

      {/* Menu Desktop */}
      <ul className="hidden md:flex space-x-6 items-center">
        <li>
          <a href="#home" className="hover:text-[#FF6F2D] transition">Home</a>
        </li>
        <li>
          <a href="#sobre" className="hover:text-[#FF6F2D] transition">Sobre</a>
        </li>
        <li>
          <a href="#quizz" className="hover:text-[#FF6F2D] transition">Quizz</a>
        </li>
        <li>
          <a href="#ongs" className="hover:text-[#FF6F2D] transition">ONGs</a>
        </li>
        <li>
          <a href="#contatos" className="hover:text-[#FF6F2D] transition">Contatos</a>
        </li>

        {/* Dropdown de idiomas */}
        <li className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="px-3 py-2 border rounded hover:bg-[#FF6F2D] transition flex items-center"
          >
            Idiomas ▼
          </button>
          {langOpen && (
            <ul className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg z-50">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">English</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Deutsch</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Italiano</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">中文</a>
              </li>
            </ul>
          )}
        </li>
      </ul>

      {/* Menu Mobile Button */}
      <button
        className="md:hidden flex items-center p-2 border rounded"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Menu Mobile */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-[#a952fb] flex flex-col items-center md:hidden space-y-4 py-4">
          <li>
            <a href="#home" className="hover:text-[#FF6F2D] transition">Home</a>
          </li>
          <li>
            <a href="#sobre" className="hover:text-[#FF6F2D] transition">Sobre</a>
          </li>
          <li>
            <a href="#quizz" className="hover:text-[#FF6F2D] transition">Quizz</a>
          </li>
          <li>
            <a href="#ongs" className="hover:text-[#FF6F2D] transition">ONGs</a>
          </li>
          <li>
            <a href="#contatos" className="hover:text-[#FF6F2D] transition">Contatos</a>
          </li>

          {/* Idiomas Mobile */}
          <li className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="px-3 py-2 border rounded hover:bg-[#FF6F2D] transition flex items-center"
            >
              Idiomas ▼
            </button>
            {langOpen && (
              <ul className="mt-2 w-40 bg-white text-black rounded shadow-lg z-50 flex flex-col">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">English</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">Deutsch</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">Italiano</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">中文</a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
}
