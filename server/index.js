import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import { fileURLToPath } from 'node:url';

dotenv.config({ path: fileURLToPath(new URL('../.env', import.meta.url)) });

const app = express();
const port = process.env.PORT || 3001;
const apiBaseUrl = process.env.AI_API_BASE_URL || 'https://openrouter.ai/api/v1';
const apiKey = process.env.AI_API_KEY || process.env.OPENROUTER_API_KEY || process.env.OPENAI_API_KEY;
const model = process.env.AI_MODEL || 'openai/gpt-4o-mini';

app.use(cors());
app.use(express.json({ limit: '1mb' }));

app.post('/api/ai', async (req, res) => {
  try {
    if (!apiKey) {
      return res.status(400).json({ error: 'Missing AI_API_KEY, OPENROUTER_API_KEY, or OPENAI_API_KEY.' });
    }

    const { messages = [], systemPrompt = '' } = req.body ?? {};
    const conversation = systemPrompt
      ? [{ role: 'system', content: systemPrompt }, ...messages]
      : messages;

    const response = await fetch(`${apiBaseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
        ...(apiBaseUrl.includes('openrouter')
          ? {
              'HTTP-Referer': 'http://localhost:5173',
              'X-Title': 'MYC Industrial Portfolio'
            }
          : {})
      },
      body: JSON.stringify({
        model,
        messages: conversation,
        temperature: 0.5,
        max_tokens: 500
      })
    });

    const contentType = response.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      const text = await response.text();
      return res.status(502).json({ error: 'AI provider returned non-JSON response', details: text.slice(0, 1000) });
    }

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: data?.error?.message || data?.error || 'AI provider request failed.'
      });
    }

    const reply = data?.choices?.[0]?.message?.content?.trim() || 'I could not generate a response.';
    return res.json({ reply });
  } catch (error) {
    return res.status(500).json({ error: error instanceof Error ? error.message : 'Unexpected server error.' });
  }
});

app.listen(port, () => {
  console.log(`AI proxy listening on http://localhost:${port}`);
});