"use client";
import { ongs } from "@/data/ongs";
import { OngCard } from "@/components/OngCard";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "@/components/ui/autoplay";


import React, { useState, useEffect } from "react";
import type { UseEmblaCarouselType } from "embla-carousel-react";

export function OngsCarousel() {
  const [embla, setEmbla] = useState<UseEmblaCarouselType[1] | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Atualiza o índice selecionado ao trocar slide
  const onSelect = () => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  };

  // Atualiza o listener quando embla muda
  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

  return (
    <div className="relative">
      <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 3500 })]} setApi={setEmbla}>
  <CarouselPrevious className="bg-white/20 text-[#8C4FA3] p-2 rounded-full transition pointer-events-auto hover:bg-[#FF6F2D] border-none shadow-md" />
        <CarouselContent>
          {ongs.map((ong) => (
            <CarouselItem key={ong.nome} className="basis-1/3 flex justify-center px-4">
              <OngCard {...ong} />
            </CarouselItem>
          ))}
        </CarouselContent>
  <CarouselNext className="bg-white/20 text-[#8C4FA3] p-2 rounded-full transition pointer-events-auto hover:bg-[#FF6F2D] border-none shadow-md" />
      </Carousel>
      {/* Bolinhas de navegação */}
      <div className="flex justify-center gap-2 mt-8">
        {ongs.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${selectedIndex === idx ? "bg-[#FF6F2D] w-6" : "bg-[#CC9AFC]"}`}
            onClick={() => embla && embla.scrollTo(idx)}
            aria-label={`Ir para o card ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
