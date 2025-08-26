"use client";

import { useState } from "react";
import Image from "next/image";

export function QuizzPage() {
  const [answers, setAnswers] = useState<string[]>(Array(10).fill(""));
  const [resultado, setResultado] = useState<string | null>(null);
  const [currentBlock, setCurrentBlock] = useState(0); // controla qual "bloco de 2 perguntas" está sendo exibido

  const questions = [
    {
      question: "1. Qual é um sinal comum de um relacionamento abusivo?",
      options: ["Comunicação aberta", "Controle excessivo", "Respeito mútuo"],
      correct: "Controle excessivo",
      feedback:
        "Controle excessivo é um dos principais sinais de alerta em relacionamentos abusivos.",
    },
    {
      question:
        "2. O que você deve fazer se suspeitar que está em um relacionamento abusivo?",
      options: [
        "Ignorar os sinais",
        "Buscar ajuda e apoio",
        "Tentar resolver sozinho",
      ],
      correct: "Buscar ajuda e apoio",
      feedback:
        "Buscar ajuda e apoio é essencial. Ignorar ou enfrentar sozinho pode ser perigoso.",
    },
    {
      question:
        "3. Como uma pessoa abusiva costuma reagir quando você tenta impor limites?",
      options: [
        "Respeita e aceita tranquilamente",
        "Reage com raiva, chantagem ou ameaças",
        "Conversa de forma aberta",
      ],
      correct: "Reage com raiva, chantagem ou ameaças",
      feedback:
        "Pessoas abusivas geralmente não respeitam limites e podem reagir de forma agressiva.",
    },
    {
      question: "4. O ciúme excessivo pode ser considerado um sinal de abuso?",
      options: ["Sim", "Não"],
      correct: "Sim",
      feedback:
        "Ciúme excessivo frequentemente é usado como forma de controle e manipulação.",
    },
    {
      question: "5. O abuso em um relacionamento é apenas físico?",
      options: [
        "Sim",
        "Não, pode ser também psicológico, financeiro e sexual",
      ],
      correct: "Não, pode ser também psicológico, financeiro e sexual",
      feedback:
        "O abuso pode assumir várias formas: psicológico, financeiro, sexual e até digital.",
    },
    {
      question: "6. O isolamento da vítima de amigos e familiares é:",
      options: ["Um sinal de abuso", "Uma prova de amor", "Algo normal"],
      correct: "Um sinal de abuso",
      feedback:
        "Isolar a vítima é uma estratégia comum de abusadores para enfraquecer seu apoio social.",
    },
    {
      question: "7. Quem pode sofrer em relacionamentos abusivos?",
      options: [
        "Somente mulheres",
        "Homens e mulheres",
        "Somente casais casados",
      ],
      correct: "Homens e mulheres",
      feedback:
        "Homens e mulheres podem sofrer abuso. Embora mulheres sejam maioria, o abuso não tem gênero.",
    },
    {
      question: "8. O que significa 'violência psicológica'?",
      options: [
        "Agressões físicas",
        "Insultos, humilhações e manipulações",
        "Negar dinheiro ou apoio financeiro",
      ],
      correct: "Insultos, humilhações e manipulações",
      feedback:
        "Violência psicológica envolve manipulações, insultos, humilhações e ameaças.",
    },
    {
      question:
        "9. Se um amigo te contar que sofre abuso, o que NÃO se deve fazer?",
      options: [
        "Ouvir sem julgamentos",
        "Culpar a vítima",
        "Incentivar a buscar ajuda",
      ],
      correct: "Culpar a vítima",
      feedback:
        "Nunca culpe a vítima. O apoio deve ser empático e sem julgamentos.",
    },
    {
      question:
        "10. Qual é o número da Central de Atendimento à Mulher no Brasil?",
      options: ["190", "180", "192"],
      correct: "180",
      feedback:
        "O número 180 é o canal oficial de denúncia e orientação para mulheres em situação de violência.",
    },
  ];

  const questionsPerBlock = 2;
  const totalBlocks = Math.ceil(questions.length / questionsPerBlock);
  const startIndex = currentBlock * questionsPerBlock;
  const currentQuestions = questions.slice(
    startIndex,
    startIndex + questionsPerBlock
  );

  const handleChange = (index: number, value: string) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
  };

  const handleNext = () => {
    if (currentBlock < totalBlocks - 1) {
      setCurrentBlock(currentBlock + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    let score = 0;
    const feedbacks: string[] = [];

    questions.forEach((q, index) => {
      if (answers[index] === q.correct) {
        score++;
        feedbacks.push(`Pergunta ${index + 1}: ✅ Correto! ${q.feedback}`);
      } else {
        feedbacks.push(`Pergunta ${index + 1}: ❌ Incorreto. ${q.feedback}`);
      }
    });

    setResultado(
      `Você acertou ${score} de ${questions.length} perguntas.\n\n${feedbacks.join(
        "\n"
      )}`
    );
  };

  // progresso em porcentagem
  const percentage = Math.round(((currentBlock + 1) / totalBlocks) * 100);

  return (
    <section className="bg-[#F9F9FB] py-20 relative">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#8C4FA3] mb-16">
       Quiz: Você sabe identificar um relacionamento abusivo?
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
        <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto">
          {!resultado ? (
            <>
              {/* Barra de progresso */}
              <div className="mb-6">
                <div className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                  <span>Progresso</span>
                  <span>{percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-[#8C4FA3] h-3 rounded-full transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>

              {/* Perguntas */}
              <h2 className="text-2xl font-semibold mb-6">
                Responda às perguntas ({startIndex + 1} -{" "}
                {Math.min(startIndex + questionsPerBlock, questions.length)})
              </h2>

              {currentQuestions.map((q, i) => {
                const questionIndex = startIndex + i;
                return (
                  <div key={questionIndex} className="mb-4">
                    <label className="block text-sm font-medium mb-2">
                      {q.question}
                    </label>
                    <select
                      className="w-full border border-gray-300 rounded-md p-2"
                      value={answers[questionIndex]}
                      onChange={(e) =>
                        handleChange(questionIndex, e.target.value)
                      }
                    >
                      <option value="">Escolha uma opção</option>
                      {q.options.map((opt, j) => (
                        <option key={j} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              })}

              <button
                onClick={handleNext}
                className="bg-[#8C4FA3] text-white px-4 py-2 rounded-md hover:bg-[#7a3e8a] transition"
              >
                {currentBlock === totalBlocks - 1
                  ? "Finalizar Quiz"
                  : "Próximas Perguntas"}
              </button>
            </>
          ) : (
            <div className="mt-6 p-4 bg-purple-100 rounded-md text-[#8C4FA3] whitespace-pre-line">
              {resultado}
              <p className="mt-2">
                Precisa de ajuda? Ligue <strong>180</strong> ou procure uma
                Delegacia da Mulher mais próxima.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
