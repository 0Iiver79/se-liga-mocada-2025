import { useState } from "react";

const API_URL = "/api/translate";

// Hook para traduzir texto único
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

	// Hook para traduzir array de textos
	export function useBatchTranslate() {
	const [loading, setLoading] = useState(false);
	const [translated, setTranslated] = useState<string[]>([]);

	async function translateAll(texts: string[], target: string, source: string = "pt") {
		setLoading(true);
		try {
			const results: string[] = [];
			for (const text of texts) {
				const res = await fetch(API_URL, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ q: text, source, target, format: "text" })
				});
				const data = await res.json();
				results.push(data.translatedText || "");
			}
			setTranslated(results);
		} catch (err) {
			setTranslated([]);
			console.error("Erro ao traduzir array:", err);
		}
		setLoading(false);
	}

	return { loading, translated, translateAll };
}

