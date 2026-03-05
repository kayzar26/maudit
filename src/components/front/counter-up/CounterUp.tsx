"use client";

import React, { useEffect, useState } from "react";

interface CounterUpProps {
  startAmount?: number;
  endAmount: number;
  duration?: number;
  suffix?: string;
}

export function CounterUp({
  startAmount = 0,
  endAmount,
  duration = 2,
  suffix = "",
}: CounterUpProps) {
  const [count, setCount] = useState(startAmount);

  useEffect(() => {
    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Calculate current value using easeOut timing
      const currentValue = Math.floor(progress * (endAmount - startAmount) + startAmount);
      setCount(currentValue);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [endAmount, duration, startAmount]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}
