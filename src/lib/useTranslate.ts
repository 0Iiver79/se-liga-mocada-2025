import { useState } from "react";

const API_URL = "https://translate.argosopentech.com/translate";

export function useTranslate() {
  const [loading, setLoading] = useState(false);
  const [translated, setTranslated] = useState("");

  async function translate(text: string, target: string, source: string = "pt") {
    setLoading(true);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ q: text, source, target, format: "text" })
      });
      const data = await res.json();
      console.log("API response:", data);
      if (data.translatedText) {
        setTranslated(data.translatedText);
      } else {
        setTranslated("");
        console.error("Erro na tradução:", data);
      }
    } catch (err) {
      setTranslated("");
      console.error("Erro ao conectar com a API de tradução:", err);
    }
    setLoading(false);
  }

  return { loading, translated, translate };
}
