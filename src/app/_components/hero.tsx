import { Phone } from "lucide-react";
import imgHero from "../../../public/imgHero.png";
import raizesImg from "../../../public/raizes-removebg-preview.png";
import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-[#cc9afc] text-white relative overflow-hidden">
      <div>
        {/* background responsivo com transparência */}
        <Image
          src={imgHero}
          alt="Imagem de uma mulher olhando para o horizonte"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-60 lg:hidden"
        ></Image>

        <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>
      </div>
      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          <div className="space-y-4 mb-5">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Se Liga Moçada
            </h1>

            {/* Subtexto */}
            <p className="text-lg md:text-xl mb-8">
              Se liga, você não está sozinha. <br />
              Informação e apoio contra relacionamentos abusivos.
            </p>

            {/* Botões (CTAs) */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {/* Botão Saiba Mais */}
              <a
                href="#"
                className="bg-[#8C4FA3] px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit hover:bg-[#FF6F2D]"
              >
                Saiba Mais
              </a>

              {/* Botão Denuncie com ícone */}
              <a
                href="#"
                className="bg-[#8C4FA3] px-5 py-2 rounded-md font-semibold flex items-center justify-center gap-2 w-fit hover:bg-[#FF6F2D]"
              >
                <Phone className="text-white w-4 h-4" />
                Denuncie
              </a>
            </div>
            
          </div>

          <div className="hidden md:block h-full relative">
            <Image
              src={imgHero}
              alt="Imagem de uma mulher olhando para o horizonte"
              className="object-contain "
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
