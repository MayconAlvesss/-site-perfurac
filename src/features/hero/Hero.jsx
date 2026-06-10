import RevealText from '../../components/RevealText';
import EditableMedia from '../../components/EditableMedia';

const Hero = () => {
  return (
    <section className="min-h-[85vh] w-full relative overflow-hidden bg-carbono flex flex-col justify-end px-6 md:px-12 pb-16 pt-32 md:pb-24">
      <EditableMedia
        initialSrc="https://cdn.coverr.co/videos/coverr-heavy-machinery-at-a-construction-site-4165/1080p.mp4"
        className="absolute inset-0 z-0 opacity-60 mix-blend-luminosity scale-105"
        doubleClickHint={false}
      />

      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-t from-carbono/90 via-carbono/40 to-carbono/10" />

      <div className="relative z-10 max-w-6xl w-full pointer-events-none">
        <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-8 md:gap-10">
          <div>
            <RevealText>
              <div className="flex items-center gap-4 mb-4">
                <span className="px-4 py-1 bg-vermelhoP text-white text-[10px] font-bold tracking-widest uppercase rounded-full animate-pulse">
                  70 Anos
                </span>
                <span className="text-white/80 text-xs font-mono tracking-widest uppercase">
                  Fides - Honor - Labor
                </span>
              </div>
            </RevealText>
            <RevealText delay={100}>
              <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-serif font-bold leading-[0.9] text-white tracking-tight mb-4 md:mb-6 drop-shadow-2xl">
                A base sólida <br /> do amanhã.
              </h1>
            </RevealText>
          </div>
          <RevealText delay={200} className="md:mb-4">
            <p className="text-sm md:text-base text-white/80 font-medium uppercase tracking-widest max-w-sm font-sans border-l-2 border-vermelhoP pl-6 backdrop-blur-sm">
              Tradição e excelência absoluta na prestação de serviços de engenharia e fundações.
            </p>
          </RevealText>
        </div>
      </div>

      <div className="absolute top-20 right-6 md:top-24 md:right-12 z-10 pointer-events-none opacity-70 flex items-center gap-2 bg-carbono/50 px-3 py-1.5 rounded backdrop-blur-md border border-white/10">
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          ></path>
        </svg>
        <span className="text-[10px] text-white uppercase tracking-widest font-bold">
          Duplo clique no fundo p/ alterar vídeo
        </span>
      </div>
    </section>
  );
};

export default Hero;
