"use client";




import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../../lib/LanguageContext";
import Link from "next/link";
import Image from "next/image";
import logoFundo from "../../../public/LogocomFundo.png";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage } = useLanguage();

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Sobre", href: "#pesquisa" },
    { name: "Quizz", href: "#quizz" },
    { name: "ONGs", href: "#ongs" },
    { name: "Contatos", href: "#contatos" },
  ];

  // Fecha o dropdown de idiomas ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
  <nav className="bg-[#F3E8FF] text-[#1C1C1E] px-6 py-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between relative">
        {/* Logo */}
  <Link href="#home" className="flex items-center cursor-pointer">
          <Image
            src={logoFundo}
            alt="Logo Raízes do Saber"
            className="object-contain rounded-full h-16 w-16 md:h-20 md:w-20 lg:h-18 lg:w-18"
          />
        </Link>

        {/* Links Desktop */}
        <ul className="hidden md:flex flex-1 justify-center items-center space-x-8">
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              <Link
                href={item.href}
                className="px-1 py-2 font-semibold text-[#6E6E73] transition-colors hover:text-[#8C4FA3]"
              >
                {item.name}
                <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-[#E05A8D] rounded transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Dropdown de idiomas Desktop */}
        <div ref={langRef} className="relative hidden md:block">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="px-2 py-2 border border-[#CC9AFC] rounded-full bg-white text-[#8C4FA3] font-bold shadow-sm hover:bg-[#F3E8FF] transition flex items-center gap-2"
            style={{ minWidth: 48 }}
          >
            {language === "pt" && (
              <span className="w-6 h-6 rounded-full overflow-hidden border border-gray-300 bg-white flex items-center justify-center">
                {/* Bandeira oficial do Brasil */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <rect width="32" height="32" fill="#009739"/>
                  <polygon points="16,4 28,16 16,28 4,16" fill="#ffcc29"/>
                  <circle cx="16" cy="16" r="6.5" fill="#3e4095"/>
                  <ellipse cx="16" cy="16" rx="5.2" ry="1.2" fill="#fff" transform="rotate(-15 16 16)"/>
                  <circle cx="16" cy="16" r="2.2" fill="#fff" opacity=".7"/>
                </svg>
              </span>
            )}
            {language === "en" && (
              <span className="w-6 h-6 rounded-full overflow-hidden border border-gray-300 bg-white flex items-center justify-center">
                {/* Bandeira dos EUA */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g><rect width="32" height="32" fill="#b22234"/><g fill="#fff"><rect y="2" width="32" height="2"/><rect y="6" width="32" height="2"/><rect y="10" width="32" height="2"/><rect y="14" width="32" height="2"/><rect y="18" width="32" height="2"/><rect y="22" width="32" height="2"/><rect y="26" width="32" height="2"/></g><rect width="14" height="14" fill="#3c3b6e"/><g fill="#fff"><circle cx="2" cy="2" r="0.7"/><circle cx="4" cy="3.5" r="0.7"/><circle cx="6" cy="2" r="0.7"/><circle cx="8" cy="3.5" r="0.7"/><circle cx="10" cy="2" r="0.7"/><circle cx="12" cy="3.5" r="0.7"/><circle cx="2" cy="6" r="0.7"/><circle cx="4" cy="7.5" r="0.7"/><circle cx="6" cy="6" r="0.7"/><circle cx="8" cy="7.5" r="0.7"/><circle cx="10" cy="6" r="0.7"/><circle cx="12" cy="7.5" r="0.7"/><circle cx="2" cy="10" r="0.7"/><circle cx="4" cy="11.5" r="0.7"/><circle cx="6" cy="10" r="0.7"/><circle cx="8" cy="11.5" r="0.7"/><circle cx="10" cy="10" r="0.7"/><circle cx="12" cy="11.5" r="0.7"/></g></g></svg>
              </span>
            )}
            {language === "es" && (
              <span className="w-6 h-6 rounded-full overflow-hidden border border-gray-300 bg-white flex items-center justify-center">
                {/* Bandeira da Espanha */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g><rect width="32" height="32" fill="#c60b1e"/><rect y="8" width="32" height="16" fill="#ffc400"/></g></svg>
              </span>
            )}
            {language === "it" && (
              <span className="w-6 h-6 rounded-full overflow-hidden border border-gray-300 bg-white flex items-center justify-center">
                {/* Bandeira da Itália */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g><rect width="32" height="32" fill="#fff"/><rect width="10.67" height="32" fill="#008c45"/><rect x="21.33" width="10.67" height="32" fill="#cd212a"/></g></svg>
              </span>
            )}
            {language === "ht" && (
              <span className="w-6 h-6 rounded-full overflow-hidden border border-gray-300 bg-white flex items-center justify-center">
                {/* Bandeira do Haiti */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g><rect width="32" height="16" fill="#00209f"/><rect y="16" width="32" height="16" fill="#d21034"/><rect x="10" y="10" width="12" height="12" fill="#fff"/><circle cx="16" cy="16" r="3" fill="#009739"/></g></svg>
              </span>
            )}
            <span className="ml-2 text-base font-bold">
              {language === "pt" && "Português (Brasil)"}
              {language === "en" && "English"}
              {language === "es" && "Español"}
              {language === "it" && "Italiano"}
              {language === "ht" && "Kreyòl Ayisyen"}
            </span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
          {langOpen && (
            <ul className="absolute right-0 mt-2 w-44 bg-white text-[#1C1C1E] rounded-xl shadow-lg z-50 flex flex-col border border-[#e9d7f7]">
              <li>
                <button onClick={() => { setLanguage("pt"); setLangOpen(false); }} className={`flex items-center gap-2 px-4 py-2 hover:bg-[#F3E8FF] w-full rounded-xl ${language==="pt"?"bg-[#CC9AFC]":""}`}>
                  <span className="w-6 h-6 rounded-full overflow-hidden border border-gray-300 bg-white flex items-center justify-center">{/* Brasil */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <rect width="32" height="32" fill="#009739"/>
                      <polygon points="16,4 28,16 16,28 4,16" fill="#ffcc29"/>
                      <circle cx="16" cy="16" r="6.5" fill="#3e4095"/>
                      <ellipse cx="16" cy="16" rx="5.2" ry="1.2" fill="#fff" transform="rotate(-15 16 16)"/>
                      <circle cx="16" cy="16" r="2.2" fill="#fff" opacity=".7"/>
                    </svg>
                  </span>
                  Português (Brasil)
                </button>
              </li>
              <li>
                <button onClick={() => { setLanguage("en"); setLangOpen(false); }} className={`flex items-center gap-2 px-4 py-2 hover:bg-[#F3E8FF] w-full rounded-xl ${language==="en"?"bg-[#CC9AFC]":""}`}>
                  <span className="w-6 h-6 rounded-full overflow-hidden border border-gray-300 bg-white flex items-center justify-center">{/* EUA */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g><rect width="32" height="32" fill="#b22234"/><g fill="#fff"><rect y="2" width="32" height="2"/><rect y="6" width="32" height="2"/><rect y="10" width="32" height="2"/><rect y="14" width="32" height="2"/><rect y="18" width="32" height="2"/><rect y="22" width="32" height="2"/><rect y="26" width="32" height="2"/></g><rect width="14" height="14" fill="#3c3b6e"/><g fill="#fff"><circle cx="2" cy="2" r="0.7"/><circle cx="4" cy="3.5" r="0.7"/><circle cx="6" cy="2" r="0.7"/><circle cx="8" cy="3.5" r="0.7"/><circle cx="10" cy="2" r="0.7"/><circle cx="12" cy="3.5" r="0.7"/><circle cx="2" cy="6" r="0.7"/><circle cx="4" cy="7.5" r="0.7"/><circle cx="6" cy="6" r="0.7"/><circle cx="8" cy="7.5" r="0.7"/><circle cx="10" cy="6" r="0.7"/><circle cx="12" cy="7.5" r="0.7"/><circle cx="2" cy="10" r="0.7"/><circle cx="4" cy="11.5" r="0.7"/><circle cx="6" cy="10" r="0.7"/><circle cx="8" cy="11.5" r="0.7"/><circle cx="10" cy="10" r="0.7"/><circle cx="12" cy="11.5" r="0.7"/></g></g></svg>
                  </span>
                  English
                </button>
              </li>
              <li>
                <button onClick={() => { setLanguage("es"); setLangOpen(false); }} className={`flex items-center gap-2 px-4 py-2 hover:bg-[#F3E8FF] w-full rounded-xl ${language==="es"?"bg-[#CC9AFC]":""}`}>
                  <span className="w-6 h-6 rounded-full overflow-hidden border border-gray-300 bg-white flex items-center justify-center">{/* Espanha */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g><rect width="32" height="32" fill="#c60b1e"/><rect y="8" width="32" height="16" fill="#ffc400"/></g></svg>
                  </span>
                  Español
                </button>
              </li>
              <li>
                <button onClick={() => { setLanguage("it"); setLangOpen(false); }} className={`flex items-center gap-2 px-4 py-2 hover:bg-[#F3E8FF] w-full rounded-xl ${language==="it"?"bg-[#CC9AFC]":""}`}>
                  <span className="w-6 h-6 rounded-full overflow-hidden border border-gray-300 bg-white flex items-center justify-center">{/* Itália */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g><rect width="32" height="32" fill="#fff"/><rect width="10.67" height="32" fill="#008c45"/><rect x="21.33" width="10.67" height="32" fill="#cd212a"/></g></svg>
                  </span>
                  Italiano
                </button>
              </li>
              <li>
                <button onClick={() => { setLanguage("ht"); setLangOpen(false); }} className={`flex items-center gap-2 px-4 py-2 hover:bg-[#F3E8FF] w-full rounded-xl ${language==="ht"?"bg-[#CC9AFC]":""}`}>
                  <span className="w-6 h-6 rounded-full overflow-hidden border border-gray-300 bg-white flex items-center justify-center">{/* Haiti */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g><rect width="32" height="16" fill="#00209f"/><rect y="16" width="32" height="16" fill="#d21034"/><rect x="10" y="10" width="12" height="12" fill="#fff"/><circle cx="16" cy="16" r="3" fill="#009739"/></g></svg>
                  </span>
                  Kreyòl Ayisyen
                </button>
              </li>
            </ul>
          )}
        </div>

        {/* Menu Mobile Button */}
        <div className="relative md:hidden z-50">
          <button
            className="flex items-center p-2 border rounded bg-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-[#F3E8FF] flex flex-col items-center md:hidden space-y-4 py-4 z-40">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="hover:text-[#8C4FA3] transition"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}

          {/* Dropdown Idiomas Mobile */}
          <li className="relative w-full flex justify-center">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="px-3 py-2 border rounded bg-[#CC9AFC] text-[#1C1C1E] font-semibold hover:bg-[#E05A8D] transition flex items-center"
            >
              Idiomas ▼
            </button>
            {langOpen && (
              <ul className="mt-2 w-48 bg-white text-[#1C1C1E] rounded shadow-lg z-50 flex flex-col absolute">
                <li>
                  <a href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-[#F3E8FF]">
                    <span className="inline-block w-5 h-5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><rect width="640" height="480" fill="#00247d"/><rect width="640" height="160" y="160" fill="#fff"/><rect width="640" height="160" y="320" fill="#cf142b"/></svg></span>
                    English
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-[#F3E8FF]">
                    <span className="inline-block w-5 h-5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><rect width="640" height="480" fill="#c60b1e"/><rect width="640" height="160" y="160" fill="#ffc400"/><rect width="640" height="160" y="320" fill="#007a3d"/></svg></span>
                    Español
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-[#F3E8FF]">
                    <span className="inline-block w-5 h-5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><rect width="640" height="480" fill="#fff"/><rect width="640" height="160" y="160" fill="#008c45"/><rect width="640" height="160" y="320" fill="#cd212a"/></svg></span>
                    Italiano
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-[#F3E8FF]">
                    <span className="inline-block w-5 h-5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><rect width="640" height="480" fill="#f9e300"/><rect width="640" height="160" y="160" fill="#00a1de"/><rect width="640" height="160" y="320" fill="#ef3a3a"/></svg></span>
                    Kreyòl Ayisyen
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
}
