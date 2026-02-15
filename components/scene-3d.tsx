"use client";

import { useRef, useEffect, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export default function Scene3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const timeRef = useRef(0);

  const initParticles = useCallback((width: number, height: number) => {
    const count = Math.min(120, Math.floor((width * height) / 8000));
    const particles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random(),
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }
    particlesRef.current = particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx!.scale(dpr, dpr);
      initParticles(rect.width, rect.height);
    }

    resize();
    window.addEventListener("resize", resize);

    function animate() {
      if (!canvas || !ctx) return;
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      timeRef.current += 0.005;

      // Read theme colors from CSS variables
      const style = getComputedStyle(document.documentElement);
      const primary = style.getPropertyValue("--primary").trim();
      const isDark = document.documentElement.classList.contains("dark");
      const gridAlpha = isDark ? 0.02 : 0.06;

      ctx.clearRect(0, 0, w, h);

      const particles = particlesRef.current;

      // Update & draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Gentle wave motion
        p.x += Math.sin(timeRef.current + p.z * 6) * 0.1;
        p.y += Math.cos(timeRef.current + p.z * 4) * 0.08;

        // Wrap around
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        // Draw particle
        const pulse = 0.7 + Math.sin(timeRef.current * 2 + i) * 0.3;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (0.5 + p.z * 0.5), 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${primary} / ${p.opacity * pulse})`;
        ctx.fill();
      }

      // Draw connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = dx * dx + dy * dy;
          const maxDist = 18000;
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.12;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `hsl(${primary} / ${alpha})`;
            ctx.stroke();
          }
        }
      }

      // Draw grid lines
      const gridColor = isDark ? "255, 255, 255" : "0, 0, 0";
      ctx.strokeStyle = `rgba(${gridColor}, ${gridAlpha})`;
      ctx.lineWidth = 0.5;
      const gridSize = 60;
      const offsetX = (timeRef.current * 10) % gridSize;
      for (let x = -gridSize + offsetX; x < w + gridSize; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      const offsetY = (timeRef.current * 8) % gridSize;
      for (let y = -gridSize + offsetY; y < h + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      animRef.current = requestAnimationFrame(animate);
    }

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
