import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Download, Share2, Eye } from 'lucide-react';
import empresasData from '../data/empresas.json';

const PresentationSlide = () => {
  const [slidoAtual, setSlidoAtual] = useState(0);
  const [mostrarNota, setMostrarNota] = useState(false);

  const slides = [
    {
      titulo: 'Transformação Digital com IA',
      subtitulo: 'Automação Inteligente para seu Negócio',
      descricao: 'Soluções de inteligência artificial para aumentar produtividade em suas operações',
      tipo: 'titulo'
    },
    {
      titulo: 'Nossos Serviços',
      areas: ['Financeiro', 'Marketing', 'Gestão', 'Comercial', 'Atendimento'],
      tipo: 'servicos'
    },
    {
      titulo: 'Resultados Comprovados',
      empresas: empresasData.slice(0, 3),
      tipo: 'casos'
    },
    {
      titulo: 'Impacto nos Resultados',
      metricas: [
        { label: 'Redução de Tempo', valor: '70%' },
        { label: 'Economia Anual', valor: 'R$ 2.1M' },
        { label: 'Automações', valor: '54' },
        { label: 'Satisfação', valor: '92%' }
      ],
      tipo: 'impacto'
    },
    {
      titulo: 'Próximos Passos',
      passos: [
        'Diagnóstico de Oportunidades',
        'Prototipagem e Testes',
        'Implementação Gradual',
        'Monitoramento e Otimização'
      ],
      tipo: 'proximo'
    }
  ];

  const proximoSlido = () => {
    setSlidoAtual((slidoAtual + 1) % slides.length);
  };

  const slidoAnterior = () => {
    setSlidoAtual((slidoAtual - 1 + slides.length) % slides.length);
  };

  const renderSlido = () => {
    const slide = slides[slidoAtual];

    switch (slide.tipo) {
      case 'titulo':
        return (
          <div className="flex flex-col justify-center items-center h-full text-center">
            <h1 className="text-6xl font-bold text-white mb-6">{slide.titulo}</h1>
            <h2 className="text-3xl text-blue-400 mb-6">{slide.subtitulo}</h2>
            <p className="text-xl text-slate-300 max-w-2xl">{slide.descricao}</p>
          </div>
        );

      case 'servicos':
        return (
          <div className="flex flex-col justify-center h-full">
            <h1 className="text-5xl font-bold text-white mb-12">{slide.titulo}</h1>
            <div className="grid grid-cols-2 gap-8">
              {slide.areas.map((area, idx) => (
                <div key={idx} className="bg-slate-700 rounded-lg p-6 text-center hover:bg-blue-600 transition">
                  <h3 className="text-2xl font-bold text-white">{area}</h3>
                </div>
              ))}
            </div>
          </div>
        );

      case 'casos':
        return (
          <div className="flex flex-col justify-center h-full">
            <h1 className="text-5xl font-bold text-white mb-12">{slide.titulo}</h1>
            <div className="grid grid-cols-3 gap-6">
              {slide.empresas.map((emp, idx) => (
                <div key={idx} className="bg-slate-700 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{emp.nome}</h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-slate-300"><span className="text-blue-400">Redução:</span> {emp.resultado.reducaoTempo}</p>
                    <p className="text-slate-300"><span className="text-green-400">Economia:</span> {emp.resultado.economiaAnual}</p>
                    <p className="text-slate-300"><span className="text-yellow-400">Automações:</span> {emp.resultado.automacoes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'impacto':
        return (
          <div className="flex flex-col justify-center h-full">
            <h1 className="text-5xl font-bold text-white mb-12">{slide.titulo}</h1>
            <div className="grid grid-cols-4 gap-6">
              {slide.metricas.map((metrica, idx) => (
                <div key={idx} className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-6 text-center">
                  <p className="text-slate-200 text-sm mb-2">{metrica.label}</p>
                  <h3 className="text-4xl font-bold text-white">{metrica.valor}</h3>
                </div>
              ))}
            </div>
          </div>
        );

      case 'proximo':
        return (
          <div className="flex flex-col justify-center h-full">
            <h1 className="text-5xl font-bold text-white mb-12">{slide.titulo}</h1>
            <div className="space-y-6">
              {slide.passos.map((passo, idx) => (
                <div key={idx} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {idx + 1}
                  </div>
                  <p className="text-2xl text-white">{passo}</p>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col">
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-700 px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">AutomationHub - Pitch Presentation</h1>
          <div className="flex gap-4">
            <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition">
              <Download className="w-6 h-6" />
            </button>
            <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition">
              <Share2 className="w-6 h-6" />
            </button>
            <button
              onClick={() => setMostrarNota(!mostrarNota)}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition"
            >
              <Eye className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Slide Area */}
      <div className="flex-1 px-8 py-8 flex items-center justify-center">
        <div className="w-full max-w-6xl bg-slate-800 border-4 border-slate-700 rounded-lg p-12 min-h-96 shadow-2xl">
          {renderSlido()}
        </div>
      </div>

      {/* Controls */}
      <div className="bg-slate-900 border-t border-slate-700 px-8 py-6">
        <div className="flex justify-between items-center">
          <button
            onClick={slidoAnterior}
            className="p-3 bg-slate-800 hover:bg-blue-600 text-white rounded-lg transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSlidoAtual(idx)}
                className={`w-3 h-3 rounded-full transition ${
                  idx === slidoAtual ? 'bg-blue-500 w-8' : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>

          <div className="text-white text-center">
            <span className="font-semibold">{slidoAtual + 1}</span> / {slides.length}
          </div>

          <button
            onClick={proximoSlido}
            className="p-3 bg-slate-800 hover:bg-blue-600 text-white rounded-lg transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Notas do Apresentador */}
      {mostrarNota && (
        <div className="bg-slate-800 border-t border-slate-700 px-8 py-6">
          <h3 className="text-white font-semibold mb-2">Notas do Apresentador:</h3>
          <p className="text-slate-300">
            Customize as notas conforme necessário. Este é um espaço para você adicionar informações importantes sobre cada slide.
          </p>
        </div>
      )}
    </div>
  );
};

export default PresentationSlide;
