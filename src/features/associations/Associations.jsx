import RevealText from '../../components/RevealText';

const Associations = () => {
  return (
    <section className="py-32 px-6 md:px-20 bg-creme flex flex-col items-center justify-center text-center font-sans border-t border-carbono/5">
      <RevealText>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-carbono mb-6 max-w-3xl mx-auto leading-tight">
          Fazemos parte das maiores <br />
          <span className="text-vermelhoP italic">associações do ramo.</span>
        </h2>
      </RevealText>
      <RevealText delay={200}>
        <p className="text-sm md:text-base uppercase tracking-widest text-carbono/60 mb-16 font-bold">
          E possuímos selo de capacitação técnica reconhecida.
        </p>
      </RevealText>

      <RevealText delay={400} className="w-full max-w-4xl">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-4xl font-black text-carbono tracking-tighter">ABMS</h3>
            <span className="text-[9px] uppercase tracking-widest max-w-[150px] text-carbono/60 text-center">
              Associação Brasileira de Mecânica dos Solos
            </span>
          </div>
          <div className="w-px h-16 bg-carbono/10 hidden md:block"></div>
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-4xl font-black text-carbono tracking-tighter lowercase italic">
              abef
            </h3>
            <span className="text-[9px] uppercase tracking-widest max-w-[150px] text-carbono/60 text-center">
              Assoc. Brasileira de Empresas de Engenharia de Fundações
            </span>
          </div>
          <div className="w-px h-16 bg-carbono/10 hidden md:block"></div>
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-4xl font-black text-carbono tracking-tighter">ACONVAP</h3>
            <span className="text-[9px] uppercase tracking-widest max-w-[150px] text-carbono/60 text-center">
              Associação das Construtoras do Vale do Paraíba
            </span>
          </div>
        </div>
      </RevealText>
    </section>
  );
};

export default Associations;
