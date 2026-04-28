import { useEffect, useState } from 'react';

export default function TypingText({ text, speed = 42, className = '' }) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    setDisplayText('');
    const timer = window.setInterval(() => {
      index += 1;
      setDisplayText(text.slice(0, index));
      if (index >= text.length) {
        window.clearInterval(timer);
      }
    }, speed);

    return () => window.clearInterval(timer);
  }, [speed, text]);

  return <span className={className}>{displayText}</span>;
}