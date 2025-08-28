"use client";

import React, { useEffect } from "react";
import { useLanguage } from "../../lib/LanguageContext";
import { useTranslate } from "../../lib/useTranslate";

export default function OndeBuscarAjuda() {
  const { language } = useLanguage();
  const { loading, translated, translate } = useTranslate();
  const originalText =
    "Se você ou alguém que você conhece está em um relacionamento abusivo, não está sozinha. Existem serviços gratuitos e instituições especializadas que oferecem acolhimento, orientação e proteção.";

  useEffect(() => {
    if (language !== "pt") {
      translate(originalText, language);
    }
  }, [language]);

  return (
    <section className="bg-gradient-to-br from-[#F9F9FB] to-[#e9d7f7] min-h-screen py-16 px-2 md:px-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-[#8C4FA3] mb-8 drop-shadow-lg">
          Onde Buscar Ajuda
        </h1>
        <p className="text-lg text-gray-700 text-center mb-10">
          {loading ? "Traduzindo..." : translated || originalText}
        </p>

        {/* Canais de denúncia e socorro */}
        <h2 className="text-3xl font-bold text-[#8C4FA3] mb-6 mt-10 text-center">
          Canais de Denúncia e Socorro
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Card Ligue 180 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-2 border-l-4 border-[#8C4FA3]">
            <div className="flex items-center gap-2 mb-2">
              {/* Ícone telefone */}
              {/* Ícone telefone */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-[#8C4FA3]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a2 2 0 011.94 1.52l.7 2.8a2 2 0 01-.45 1.95l-1.27 1.27a16.06 16.06 0 006.58 6.58l1.27-1.27a2 2 0 011.95-.45l2.8.7A2 2 0 0121 18.72V22a2 2 0 01-2 2h-1C7.61 24 3 19.39 3 13.5V12a2 2 0 012-2z"
                />
              </svg>
              <span className="font-bold text-lg">Ligue 180</span>
            </div>
            <p className="text-gray-700">
              Central de Atendimento à Mulher. Funciona 24h, todos os dias, em
              todo o Brasil. Serviço gratuito que recebe denúncias, orienta e
              encaminha para proteção.
            </p>
            <a
              className="text-[#8C4FA3] underline font-medium"
              href="https://www.gov.br/mdh/pt-br/assuntos/noticias/2019/marco/ligue-180"
              target="_blank"
            >
              Site oficial
            </a>
          </div>

          {/* Card DEAMs */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-2 border-l-4 border-[#8C4FA3]">
            <div className="flex items-center gap-2 mb-2">
              {/* Ícone delegacia */}
              {/* Ícone escudo */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-[#8C4FA3]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2l7 6v6c0 5-3.5 9-7 9s-7-4-7-9V8l7-6z"
                />
              </svg>
              <span className="font-bold text-lg">DEAMs</span>
            </div>
            <p className="text-gray-700">
              Delegacias Especializadas de Atendimento à Mulher. Atendimento,
              registro de boletim de ocorrência e orientação.
            </p>
          </div>

          {/* Card Casas da Mulher Brasileira */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-2 border-l-4 border-[#8C4FA3]">
            <div className="flex items-center gap-2 mb-2">
              {/* Ícone casa */}
              {/* Ícone casa */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-[#8C4FA3]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10"
                />
              </svg>
              <span className="font-bold text-lg">Casas da Mulher Brasileira</span>
            </div>
            <p className="text-gray-700">
              Centros com acolhimento psicossocial, orientação jurídica,
              abrigamento temporário e apoio ao trabalho. Presentes em várias
              capitais.
            </p>
            <a
              className="text-[#8C4FA3] underline font-medium"
              href="https://pt.wikipedia.org/wiki/Casa_da_Mulher_Brasileira"
              target="_blank"
            >
              Mais informações
            </a>
          </div>

          {/* Card CRAMs */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-2 border-l-4 border-[#8C4FA3]">
            <div className="flex items-center gap-2 mb-2">
              {/* Ícone apoio */}
              {/* Ícone mãos/apoio */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-[#8C4FA3]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 11l5-5m0 0l5 5m-5-5v12"
                />
              </svg>
              <span className="font-bold text-lg">CRAMs</span>
            </div>
            <p className="text-gray-700">
              Centros de Referência de Atendimento à Mulher. Acolhimento
              psicológico, social e jurídico gratuito. Consulte a Secretaria de
              Políticas para Mulheres do seu município.
            </p>
          </div>
        </div>

        {/* ONGs e projetos */}
        <h2 className="text-3xl font-bold text-[#8C4FA3] mb-6 mt-12 text-center">
          ONGs e Projetos de Apoio Direto
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Card Mapa do Acolhimento */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-2 border-l-4 border-[#8C4FA3]">
            <div className="flex items-center gap-2 mb-2">
              {/* Ícone mapa */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-[#8C4FA3]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 20l-5.447-2.724A2 2 0 013 15.382V6.618a2 2 0 011.553-1.894L9 2m6 18l5.447-2.724A2 2 0 0021 15.382V6.618a2 2 0 00-1.553-1.894L15 2m-6 18V2m6 18V2"
                />
              </svg>
              <span className="font-bold text-lg">Mapa do Acolhimento</span>
            </div>
            <p className="text-gray-700">
              Conecta mulheres a psicólogas e advogadas voluntárias.
            </p>
            <a
              className="text-[#8C4FA3] underline font-medium"
              href="https://www.mapadoacolhimento.org/"
              target="_blank"
            >
              Acessar site
            </a>
          </div>

          {/* Card SOS Fala Mulher */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-2 border-l-4 border-[#8C4FA3]">
            <div className="flex items-center gap-2 mb-2">
              {/* Ícone chat */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-[#8C4FA3]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2V10a2 2 0 012-2h2m6 0V6a2 2 0 00-2-2H8a2 2 0 00-2 2v2m6 0h-4"
                />
              </svg>
              <span className="font-bold text-lg">SOS Fala Mulher</span>
            </div>
            <p className="text-gray-700">
              Atendimento online por chat, vídeo ou áudio.
            </p>
            <a
              className="text-[#8C4FA3] underline font-medium"
              href="https://www.falamulher.ong.br/"
              target="_blank"
            >
              Acessar site
            </a>
          </div>

          {/* Card Justiceiras */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-2 border-l-4 border-[#8C4FA3]">
            <div className="flex items-center gap-2 mb-2">
              {/* Ícone justiça */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-[#8C4FA3]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v18m9-9H3"
                />
              </svg>
              <span className="font-bold text-lg">Projeto Justiceiras</span>
            </div>
            <p className="text-gray-700">
              Apoio psicológico, jurídico e social gratuito.
            </p>
            <a
              className="text-[#8C4FA3] underline font-medium"
              href="https://www.justiceiras.org.br/"
              target="_blank"
            >
              Acessar site
            </a>
          </div>

          {/* Card Instituto Amanhecer */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-2 border-l-4 border-[#8C4FA3]">
            <div className="flex items-center gap-2 mb-2">
              {/* Ícone amanhecer */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-[#8C4FA3]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <circle cx={12} cy={12} r={10} />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2"
                />
              </svg>
              <span className="font-bold text-lg">Instituto Amanhecer</span>
            </div>
            <p className="text-gray-700">
              Atendimento jurídico, psicológico e social.
            </p>
            <a
              className="text-[#8C4FA3] underline font-medium"
              href="https://institutoamanhecer.org/"
              target="_blank"
            >
              Acessar site
            </a>
          </div>

          {/* Card Instituto Justiça Delas */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-2 border-l-4 border-[#8C4FA3]">
            <div className="flex items-center gap-2 mb-2">
              {/* Ícone proteção */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-[#8C4FA3]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2l7 6v6c0 5-3.5 9-7 9s-7-4-7-9V8l7-6z"
                />
              </svg>
              <span className="font-bold text-lg">Instituto Justiça Delas</span>
            </div>
            <p className="text-gray-700">
              Acolhimento de mulheres em situação de vulnerabilidade.
            </p>
            <a
              className="text-[#8C4FA3] underline font-medium"
              href="https://institutojusticadelas.com.br/"
              target="_blank"
            >
              Acessar site
            </a>
          </div>

          {/* Card Instituto Nós Por Elas */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-2 border-l-4 border-[#8C4FA3]">
            <div className="flex items-center gap-2 mb-2">
              {/* Ícone campanha */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-[#8C4FA3]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="font-bold text-lg">Instituto Nós Por Elas</span>
            </div>
            <p className="text-gray-700">
              Campanha Sinal Vermelho: pedido de socorro silencioso em farmácias
              ou comércios parceiros.
            </p>
            <a
              className="text-[#8C4FA3] underline font-medium"
              href="https://nosporelas.com/"
              target="_blank"
            >
              Acessar site
            </a>
          </div>
        </div>

        {/* Pesquisas e direitos */}
        <h2 className="text-3xl font-bold text-[#8C4FA3] mb-6 mt-12 text-center">
          Pesquisas e Direitos
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Card CFEMEA */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-2 border-l-4 border-[#8C4FA3]">
            <div className="flex items-center gap-2 mb-2">
              {/* Ícone pesquisa */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-[#8C4FA3]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <circle cx={11} cy={11} r={8} />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35"
                />
              </svg>
              <span className="font-bold text-lg">CFEMEA</span>
            </div>
            <p className="text-gray-700">
              Centro Feminista de Estudos e Assessoria.
            </p>
            <a
              className="text-[#8C4FA3] underline font-medium"
              href="http://www.cfemea.org.br/"
              target="_blank"
            >
              Acessar site
            </a>
          </div>

          {/* Card Criola */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-2 border-l-4 border-[#8C4FA3]">
            <div className="flex items-center gap-2 mb-2">
              {/* Ícone mulher */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-[#8C4FA3]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <circle cx={12} cy={7} r={4} />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.5 21h13M12 11v10"
                />
              </svg>
              <span className="font-bold text-lg">Criola</span>
            </div>
            <p className="text-gray-700">
              ONG voltada para mulheres negras, promovendo justiça e autonomia.
            </p>
            <a
              className="text-[#8C4FA3] underline font-medium"
              href="https://criola.org.br/"
              target="_blank"
            >
              Acessar site
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
