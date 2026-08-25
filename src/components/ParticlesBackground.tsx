import React, { useEffect, useRef } from 'react';

export const ParticlesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const particlesCount = Math.min(Math.floor((width * height) / 16000), 75);
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseAlpha: number;
      alpha: number;
      color: string;
      pulseSpeed: number;
    }> = [];

    const goldColors = [
      'rgba(229, 169, 60, ',
      'rgba(253, 210, 110, ',
      'rgba(217, 119, 6, ',
      'rgba(255, 229, 127, '
    ];

    for (let i = 0; i < particlesCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 2 + 0.8,
        baseAlpha: Math.random() * 0.4 + 0.15,
        alpha: Math.random() * 0.4 + 0.15,
        color: goldColors[Math.floor(Math.random() * goldColors.length)],
        pulseSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Render radiant golden glowing nodes & connecting threads
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Interactive mouse repulsion
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          p.x -= (dx / dist) * 0.7;
          p.y -= (dy / dist) * 0.7;
        }

        p.alpha = p.baseAlpha + Math.sin(time * 2 + i) * 0.15;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.max(0.08, p.alpha)})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#E5A93C';
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connect nearby particles with subtle golden network threads
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist2 < 120) {
            const lineAlpha = (1 - dist2 / 120) * 0.2;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(229, 169, 60, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background ambient radial gradients for glowing aura atmosphere */}
      <div 
        className="absolute -top-[15%] right-[5%] w-[650px] h-[650px] rounded-full blur-[140px] pointer-events-none opacity-25 bg-gradient-to-br from-[#E5A93C] via-[#B45309] to-transparent" 
      />
      <div 
        className="absolute top-[40%] -left-[10%] w-[550px] h-[550px] rounded-full blur-[150px] pointer-events-none opacity-20 bg-gradient-to-tr from-[#D97706] via-[#78350F] to-transparent" 
      />
      <div 
        className="absolute bottom-[10%] right-[15%] w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none opacity-15 bg-gradient-to-t from-[#B45309] to-transparent" 
      />
      {/* Subtle tech grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(229,169,60,0.15),rgba(255,255,255,0))] pointer-events-none" />
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
    </div>
  );
};

