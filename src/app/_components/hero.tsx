"use client";

import { Phone } from "lucide-react";
import imgHero from "../../../public/imgHero.png";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../lib/LanguageContext";
import { useTranslate } from "../../lib/useTranslate";
import { useEffect } from "react";

export function Hero() {
  const { language } = useLanguage();
  const { loading, translated, translate } = useTranslate();
  const originalText =
    "Se liga, você não está sozinha. Informação e apoio contra relacionamentos abusivos.";

  useEffect(() => {
    if (language !== "pt") {
      translate(originalText, language);
    }
  }, [language]);

  return (
    <section id="home" className="bg-[#F3E8FF] text-[#1C1C1E] relative overflow-hidden">
      <div>
        <Image
          src={imgHero}
          alt="Imagem de uma mulher olhando para o horizonte"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-50 lg:hidden"
        />
        <div className="absolute inset-0 bg-black opacity-20 md:hidden"></div>
      </div>

      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4 mb-5 text-center md:text-left relative">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-2 text-[#8C4FA3]">
              Se Liga Moçada
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#E05A8D]">
              Sua voz importa. Sua segurança vem primeiro.
            </h2>

            <p className="text-lg md:text-xl mb-4 text-[#6E6E73]">
              {loading ? "Traduzindo..." : translated || originalText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-2">
              {/* Botão Saiba Mais */}
              <Link href="/ondebuscarajuda">
                <button className="bg-[#8C4FA3] px-5 py-2 rounded-md text-white hover:bg-[#6B2C91] transition">
                  Saiba Mais
                </button>
              </Link>

              {/* Botão Denuncie com ícone */}
              <a
                href="https://delegaciavirtual.sinesp.gov.br/portal/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#CC9AFC] px-5 py-2 rounded-md font-semibold text-[#1C1C1E] flex items-center justify-center gap-2 w-fit hover:bg-[#E05A8D] hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                Denuncie
              </a>
            </div>


            <p className="text-sm text-[#8C4FA3] max-w-xl mx-auto md:mx-0">
              Ao clicar em &quot;Denuncie&quot;, você será direcionado para o boletim online oficial do Governo Federal. Sua denúncia é sigilosa e pode salvar vidas. Não hesite em buscar ajuda!
            </p>
          </div>

          <div className="hidden md:block h-full relative">
            <Image
              src={imgHero}
              alt="Imagem de uma mulher olhando para o horizonte"
              className="object-contain"
              fill
              sizes="(max-width: 768px) 0vw, 50vw"
              quality={100}
              priority
            />
          </div>
        </article>
      </div>
    </section>
  );
}
