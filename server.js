// Backend Express simples para responder ao endpoint /translate
const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());

app.post('/translate', (req, res) => {
  const { q, source, target } = req.body;
  // Simula tradução: só adiciona o idioma de destino ao texto
  res.json({ translatedText: `[${target}] ${q}` });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
