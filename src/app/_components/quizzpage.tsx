"use client";

import { useState } from "react";
import Image from "next/image";

export function QuizzPage() {
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [resultado, setResultado] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let score = 0;
    let feedback = [];

    if (q1 === "Controle excessivo") {
      score++;
      feedback.push("Pergunta 1: Correto! Controle excessivo é um sinal de relacionamento abusivo.");
    } else {
      feedback.push("Pergunta 1: Atenção! Controle excessivo é um sinal de alerta.");
    }

    if (q2 === "Buscar ajuda e apoio") {
      score++;
      feedback.push("Pergunta 2: Correto! Sempre busque apoio de amigos, família ou órgãos competentes.");
    } else {
      feedback.push("Pergunta 2: Cuidado! Ignorar sinais ou tentar resolver sozinho pode ser perigoso.");
    }

    setResultado(`Você acertou ${score} de 2 perguntas.\n${feedback.join("\n")}`);
  };

  return (
    <section className="bg-[#F9F9FB] py-20 relative">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#8C4FA3] mb-16">
        Quiz: Teste seus conhecimentos sobre relacionamentos abusivos
      </h1>

      <div className="container mx-auto relative flex flex-col lg:flex-row items-center gap-12">
        {/* Imagem ilustrativa */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/quiz-image.jpg"
            alt="Quiz sobre relacionamentos abusivos"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Formulário do quiz */}
        <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Teste seus conhecimentos</h2>
          <p className="mb-4">
            Responda às perguntas abaixo para avaliar seu entendimento sobre relacionamentos abusivos.
          </p>

          <form onSubmit={handleSubmit}>
            {/* Pergunta 1 */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                1. Qual é um sinal comum de um relacionamento abusivo?
              </label>
              <select
                className="w-full border border-gray-300 rounded-md p-2"
                value={q1}
                onChange={(e) => setQ1(e.target.value)}
              >
                <option value="">Escolha uma opção</option>
                <option>Comunicação aberta</option>
                <option>Controle excessivo</option>
                <option>Respeito mútuo</option>
              </select>
            </div>

            {/* Pergunta 2 */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                2. O que você deve fazer se suspeitar que está em um relacionamento abusivo?
              </label>
              <select
                className="w-full border border-gray-300 rounded-md p-2"
                value={q2}
                onChange={(e) => setQ2(e.target.value)}
              >
                <option value="">Escolha uma opção</option>
                <option>Ignorar os sinais</option>
                <option>Buscar ajuda e apoio</option>
                <option>Tentar resolver sozinho</option>
              </select>
            </div>

            {/* Botão */}
            <button
              type="submit"
              className="bg-[#8C4FA3] text-white px-4 py-2 rounded-md hover:bg-[#7a3e8a] transition"
            >
              Enviar Respostas
            </button>
          </form>

          {/* Resultado com explicações */}
          {resultado && (
            <div className="mt-6 p-4 bg-purple-100 rounded-md text-[#8C4FA3] whitespace-pre-line">
              {resultado}
              <p className="mt-2">
                Precisa de ajuda? Ligue 180 ou procure uma Delegacia da Mulher mais próxima.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
