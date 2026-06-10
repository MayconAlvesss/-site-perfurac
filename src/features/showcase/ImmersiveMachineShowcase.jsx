import { useState, useEffect, useRef } from 'react';
import Machine3D from './Machine3D';

const ImmersiveMachineShowcase = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;
      const scrolled = -rect.top;

      let progress = scrolled / scrollableDistance;
      progress = Math.max(0, Math.min(1, progress));

      if (progress < 0.33) setActiveIndex(0);
      else if (progress < 0.66) setActiveIndex(1);
      else setActiveIndex(2);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const machines = [
    {
      id: 'auger',
      title: "HÉLICE CONTÍNUA",
      subtitle: "Perfuração Sem Descompressão",
      desc: "Tecnologia de ponta para perfuração rotativa contínua. Elimina a descompressão do terreno, ideal para zonas urbanas densas e solos complexos.",
    },
    {
      id: 'pile',
      title: "BATE-ESTACAS",
      subtitle: "Cravagem de Alta Capacidade",
      desc: "Poder de impacto absoluto. Sistemas de martelo hidráulico ou queda livre para cravagem profunda de estacas pré-moldadas e perfis metálicos.",
    },
    {
      id: 'tieback',
      title: "PERFURATRIZ TIRANTE",
      subtitle: "Solo Grampeado & Contenções",
      desc: "Mastros inclináveis e versatilidade excecional. Projetada para execução de tirantes, solo grampeado e reforço estrutural em locais de difícil acesso.",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative bg-branco w-full border-b border-carbono/5"
      style={{ height: '400vh' }}
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center bg-branco">
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            activeIndex === 0 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Machine3D type="auger" />
        </div>
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            activeIndex === 1 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Machine3D type="pile" />
        </div>
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            activeIndex === 2 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Machine3D type="tieback" />
        </div>

        {/* Degradê branco à esquerda */}
        <div className="absolute inset-0 bg-gradient-to-r from-branco via-branco/90 to-transparent w-full md:w-2/3 z-10 pointer-events-none"></div>

        <div className="relative z-20 w-full px-6 md:px-20 max-w-7xl mx-auto flex flex-col justify-center h-full pointer-events-none">
          <div className="mb-4 overflow-hidden">
            <span className="text-vermelhoP uppercase tracking-widest text-[10px] md:text-xs font-black bg-creme/50 px-3 py-1.5 rounded border border-carbono/10">
              Tecnologia Volumétrica 3D
            </span>
          </div>

          <div className="relative h-64 md:h-80 w-full max-w-2xl">
            {machines.map((m, idx) => (
              <div
                key={m.id}
                className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out transform ${
                  activeIndex === idx
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <h2 className="text-[clamp(3rem,6vw,6rem)] font-serif font-black leading-none text-carbono tracking-tighter mb-2">
                  {m.title}
                </h2>
                <h3 className="text-vermelhoP font-mono uppercase tracking-[0.2em] text-sm md:text-lg mb-6">
                  {m.subtitle}
                </h3>
                <p className="text-carbono/70 font-sans text-sm md:text-lg leading-relaxed max-w-md">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="absolute bottom-20 left-6 md:left-20 flex gap-4">
            {machines.map((_, idx) => (
              <div
                key={idx}
                className={`h-1 transition-all duration-500 rounded-full ${
                  activeIndex === idx ? 'w-16 bg-vermelhoP' : 'w-4 bg-carbono/20'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImmersiveMachineShowcase;
