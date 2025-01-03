"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "motion/react";
import React, { useEffect, useState } from "react";

interface TypingAnimationProps extends MotionProps {
  phrases: string[];
  className?: string;
  typingSpeed?: number;
  backspaceSpeed?: number;
  pauseTime?: number;
  as?: React.ElementType;
}

export default function TypingAnimation({
  phrases,
  className,
  typingSpeed = 100,
  backspaceSpeed = 50,
  pauseTime = 1000,
  as: Component = "div",
  ...props
}: TypingAnimationProps) {
  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayedText.length < currentPhrase.length) {
      // typing forward
      timer = setTimeout(() => {
        setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayedText.length > 0) {
      // backspacing
      timer = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1));
      }, backspaceSpeed);
    } else {
      // finished typing or backspacing
      if (!isDeleting) {
        // pause before backspacing
        timer = setTimeout(() => setIsDeleting(true), pauseTime);
      } else {
        // move to next phrase
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timer);
  }, [
    displayedText,
    isDeleting,
    phrases,
    currentPhraseIndex,
    typingSpeed,
    backspaceSpeed,
    pauseTime,
  ]);

  return (
    <MotionComponent className={cn(className)} {...props}>
      {displayedText.length > 0 ? displayedText : "\u00A0"}
    </MotionComponent>
  );
}