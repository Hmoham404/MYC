import { AnimatePresence, motion } from 'framer-motion';
import { Bot, Sparkles, Send } from 'lucide-react';
import { useEffect, useState } from 'react';
import GlassCard from '../common/GlassCard';
import SectionHeading from '../common/SectionHeading';
import { buildSystemPrompt } from '../../config/aiPrompt';
import { useLanguage } from '../../context/LanguageContext';
import { getContent } from '../../data/content';

export default function CompanyChatbot() {
  const { lang } = useLanguage();
  const content = getContent(lang).chatbot;
  const [messages, setMessages] = useState([{ role: 'assistant', content: content.assistantIntro }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMessages([{ role: 'assistant', content: content.assistantIntro }]);
    setInput('');
  }, [content.assistantIntro]);

  const submitPrompt = async (promptText) => {
    const trimmedInput = promptText.trim();
    if (!trimmedInput || loading) {
      return;
    }

    const nextMessages = [...messages, { role: 'user', content: trimmedInput }];
    setMessages(nextMessages);
    setLoading(true);

    try {
      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemPrompt: buildSystemPrompt(lang),
          messages: nextMessages
        })
      });

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
    const trimmedInput = input.trim();
    if (!trimmedInput) {
      return;
    }

    setInput('');
    await submitPrompt(trimmedInput);
  };

  return (
    <section id="chatbot" className="px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow={lang === 'fr' ? 'Chatbot société' : 'Company chatbot'}
          title={lang === 'fr' ? 'Pose une question sur MYC Beauty Innovation.' : 'Ask a question about MYC Beauty Innovation.'}
          copy={lang === 'fr' ? 'Questions proposées, réponses directes et assistant centré sur la société, Monastir et la stratégie B2B.' : 'Suggested questions, direct answers, and an assistant focused on the company, Monastir, and B2B strategy.'}
        />

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <GlassCard className="p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-cyan-300" />
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">{content.questionsTitle}</p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-50">{content.subtitle}</h3>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {content.quickQuestions.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => void submitPrompt(question)}
                  className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-4 text-left text-sm leading-6 text-cyan-100 transition hover:border-cyan-300/40 hover:bg-cyan-300/15"
                >
                  {question}
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">
                {lang === 'fr' ? 'Focus société' : 'Company focus'}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {lang === 'fr'
                  ? 'MYC Beauty Innovation combine packaging premium, innovation produit, R&D, industrialisation et durabilité dans une logique B2B internationale.'
                  : 'MYC Beauty Innovation combines premium packaging, product innovation, R&D, industrialization, and sustainability in an international B2B model.'}
              </p>
            </div>
          </GlassCard>

          <GlassCard className="overflow-hidden p-0">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">{content.title}</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-50">{content.subtitle}</h3>
              </div>
              <Bot className="h-5 w-5 text-cyan-300" />
            </div>

            <div className="max-h-[32rem] space-y-3 overflow-y-auto px-5 py-5 sm:px-6">
              <AnimatePresence initial={false}>
                {messages.map((message, index) => (
                  <motion.div
                    key={`${message.role}-${index}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-7 ${
                      message.role === 'user'
                        ? 'ml-auto bg-cyan-300 text-slate-950'
                        : 'border border-white/10 bg-slate-950/60 text-slate-200'
                    }`}
                  >
                    {message.content}
                  </motion.div>
                ))}
              </AnimatePresence>

              {loading ? (
                <div className="max-w-[85%] rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-400">
                  {content.loading}
                </div>
              ) : null}
            </div>

            <form onSubmit={sendMessage} className="border-t border-white/10 p-4 sm:p-5">
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
        </div>
      </div>
    </section>
  );
}