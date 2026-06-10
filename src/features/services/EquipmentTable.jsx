import { useState } from 'react';

const EquipmentTable = () => {
  const [activeTab, setActiveTab] = useState('perfuratrizes');

  const data = {
    perfuratrizes: [
      { marca: "LLAMADA", modelo: "P-90TT", origem: "ESPANHA", aplicacao: "HÉLICE CONTÍNUA", peso: "45t", torque: "97 kN.m", diametro: "80cm", prof: "24m" },
      { marca: "LLAMADA", modelo: "P-140TT (x2)", origem: "ESPANHA", aplicacao: "HÉLICE CONTÍNUA", peso: "65t", torque: "195 kN.m", diametro: "100cm", prof: "27m" },
      { marca: "LLAMADA", modelo: "P-150TT", origem: "ESPANHA", aplicacao: "HÉLICE CONTÍNUA", peso: "80t", torque: "334 kN.m", diametro: "120cm", prof: "30m" },
      { marca: "MAIT", modelo: "HR-130", origem: "ITÁLIA", aplicacao: "HÉLICE CONTÍNUA", peso: "35t", torque: "130 kN.m", diametro: "80cm", prof: "19m" },
      { marca: "MAIT", modelo: "HR-180", origem: "ITÁLIA", aplicacao: "HÉLICE CONTÍNUA / SECANTE", peso: "60t", torque: "180 kN.m", diametro: "100/60cm", prof: "24/17m" },
      { marca: "MAIT", modelo: "HR-260", origem: "ITÁLIA", aplicacao: "ESCAVADA / HÉLICE", peso: "77t", torque: "260 kN.m", diametro: "120/200cm", prof: "30/64m" },
      { marca: "MAIT", modelo: "HR-300", origem: "ITÁLIA", aplicacao: "HÉLICE CONTÍNUA", peso: "85t", torque: "300 kN.m", diametro: "120cm", prof: "32m" },
      { marca: "SOILMEC", modelo: "SR-55", origem: "ITÁLIA", aplicacao: "HÉLICE CONTÍNUA", peso: "55t", torque: "160 kN.m", diametro: "100cm", prof: "24m" }
    ],
    bateEstacas: [
      { marca: "JUNTTAN", modelo: "PM-20 (x4)", origem: "FINLÂNDIA", aplicacao: "CRAVAÇÃO", peso: "60t", martelo: "HHK 5AL (Hidráulico)", curso: "1.2m", pesoMartelo: "5t" },
      { marca: "JUNTTAN", modelo: "PM-25/01", origem: "FINLÂNDIA", aplicacao: "CRAVAÇÃO", peso: "70t", martelo: "HHN 6S (Hidráulico)", curso: "1.2m", pesoMartelo: "6t" },
      { marca: "JUNTTAN", modelo: "PM-25/02", origem: "FINLÂNDIA", aplicacao: "CRAVAÇÃO", peso: "70t", martelo: "HHN 7S (Hidráulico)", curso: "1.5m", pesoMartelo: "7t" }
    ],
    apoio: [
      { marca: "VILLARES", modelo: "P&H 320", origem: "BRASIL", aplicacao: "GUINDASTE", cap: "20t" },
      { marca: "VILLARES", modelo: "P&H 535", origem: "BRASIL", aplicacao: "GUINDASTE", cap: "35t" },
      { marca: "VILLARES", modelo: "P&H 536", origem: "BRASIL", aplicacao: "GUINDASTE", cap: "36t" },
      { marca: "ZOOMLION", modelo: "HBT 40 (x4)", origem: "CHINA", aplicacao: "BOMBA DE CONCRETO", cap: "40 m³/h (100 bar) / 60Kw" },
      { marca: "ZOOMLION", modelo: "HBT 80 (x2)", origem: "CHINA", aplicacao: "BOMBA DE CONCRETO", cap: "80 m³/h (160 bar) / 199Kw" }
    ]
  };

  return (
    <section id="equipamentos" className="py-32 px-6 md:px-20 bg-creme font-sans border-b border-carbono/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-vermelhoP uppercase tracking-widest text-[10px] font-black mb-4 block">
            // Parque de Máquinas Próprio
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-carbono">
            Relação de Equipamentos
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-10 border-b border-carbono/10 pb-4">
          {[
            { id: 'perfuratrizes', label: 'Perfuratrizes' },
            { id: 'bateEstacas', label: 'Bate Estacas' },
            { id: 'apoio', label: 'Equipamentos de Apoio' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`cursor-pointer px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all rounded ${
                activeTab === tab.id
                  ? 'bg-carbono text-white shadow-md'
                  : 'bg-transparent text-carbono/50 hover:text-carbono hover:bg-carbono/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tabela Dinâmica */}
        <div className="overflow-x-auto bg-branco rounded-sm border border-carbono/10 shadow-sm">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-creme/80 border-b-2 border-carbono/10 text-xs uppercase tracking-widest text-carbono/60 font-bold">
                <th className="p-5">Marca / Modelo</th>
                <th className="p-5">Origem</th>
                <th className="p-5">Aplicação</th>
                {activeTab === 'perfuratrizes' && (
                  <>
                    <th className="p-5">Peso</th>
                    <th className="p-5">Torque</th>
                    <th className="p-5">Diâmetro</th>
                    <th className="p-5">Profundidade</th>
                  </>
                )}
                {activeTab === 'bateEstacas' && (
                  <>
                    <th className="p-5">Peso Base</th>
                    <th className="p-5">Modelo Martelo</th>
                    <th className="p-5">Curso</th>
                    <th className="p-5">Peso Martelo</th>
                  </>
                )}
                {activeTab === 'apoio' && (
                  <th className="p-5">Capacidade Técnica</th>
                )}
              </tr>
            </thead>
            <tbody>
              {data[activeTab].map((row, i) => (
                <tr key={i} className="border-b border-carbono/5 hover:bg-creme/50 transition-colors">
                  <td className="p-5 font-bold text-carbono">
                    {row.marca} <span className="font-normal text-carbono/60 ml-2">{row.modelo}</span>
                  </td>
                  <td className="p-5 text-sm text-carbono/80">{row.origem}</td>
                  <td className="p-5 text-sm font-semibold text-vermelhoP/80">{row.aplicacao}</td>
                  
                  {activeTab === 'perfuratrizes' && (
                    <>
                      <td className="p-5 text-sm font-mono text-carbono/80">{row.peso}</td>
                      <td className="p-5 text-sm font-mono text-carbono/80">{row.torque}</td>
                      <td className="p-5 text-sm font-mono text-carbono/80">{row.diametro}</td>
                      <td className="p-5 text-sm font-mono text-carbono/80 font-bold">{row.prof}</td>
                    </>
                  )}
                  {activeTab === 'bateEstacas' && (
                    <>
                      <td className="p-5 text-sm font-mono text-carbono/80">{row.peso}</td>
                      <td className="p-5 text-sm font-mono text-carbono/80">{row.martelo}</td>
                      <td className="p-5 text-sm font-mono text-carbono/80">{row.curso}</td>
                      <td className="p-5 text-sm font-mono text-carbono/80 font-bold">{row.pesoMartelo}</td>
                    </>
                  )}
                  {activeTab === 'apoio' && (
                    <td className="p-5 text-sm font-mono text-carbono/80 font-bold">{row.cap}</td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default EquipmentTable;
