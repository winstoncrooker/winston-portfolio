"use client";

import { useState, useEffect } from "react";

interface TerminalTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

export default function TerminalText({
  text,
  speed = 50,
  delay = 0,
  className = "",
  onComplete,
}: TerminalTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(delayTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    if (displayedText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);

      return () => clearTimeout(timer);
    } else {
      if (!completed) {
        setCompleted(true);
        onComplete?.();
      }
    }
  }, [started, displayedText, text, speed, completed, onComplete]);

  if (!started) {
    return null;
  }

  return (
    <span className={className}>
      {displayedText}
      <span
        style={{
          display: "inline-block",
          animation: "terminal-blink 1s step-end infinite",
          marginLeft: "1px",
        }}
      >
        &#x2502;
      </span>
    </span>
  );
}
