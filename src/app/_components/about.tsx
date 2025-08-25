"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function About() {
  const slides = [
    {
      title: "Controle excessivo e ciúmes constantes",
      text: "Se o parceiro monitora suas ações, revisa suas mensagens ou demonstra ciúmes excessivos, isso é um sinal de controle abusivo.",
      img: "/briga-casal.jpg"
    },
    {
      title: "Manipulação emocional e culpa",
      text: "Quando você se sente constantemente culpado(a) ou manipulado(a) emocionalmente para ceder aos desejos do outro, é um comportamento abusivo.",
      img: "/briga-casal.jpg"
    },
    {
      title: "Agressões verbais ou humilhações",
      text: "Palavras ofensivas, insultos e humilhações frequentes são formas claras de abuso psicológico.",
      img: "/briga-casal.jpg"
    },
    {
      title: "Isolamento social e limitação de amizades",
      text: "Tentar afastar você de amigos e familiares é uma forma de controle e abuso emocional.",
      img: "/briga-casal.jpg"
    },
    {
      title: "Negação de sentimentos e opiniões",
      text: "Se suas opiniões, sentimentos e vontades são constantemente desvalorizados ou ignorados, isso é abusivo.",
      img: "/briga-casal.jpg"
    },
    {
      title: "Empoderamento e autoafirmação",
      text: "É fundamental se impor, estabelecer limites e buscar apoio. Informação e assertividade são formas de proteção e autoestima.",
      img: "/briga-casal.jpg"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="bg-[#F9F9FB] py-20 relative">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#8C4FA3] mb-16">
        Você sabe identificar um relacionamento abusivo?
      </h1>

      <div className="container mx-auto relative flex flex-col lg:flex-row items-center gap-12">
        {/* Imagem do slide */}
        <div className="relative w-full lg:w-1/2 h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-lg flex-shrink-0">
          <Image
            src={slides[current].img}
            alt={slides[current].title}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Carrossel de textos */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 w-full lg:w-1/2">
          <div className="bg-[#8C4FA3] text-white p-6 rounded-2xl shadow-md w-full transition-all duration-500">
            <h2 className="text-xl md:text-2xl font-bold mb-2">{slides[current].title}</h2>
            <p className="text-base md:text-lg">{slides[current].text}</p>
          </div>

          {/* Indicadores */}
          <div className="flex gap-2 mt-4 justify-center lg:justify-start">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current ? "bg-[#FF6F2D] w-6" : "bg-[#CC9AFC]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Arrows laterais fora do conteúdo */}
      <div className="absolute inset-y-0 left-0 flex items-center justify-start px-4 md:px-8 pointer-events-none">
        <button
          onClick={prevSlide}
          className="pointer-events-auto bg-white/20 hover:bg-[#FF6F2D] p-2 rounded-full transition"
        >
          <ChevronLeft className="w-10 h-10 text-[#8C4FA3] hover:text-white transition" />
        </button>
      </div>

      <div className="absolute inset-y-0 right-0 flex items-center justify-end px-4 md:px-8 pointer-events-none">
        <button
          onClick={nextSlide}
          className="pointer-events-auto bg-white/20 hover:bg-[#FF6F2D] p-2 rounded-full transition"
        >
          <ChevronRight className="w-10 h-10 text-[#8C4FA3] hover:text-white transition" />
        </button>
      </div>
    </section>
  );
}
