import { AnimatePresence, motion } from 'framer-motion';
import { Bot, MessageCircleMore, Send, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import GlassCard from '../common/GlassCard';
import { buildSystemPrompt } from '../../config/aiPrompt';
import { useLanguage } from '../../context/LanguageContext';
import { getContent } from '../../data/content';

export default function ChatbotFab() {
  const [open, setOpen] = useState(false);
  const { lang } = useLanguage();
  const content = getContent(lang).chatbot;
  const [messages, setMessages] = useState([{ role: 'assistant', content: content.assistantIntro }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMessages([{ role: 'assistant', content: content.assistantIntro }]);
    setOpen(false);
  }, [content.assistantIntro]);

  const submitPrompt = async (promptText) => {
    const trimmedInput = promptText.trim();
    if (!trimmedInput || loading) {
      return;
    }

    const nextMessages = [...messages, { role: 'user', content: trimmedInput }];
    setMessages(nextMessages);
    setInput('');
    setLoading(true);

    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL || '';
      const url = baseUrl ? `${baseUrl.replace(/\/$/, '')}/api/ai` : '/api/ai';
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemPrompt: buildSystemPrompt(lang),
          messages: nextMessages
        })
      });

      const contentType = response.headers.get('content-type') || '';
      if (!contentType.includes('application/json')) {
        const text = await response.text();
        throw new Error(`Invalid JSON response from proxy: ${text.slice(0, 240)}`);
      }

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || 'AI request failed');
      }

      setMessages((currentMessages) => [...currentMessages, { role: 'assistant', content: data.reply }]);
    } catch (error) {
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: 'assistant',
          content:
            error instanceof Error
              ? `${lang === 'fr' ? 'Le proxy IA est inaccessible pour le moment' : 'The AI proxy is not reachable yet'}: ${error.message}`
              : lang === 'fr'
                ? 'Le proxy IA est inaccessible pour le moment.'
                : 'The AI proxy is not reachable yet.'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = async (event) => {
    event.preventDefault();
    await submitPrompt(input);
    setInput('');
  };

  const quickQuestions = content.quickQuestions || [];

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3">
        <span className="hidden rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-xs font-semibold text-cyan-100 shadow-[0_12px_30px_rgba(6,182,212,0.18)] sm:inline-flex">
          {content.buttonLabel}
        </span>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-12 w-12 place-items-center rounded-full border border-cyan-300/25 bg-cyan-300 text-slate-950 shadow-[0_16px_40px_rgba(6,182,212,0.28)] transition hover:scale-105"
          aria-label={content.buttonLabel}
        >
          {open ? <X className="h-6 w-6" /> : <MessageCircleMore className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.24 }}
            className="fixed bottom-20 right-4 z-50 w-[min(92vw,22rem)]"
          >
            <GlassCard className="overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">{content.title}</p>
                  <h3 className="text-base font-semibold text-slate-50">{content.subtitle}</h3>
                </div>
                <Bot className="h-5 w-5 text-cyan-300" />
              </div>

              {quickQuestions.length ? (
                <div className="border-b border-white/10 px-4 py-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-slate-400">
                    {content.questionsTitle || 'Questions proposées'}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {quickQuestions.map((question) => (
                      <button
                        key={question}
                        type="button"
                        onClick={() => {
                          setOpen(true);
                          void submitPrompt(question);
                        }}
                        className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-left text-xs leading-5 text-cyan-100 transition hover:border-cyan-300/40 hover:bg-cyan-300/15"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="max-h-[26rem] space-y-3 overflow-y-auto px-4 py-4">
                {messages.map((message, index) => (
                  <div
                    key={`${message.role}-${index}`}
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-7 ${
                      message.role === 'user'
                        ? 'ml-auto bg-cyan-300 text-slate-950'
                        : 'border border-white/10 bg-slate-950/60 text-slate-200'
                    }`}
                  >
                    {message.content}
                  </div>
                ))}
                {loading ? (
                  <div className="max-w-[85%] rounded-3xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-400">
                    {content.loading}
                  </div>
                ) : null}
              </div>

              <form onSubmit={sendMessage} className="border-t border-white/10 p-3">
                <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/60 px-3 py-2">
                  <input
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    placeholder={content.placeholder}
                    className="min-w-0 flex-1 bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500"
                  />
                  <button
                    type="submit"
                    className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-300 text-slate-950 transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
                    disabled={loading}
                    aria-label="Send message"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </GlassCard>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}