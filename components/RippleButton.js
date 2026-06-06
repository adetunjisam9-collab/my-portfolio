"use client";
import { useRef } from "react";

export default function RippleButton({ href, children, className, target }) {
  const ref = useRef(null);

  const handleClick = (e) => {
    const btn = ref.current;
    const circle = document.createElement("span");
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;
    const rect = btn.getBoundingClientRect();
    circle.style.cssText = `
      width: ${diameter}px;
      height: ${diameter}px;
      left: ${e.clientX - rect.left - radius}px;
      top: ${e.clientY - rect.top - radius}px;
      position: absolute;
      border-radius: 50%;
      background: rgba(255,255,255,0.5);
      transform: scale(0);
      animation: rippleAnim 600ms linear;
      pointer-events: none;
    `;
    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  };

  return (
    <>
      <style>{`@keyframes rippleAnim { to { transform: scale(4); opacity: 0; } }`}</style>
      <a ref={ref} href={href} target={target} onClick={handleClick} className={`relative overflow-hidden ${className}`}>
        {children}
      </a>
    </>
  );
}
