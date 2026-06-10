import RevealText from '../../components/RevealText';

const Manifesto = () => {
  return (
    <section id="empresa" className="py-40 px-6 md:px-20 bg-creme text-carbono font-sans border-b border-carbono/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="max-w-2xl">
          <RevealText>
            <span className="text-vermelhoP uppercase tracking-widest text-[10px] font-black mb-8 block">
              // A Nossa Essência
            </span>
          </RevealText>
          <RevealText delay={200}>
            <h2 className="text-4xl md:text-7xl font-serif font-bold leading-[1.05] tracking-tight">
              Engenharia não é apenas técnica. <br />
              <span className="opacity-40 italic font-light text-vermelhoP">
                É responsabilidade.
              </span>
            </h2>
          </RevealText>
        </div>
        <div className="flex flex-col max-w-lg">
          <RevealText delay={400}>
            <p className="text-xl md:text-2xl text-carbono/80 leading-relaxed font-light mb-8">
              Durante 70 anos, a Perfurac tem sido sinónimo de segurança e inovação no subsolo. Não construímos apenas fundações; garantimos que os grandes projetos alcancem os céus.
            </p>
            <div className="flex gap-12 border-t border-carbono/10 pt-8 mt-4">
              <div>
                <span className="block text-4xl font-serif font-bold text-vermelhoP mb-1">
                  70
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-carbono/50">
                  Anos de Tradição
                </span>
              </div>
              <div>
                <span className="block text-4xl font-serif font-bold text-vermelhoP mb-1">
                  +5k
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-carbono/50">
                  Obras Entregues
                </span>
              </div>
            </div>
          </RevealText>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
