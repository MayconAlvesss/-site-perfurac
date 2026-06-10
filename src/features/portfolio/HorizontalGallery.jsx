import { useState, useEffect, useRef } from 'react';
import EditableMedia from '../../components/EditableMedia';

const lerp = (start, end, factor) => start + (end - start) * factor;

const HorizontalGallery = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrameId;

    const update = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const dist = rect.height - window.innerHeight;
      let p = -rect.top / dist;
      p = Math.max(0, Math.min(1, p));
      
      setProgress(prev => {
        const next = lerp(prev, p, 0.1);
        if (containerRef.current) {
          containerRef.current.style.transform = `translate3d(${-next * 300}vw, 0, 0)`;
        }
        return next;
      });

      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const projects = [
    {
      id: 1,
      name: "Complexo Viário SP",
      type: "Estacas Raiz",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Torre Empresarial Sul",
      type: "Hélice Contínua",
      img: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Expansão Metroviária",
      type: "Cortina Secante",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dbd?q=80&w=2000&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Ponte Estaiada BR",
      type: "Cravação",
      img: "https://images.unsplash.com/photo-1588557132645-ff567110cafd?q=80&w=2000&auto=format&fit=crop",
    },
  ];

  return (
    <div
      id="obras"
      ref={sectionRef}
      className="relative bg-branco text-carbono"
      style={{ height: '400vh' }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        <div ref={containerRef} className="flex h-full w-max will-change-transform">
          <div className="w-screen h-screen flex flex-col justify-center px-10 md:px-32 shrink-0 bg-creme z-10 border-r border-carbono/10">
            <span className="text-vermelhoP uppercase tracking-widest text-[10px] font-black mb-6 block">
              // Portfólio
            </span>
            <h2 className="text-[clamp(4rem,10vw,12rem)] font-serif font-bold leading-none tracking-tighter text-carbono">
              OBRAS DE<br />
              <span className="text-vermelhoP font-sans text-[4vw] tracking-normal italic">
                DESTAQUE
              </span>
            </h2>
          </div>

          {projects.map((p) => (
            <div
              key={p.id}
              className="w-[85vw] md:w-[65vw] h-screen relative shrink-0 overflow-hidden group border-r border-branco/10 bg-carbono"
            >
              <div className="w-full h-full relative overflow-hidden group">
                <EditableMedia
                  initialSrc={p.img}
                  className="absolute inset-0 w-full h-full opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-carbono/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="absolute bottom-0 left-0 w-full p-10 md:p-20 flex flex-col justify-end translate-y-8 opacity-60 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                  <span className="text-xs font-bold text-vermelhoP mb-4 uppercase tracking-widest bg-carbono/50 w-fit px-3 py-1 rounded backdrop-blur-sm text-white">
                    Obra 0{p.id}
                  </span>
                  <h3 className="text-5xl md:text-7xl font-serif font-bold text-white">
                    {p.name}
                  </h3>
                  <p className="text-white/80 mt-4 font-mono text-sm uppercase tracking-wider">
                    {p.type}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className="w-screen h-screen flex items-center justify-center shrink-0 bg-creme text-carbono border-l border-carbono/10">
            <div className="text-4xl md:text-6xl font-serif italic border-b border-vermelhoP pb-2 hover:text-vermelhoP transition-colors cursor-pointer">
              Ver todas as obras
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalGallery;
