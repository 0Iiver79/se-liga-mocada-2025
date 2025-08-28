"use client";

import React from "react";

export default function OndeBuscarAjuda() {
  return (
    <section className="bg-[#F9F9FB] py-20 px-4 md:px-20">
      <h1 className="text-4xl font-bold text-center text-[#8C4FA3] mb-12">
        Onde Buscar Ajuda
      </h1>

      <p className="text-gray-700 mb-8">
        Se você ou alguém que você conhece está em um relacionamento abusivo,
        não está sozinha. Existem serviços gratuitos e instituições especializadas
        que oferecem acolhimento, orientação e proteção.
      </p>

      {/* Canais de denúncia e socorro */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-[#8C4FA3] mb-4">
          Canais de Denúncia e Socorro
        </h2>

        <ul className="list-disc list-inside space-y-4 text-gray-700">
          <li>
            <strong>Ligue 180 – Central de Atendimento à Mulher</strong>
            <p>Funciona 24 horas por dia, todos os dias, em todo o território nacional. Serviço gratuito que recebe denúncias de violência, orienta sobre direitos e encaminha para proteção.</p>
            <p>Site oficial: <a className="text-blue-600 underline" href="https://www.gov.br/mdh/pt-br/assuntos/noticias/2019/marco/ligue-180" target="_blank">https://www.gov.br/mdh/pt-br/assuntos/noticias/2019/marco/ligue-180</a></p>
          </li>

          <li>
            <strong>Delegacias Especializadas de Atendimento à Mulher (DEAMs)</strong>
            <p>Atendimento de mulheres em situação de violência, registro de boletim de ocorrência e orientação.</p>
          </li>

          <li>
            <strong>Casas da Mulher Brasileira</strong>
            <p>Centros com acolhimento psicossocial, orientação jurídica, abrigamento temporário e apoio ao trabalho. Presentes em várias capitais.</p>
            <p>Mais informações: <a className="text-blue-600 underline" href="https://pt.wikipedia.org/wiki/Casa_da_Mulher_Brasileira" target="_blank">https://pt.wikipedia.org/wiki/Casa_da_Mulher_Brasileira</a></p>
          </li>

          <li>
            <strong>Centros de Referência de Atendimento à Mulher (CRAMs)</strong>
            <p>Oferecem acolhimento psicológico, social e jurídico de forma gratuita. Consulte a Secretaria de Políticas para Mulheres do seu município.</p>
          </li>
        </ul>
      </div>

      {/* ONGs e projetos */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-[#8C4FA3] mb-4">
          ONGs e Projetos de Apoio Direto
        </h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700">
          <li>
            <strong>Mapa do Acolhimento</strong> – Conecta mulheres a psicólogas e advogadas voluntárias.<br/>
            <a className="text-blue-600 underline" href="https://www.mapadoacolhimento.org/" target="_blank">https://www.mapadoacolhimento.org/</a>
          </li>
          <li>
            <strong>SOS Fala Mulher</strong> – Atendimento online por chat, vídeo ou áudio.<br/>
            <a className="text-blue-600 underline" href="https://www.falamulher.ong.br/" target="_blank">https://www.falamulher.ong.br/</a>
          </li>
          <li>
            <strong>Projeto Justiceiras</strong> – Apoio psicológico, jurídico e social gratuito.<br/>
            <a className="text-blue-600 underline" href="https://www.justiceiras.org.br/" target="_blank">https://www.justiceiras.org.br/</a>
          </li>
          <li>
            <strong>Instituto Amanhecer</strong> – Atendimento jurídico, psicológico e social.<br/>
            <a className="text-blue-600 underline" href="https://institutoamanhecer.org/" target="_blank">https://institutoamanhecer.org/</a>
          </li>
          <li>
            <strong>Instituto Justiça Delas</strong> – Acolhimento de mulheres em situação de vulnerabilidade.<br/>
            <a className="text-blue-600 underline" href="https://institutojusticadelas.com.br/" target="_blank">https://institutojusticadelas.com.br/</a>
          </li>
          <li>
            <strong>Instituto Nós Por Elas – Campanha Sinal Vermelho</strong> – Pedido de socorro silencioso em farmácias ou comércios parceiros.<br/>
            <a className="text-blue-600 underline" href="https://nosporelas.com/" target="_blank">https://nosporelas.com/</a>
          </li>
        </ul>
      </div>

      {/* Pesquisas e direitos */}
      <div>
        <h2 className="text-2xl font-semibold text-[#8C4FA3] mb-4">
          Pesquisas e Direitos
        </h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700">
          <li>
            <strong>CFEMEA – Centro Feminista de Estudos e Assessoria</strong><br/>
            <a className="text-blue-600 underline" href="http://www.cfemea.org.br/" target="_blank">http://www.cfemea.org.br/</a>
          </li>
          <li>
            <strong>Criola</strong> – ONG voltada para mulheres negras, promovendo justiça e autonomia.<br/>
            <a className="text-blue-600 underline" href="https://criola.org.br/" target="_blank">https://criola.org.br/</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
