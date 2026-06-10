const Footer = () => {
  return (
    <footer className="relative bg-branco text-carbono font-sans pt-0 flex flex-col">
      <div className="bg-vermelhoP w-full py-20 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-10 shadow-2xl z-10 text-white">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-2">DÚVIDAS?</h2>
          <h3 className="text-2xl md:text-4xl font-bold tracking-tight mb-6">LIGUE PARA: (11) 5585 8585</h3>
          <a
            href="mailto:perfurac@perfurac.com.br"
            className="text-sm uppercase tracking-widest opacity-80 hover:opacity-100 hover:underline transition-all"
          >
            Ou envie um email para perfurac@perfurac.com.br
          </a>
        </div>
        <div className="flex flex-col items-center md:items-end gap-4">
          <span className="text-xs uppercase tracking-widest font-bold">
            Visite as nossas redes sociais:
          </span>
          <div className="flex bg-white rounded shadow-lg overflow-hidden">
            {['Instagram', 'Facebook', 'Youtube', 'Linkedin'].map((social, i) => (
              <a
                key={i}
                href="#"
                className="w-14 h-14 flex items-center justify-center text-carbono hover:bg-creme transition-colors border-r border-gray-200 last:border-0"
              >
                <span className="text-xs font-bold">{social[0]}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-20 pb-10 px-6 md:px-20 border-t border-carbono/10 bg-branco">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-1 md:col-span-2">
            <span className="text-3xl font-black tracking-tighter block mb-4">
              PERFURAC<span className="text-vermelhoP">.</span>
            </span>
            <p className="text-sm text-carbono/60 leading-relaxed max-w-sm">
              Engenharia de Fundações.
              <br /> Fides - Honor - Labor. <br />
              Desde a conceção estrutural até à execução das obras mais complexas do país.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold text-vermelhoP uppercase tracking-widest mb-2">
              Navegação
            </span>
            {[
              { name: 'A Empresa', id: 'empresa' },
              { name: 'Serviços', id: 'servicos' },
              { name: 'Obras', id: 'obras' },
              { name: 'Equipamentos', id: 'equipamentos' },
            ].map((item, i) => (
              <a
                key={i}
                href={`#${item.id}`}
                className="text-sm text-carbono/80 hover:text-vermelhoP transition-colors w-fit"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold text-vermelhoP uppercase tracking-widest mb-2">
              Contacto / Matriz
            </span>
            <span className="text-sm text-carbono/80 leading-relaxed">
              São Paulo, SP
              <br />
              Av. Exemplo Engenharia, 1000
              <br />
              CEP: 00000-000
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-carbono/40 gap-4 border-t border-carbono/5 pt-8">
          <span>&copy; 2026 Perfurac. Todos os direitos reservados.</span>
          <span>Design Limpo e Tecnologia</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.02]">
        <h1 className="text-[20vw] font-black leading-none text-center text-carbono whitespace-nowrap translate-y-[25%]">
          PERFURAC
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
