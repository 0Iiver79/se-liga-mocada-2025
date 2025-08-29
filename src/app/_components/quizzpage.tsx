"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "../../lib/LanguageContext";
import { useTranslate } from "../../lib/useTranslate";

export function QuizzPage() {
  const [answers, setAnswers] = useState<string[]>(Array(10).fill(""));
  const [resultado, setResultado] = useState<string | null>(null);
  const [currentBlock, setCurrentBlock] = useState(0);
  const { language } = useLanguage();
  const { loading, translated, translate } = useTranslate();
  const originalTitle = "Quiz: Relacionamento Abusivo";

  useEffect(() => {
    if (language !== "pt") {
      translate(originalTitle, language);
    }
  }, [language]);

  const questions = [
    {
      question: "1) Quando você expressa sua opinião em uma conversa importante, seu parceiro geralmente:",
      options: [
        "Ouvi com atenção e respeito, mesmo que não concorde.",
        "Interrompe, ridiculariza ou desvaloriza o que você diz.",
        "Ouve, mas insiste que a opinião dele é a única válida."
      ],
    },
    {
      question: "2) Quando você deseja passar tempo com amigos, familiares ou sozinha, ele:",
      options: [
        "Apoia e entende a importância do seu espaço pessoal.",
        "Reclama, faz críticas ou tenta convencê-la a desistir.",
        "Concorda, mas usa comentários sutis para gerar culpa."
      ],
    },
    {
      question: "3) Quando você compartilha algo que a deixou triste ou insegura, a reação dele é:",
      options: [
        "Demonstra empatia, valida seus sentimentos e oferece apoio.",
        "Minimiza, dizendo que você está exagerando ou “fazendo drama”.",
        "Escuta, mas depois usa essa vulnerabilidade contra você em discussões."
      ],
    },
    {
      question: "4) Sobre decisões importantes (trabalho, estudos, finanças, amizades):",
      options: [
        "Ele conversa, respeita suas escolhas e celebra sua autonomia.",
        "Toma decisões por você ou tenta controlar suas escolhas.",
        "Dá a impressão de respeitar, mas manipula até que você faça o que ele quer."
      ],
    },
    {
      question: "5) Quando vocês discordam ou brigam, ele costuma:",
      options: [
        "Procurar resolver de forma calma, dialogando com respeito.",
        "Elevar o tom, usar chantagens emocionais ou ameaças.",
        "Se afastar e deixá-la com medo de perder a relação caso não ceda."
      ],
    },
    {
      question: "6) Sobre sua autoestima desde o início da relação, você sente que:",
      options: [
        "Cresceu, pois ele apoia e incentiva suas conquistas.",
        "Diminuiu, porque ele critica, compara ou desvaloriza você.",
        "Oscila, porque ele alterna entre elogios e atitudes que a fazem se sentir insegura."
      ],
    },
    {
      question: "7) Quando você coloca limites ou diz “não” a algo que não deseja fazer, ele:",
      options: [
        "Respeita sua decisão sem insistir.",
        "Pressiona, insiste ou tenta fazê-la mudar de ideia.",
        "Aceita no momento, mas volta a cobrar como se fosse uma dívida."
      ],
    },
    {
      question: "8) Como ele reage quando você precisa de apoio em momentos difíceis?",
      options: [
        "Oferece ajuda, escuta e dá suporte emocional.",
        "Ignora minhas necessidades ou me faz sentir culpada por pedir ajuda.",
        "Critica ou minimiza meus sentimentos, dizendo que estou exagerando."
      ],
    },
    {
      question: "9) Como ele se comporta com sua família e amigos?",
      options: [
        "Trata todos com respeito, incentiva minha relação com eles e se integra de forma saudável.",
        "Desvaloriza, critica ou tenta me afastar das pessoas próximas.",
        "Fica com ciúmes ou impõe restrições sobre com quem posso falar."
      ],
    },
    {
      question: "10) Como ele lida com regras e limites que você estabelece no relacionamento?",
      options: [
        "Respeita meus limites e discute diferenças de forma madura.",
        "Ignora meus limites ou me pressiona a mudá-los.",
        "Reage com raiva, chantagem ou manipulação quando digo 'não'."
      ],
    },
  ];

  const questionsPerBlock = 2;
  const totalBlocks = Math.ceil(questions.length / questionsPerBlock);
  const startIndex = currentBlock * questionsPerBlock;
  const currentQuestions = questions.slice(startIndex, startIndex + questionsPerBlock);

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
    let countA = 0;
    let countB = 0;
    let countC = 0;

    answers.forEach((answer) => {
      if (answer.startsWith("O")) countA++; 
      else if (answer.startsWith("I") || answer.startsWith("R") || answer.startsWith("D") || answer.startsWith("E")) countB++;
      else countC++;
    });

    let interpretation = "";
    if (countA > countB && countA > countC) {
      interpretation = "Seu relacionamento apresenta sinais de respeito, diálogo e parceria.";
    } else if (countB > countA && countB > countC) {
      interpretation = "Pode haver indícios de abuso emocional, manipulação ou controle. Reflita se este relacionamento está te fazendo bem.";
    } else {
      interpretation = "É provável que esteja vivendo um relacionamento tóxico. Procure apoio e converse com pessoas de confiança. Se necessário, contate canais de ajuda como o Ligue 180.";
    }

    setResultado(`Resultado do quiz:\n\n${interpretation}`);
  };

const percentage = Math.round((currentBlock / totalBlocks) * 100);


  return (
  <section id="quizz" className="bg-[#F9F9FB] py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#8C4FA3] mb-8">
        Quizz: Você sabe identificar um relacionamento tóxico?
      </h1>

      <div className="container mx-auto relative flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 group">
          <Image
            src="/quizzimg.jpg"
            alt="Quiz sobre relacionamentos abusivos"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto">
          {!resultado ? (
            <>
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

              <h2 className="text-2xl font-semibold mb-6">
                Responda às perguntas ({startIndex + 1} - {Math.min(startIndex + questionsPerBlock, questions.length)})
              </h2>

              {currentQuestions.map((q, i) => {
                const questionIndex = startIndex + i;
                return (
                  <div key={questionIndex} className="mb-4">
                    <label className="block text-sm font-medium mb-2">{q.question}</label>
                    <select
                      className="w-full border border-gray-300 rounded-md p-2"
                      value={answers[questionIndex]}
                      onChange={(e) => handleChange(questionIndex, e.target.value)}
                    >
                      <option value="">Escolha uma opção</option>
                      {q.options.map((opt, j) => (
                        <option key={j} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                );
              })}

              <button
                onClick={handleNext}
                className="bg-[#8C4FA3] text-white px-4 py-2 rounded-md hover:bg-[#7a3e8a] transition"
              >
                {currentBlock === totalBlocks - 1 ? "Finalizar Quiz" : "Próximas Perguntas"}
              </button>
            </>
          ) : (
            <div className="mt-6 p-4 bg-purple-100 rounded-md text-[#8C4FA3] whitespace-pre-line">
              {resultado}
              <p className="mt-2">
                Precisa de ajuda? Ligue <strong>180</strong> ou procure uma Delegacia da Mulher mais próxima.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
