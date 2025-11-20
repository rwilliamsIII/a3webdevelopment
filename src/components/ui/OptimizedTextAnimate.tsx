"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function OptimizedTextAnimate({
  words,
  className,
  delay = 0,
}: {
  words: string;
  className?: string;
  delay?: number;
}) {
  const [rendered, setRendered] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  const wordsArray = words.split(" ");
  
  useEffect(() => {
    // Immediately show the text content
    if (!rendered && textRef.current) {
      const spans = textRef.current.querySelectorAll('span');
      
      // First set all spans to visible immediately
      spans.forEach(span => {
        span.style.opacity = '1';
        span.style.filter = 'blur(0px)';
      });
      
      setRendered(true);
      
      // Optional animation after initial render
      if (delay > 0) {
        setTimeout(() => {
          spans.forEach((span, index) => {
            setTimeout(() => {
              span.classList.add('animated');
            }, index * 50);
          });
        }, delay);
      }
    }
  }, [rendered, delay]);

  return (
    <div className={cn(className)} ref={textRef}>
      {wordsArray.map((word, idx) => (
        <span key={idx} className="transition-all duration-300">
          {word}{" "}
        </span>
      ))}
    </div>
  );
}
