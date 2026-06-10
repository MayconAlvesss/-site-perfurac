import { useState } from 'react';
import RevealText from '../../components/RevealText';
import EditableMedia from '../../components/EditableMedia';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Hélice Contínua Monitorada",
      desc: "Perfuração com monitorização eletrónica contínua, garantindo ausência de descompressão do terreno. Ideal para áreas urbanas.",
      img: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Cravações de Estacas",
      desc: "Cravação com martelo hidráulico, vibratório ou queda livre. Elevada capacidade de carga para estacas pré-moldadas e perfis metálicos.",
      img: "https://images.unsplash.com/photo-1588557132645-ff567110cafd?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Cortina de Estacas Secantes",
      desc: "Contenção de água e solo em escavações profundas, permitindo execução segura de subsolos em zonas com lençol freático elevado.",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dbd?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Solo Grampeado & Tirantes",
      desc: "Estabilização de maciços de terra através de reforços inseridos no solo, combinados com faceamento em betão projetado.",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Estacas Raiz",
      desc: "Fundações moldadas in loco, executadas através de perfuração rotativa. Excelentes para reforço de fundações e locais de difícil acesso.",
      img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section
      id="servicos"
      className="bg-branco text-carbono py-32 px-6 md:px-20 relative overflow-hidden border-b border-carbono/5"
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-10">
          <RevealText>
            <span className="text-vermelhoP uppercase tracking-widest text-[10px] font-black mb-4 block">
              // Expertise Técnica
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
              Soluções em <br />
              <span className="italic text-vermelhoP">Fundações.</span>
            </h2>
          </RevealText>
          <RevealText delay={200}>
            <p className="text-carbono/60 max-w-sm text-sm uppercase tracking-widest leading-relaxed">
              Domínio completo das tecnologias mais avançadas de fundação profunda e contenção. Selecione para visualizar.
            </p>
          </RevealText>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 min-h-[500px]">
          {/* Menu Lateral de Serviços */}
          <div className="lg:col-span-5 flex flex-col border-t border-carbono/10">
            {services.map((srv) => (
              <div
                key={srv.id}
                onClick={() => setActiveService(srv)}
                className={`py-6 border-b border-carbono/10 flex items-center justify-between cursor-pointer px-4 -mx-4 transition-all duration-300 ${
                  activeService.id === srv.id
                    ? 'bg-creme border-l-4 border-l-vermelhoP'
                    : 'hover:bg-creme/50 border-l-4 border-l-transparent'
                }`}
              >
                <h3
                  className={`text-lg md:text-xl font-medium font-sans transition-all duration-300 ${
                    activeService.id === srv.id
                      ? 'text-vermelhoP translate-x-2'
                      : 'text-carbono/80'
                  }`}
                >
                  {srv.title}
                </h3>
                <div
                  className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    activeService.id === srv.id
                      ? 'border-vermelhoP/30 opacity-100'
                      : 'border-transparent opacity-0'
                  }`}
                >
                  <span className="text-vermelhoP text-xs">→</span>
                </div>
              </div>
            ))}
            <div className="py-6 px-4 -mx-4">
              <p className="text-sm font-bold text-carbono/50 uppercase tracking-widest">
                + Mais de 10 técnicas especializadas disponíveis mediante consulta.
              </p>
            </div>
          </div>

          {/* Painel Multimédia e Descrição */}
          <div className="lg:col-span-7 bg-creme rounded-sm border border-carbono/10 overflow-hidden flex flex-col">
            <div className="h-64 md:h-[400px] w-full relative bg-carbono group">
              <EditableMedia
                initialSrc={activeService.img}
                className="absolute inset-0 w-full h-full"
                doubleClickHint={true}
              />
            </div>
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-serif font-bold text-carbono mb-4">
                {activeService.title}
              </h3>
              <p className="text-carbono/70 leading-relaxed text-lg">
                {activeService.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
