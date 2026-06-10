import { useState, useEffect } from 'react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-6 py-4 md:px-10 md:py-3 flex justify-between items-center z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-branco/90 backdrop-blur-md shadow-sm text-carbono'
          : 'bg-transparent text-white'
      }`}
    >
      <div
        className="text-2xl font-black tracking-tighter flex items-center gap-2 cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        PERFURAC<span className="text-vermelhoP">.</span>
      </div>
      <div className="hidden md:flex gap-8 items-center text-[11px] font-bold tracking-widest uppercase">
        {[
          { name: 'A Empresa', id: 'empresa' },
          { name: 'Serviços', id: 'servicos' },
          { name: 'Equipamentos', id: 'equipamentos' },
          { name: 'Obras', id: 'obras' },
        ].map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="transition-colors hover:text-vermelhoP"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
