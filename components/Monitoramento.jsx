import React, { useState, useEffect } from 'react';
import { Activity, AlertTriangle, CheckCircle, Clock, TrendingUp } from 'lucide-react';
import empresasData from '../data/empresas.json';

const Monitoramento = () => {
  const [empresas, setEmpresas] = useState(empresasData);
  const [alertas, setAlertas] = useState([
    { id: 1, empresa: 'TechFinance Corp', tipo: 'warning', mensagem: 'CPU acima de 80%', tempo: '2 min atrás' },
    { id: 2, empresa: 'MarketPro Digital', tipo: 'success', mensagem: 'Automação completada', tempo: '5 min atrás' },
    { id: 3, empresa: 'ServiceMax Solutions', tipo: 'info', mensagem: 'Processamento normal', tempo: 'agora' }
  ]);
  const [atualizacoes, setAtualizacoes] = useState([]);

  useEffect(() => {
    // Simular atualizações em tempo real
    const intervalo = setInterval(() => {
      setAtualizacoes(prev => [{
        id: Date.now(),
        empresa: empresas[Math.floor(Math.random() * empresas.length)].nome,
        acao: ['Processo executado', 'Erro capturado', 'Otimização completa'][Math.floor(Math.random() * 3)],
        tempo: 'agora'
      }, ...prev].slice(0, 10));
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Ativo':
        return 'bg-green-500';
      case 'Offline':
        return 'bg-red-500';
      default:
        return 'bg-yellow-500';
    }
  };

  const getAlertaIcon = (tipo) => {
    switch (tipo) {
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      default:
        return <Activity className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Activity className="w-8 h-8 text-green-500 animate-pulse" />
              <h1 className="text-2xl font-bold text-white">Monitoramento em Tempo Real</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Resumo Geral */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <p className="text-slate-400 text-sm mb-2">Total de Empresas</p>
            <h3 className="text-3xl font-bold text-white">{empresas.length}</h3>
            <p className="text-xs text-green-400 mt-2">Todas operacionais</p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <p className="text-slate-400 text-sm mb-2">Uptime Médio</p>
            <h3 className="text-3xl font-bold text-white">99.7%</h3>
            <p className="text-xs text-green-400 mt-2">↑ Excelente</p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <p className="text-slate-400 text-sm mb-2">Processos Hoje</p>
            <h3 className="text-3xl font-bold text-white">2,847</h3>
            <p className="text-xs text-green-400 mt-2">↑ +15% vs ontem</p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <p className="text-slate-400 text-sm mb-2">Taxa de Erro</p>
            <h3 className="text-3xl font-bold text-white">0.3%</h3>
            <p className="text-xs text-green-400 mt-2">↓ Reduzido</p>
          </div>
        </div>

        {/* Alertas */}
        {alertas.length > 0 && (
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Alertas Recentes</h2>
            <div className="space-y-3">
              {alertas.map(alerta => (
                <div key={alerta.id} className="flex items-start gap-4 bg-slate-700 p-4 rounded-lg">
                  {getAlertaIcon(alerta.tipo)}
                  <div className="flex-1">
                    <p className="text-white font-semibold">{alerta.empresa}</p>
                    <p className="text-slate-300 text-sm">{alerta.mensagem}</p>
                  </div>
                  <span className="text-xs text-slate-400">{alerta.tempo}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Status das Empresas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Tabela de Status */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4">Status das Automações</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-2 px-2 text-slate-400 font-semibold">Empresa</th>
                    <th className="text-left py-2 px-2 text-slate-400 font-semibold">Status</th>
                    <th className="text-left py-2 px-2 text-slate-400 font-semibold">CPU</th>
                    <th className="text-left py-2 px-2 text-slate-400 font-semibold">Memória</th>
                  </tr>
                </thead>
                <tbody>
                  {empresas.map(empresa => (
                    <tr key={empresa.id} className="border-b border-slate-700 hover:bg-slate-700 transition">
                      <td className="py-3 px-2 text-white font-medium">{empresa.nome}</td>
                      <td className="py-3 px-2">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${getStatusColor(empresa.status)}`}></div>
                          <span className="text-slate-300">{empresa.status}</span>
                        </div>
                      </td>
                      <td className="py-3 px-2">
                        <div className="w-16 bg-slate-700 rounded-full h-2">
                          <div
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: `${45 + Math.random() * 20}%` }}
                          ></div>
                        </div>
                      </td>
                      <td className="py-3 px-2">
                        <div className="w-16 bg-slate-700 rounded-full h-2">
                          <div
                            className="bg-purple-500 h-2 rounded-full"
                            style={{ width: `${60 + Math.random() * 15}%` }}
                          ></div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Atividade Recente */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Atividade Recente
            </h2>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {atualizacoes.length === 0 ? (
                <p className="text-slate-400 text-center py-6">Aguardando atualizações...</p>
              ) : (
                atualizacoes.map(att => (
                  <div key={att.id} className="flex items-start gap-3 pb-3 border-b border-slate-700 last:border-b-0">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 animate-pulse"></div>
                    <div>
                      <p className="text-white text-sm">{att.empresa}</p>
                      <p className="text-slate-400 text-xs">{att.acao}</p>
                    </div>
                    <span className="text-xs text-slate-500 ml-auto">{att.tempo}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Desempenho por Área */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-6">Performance por Área de Atuação</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { area: 'Financeiro', uptime: 99.9, processos: 542 },
              { area: 'Marketing', uptime: 99.6, processos: 387 },
              { area: 'Gestão', uptime: 99.8, processos: 658 },
              { area: 'Comercial', uptime: 99.5, processos: 521 },
              { area: 'Atendimento', uptime: 99.9, processos: 789 }
            ].map((area, idx) => (
              <div key={idx} className="bg-slate-700 rounded-lg p-4 text-center">
                <p className="text-slate-400 text-sm mb-2">{area.area}</p>
                <p className="text-2xl font-bold text-green-400 mb-2">{area.uptime}%</p>
                <p className="text-xs text-slate-400">{area.processos} processos</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Monitoramento;
