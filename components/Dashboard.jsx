import React, { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Menu, Search, Bell, User, TrendingUp, Target, AlertCircle } from 'lucide-react';
import empresasData from '../data/empresas.json';
import metricasData from '../data/metricas.json';

const Dashboard = () => {
  const [empresas, setEmpresas] = useState(empresasData);
  const [metricas, setMetricas] = useState(metricasData);
  const [filtroArea, setFiltroArea] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [menuAberto, setMenuAberto] = useState(false);

  const areas = ['Todos', 'Financeiro', 'Marketing', 'Gestão', 'Comercial', 'Atendimento'];
  const coresArea = {
    'Financeiro': '#3b82f6',
    'Marketing': '#ec4899',
    'Gestão': '#8b5cf6',
    'Comercial': '#f59e0b',
    'Atendimento': '#10b981'
  };

  const empresasFiltradas = empresas.filter(emp => {
    const contemArea = filtroArea === 'Todos' || emp.areas.includes(filtroArea);
    const contemBusca = emp.nome.toLowerCase().includes(searchTerm.toLowerCase());
    return contemArea && contemBusca;
  });

  const dadosGraficoAreas = Object.entries(metricas.porArea).map(([area, dados]) => ({
    area,
    automacoes: dados.automacoes,
    processos: dados.processos,
    economia: parseInt(dados.economia.replace(/[^0-9]/g, '')) / 1000
  }));

  const dadosGraficoSatisfacao = Object.entries(metricas.porArea).map(([area, dados]) => ({
    area,
    satisfacao: dados.satisfacao,
    produtividade: dados.produtividade
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">AutomationHub</h1>
            </div>

            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Buscar empresa..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition">
                <Bell className="w-6 h-6" />
              </button>
              <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition">
                <User className="w-6 h-6" />
              </button>
              <button
                onClick={() => setMenuAberto(!menuAberto)}
                className="md:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Resumo Geral */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-400 text-sm mb-1">Empresas Ativas</p>
                <h3 className="text-3xl font-bold text-white">{metricas.resumoGeral.empresasAtivas}</h3>
              </div>
              <Target className="w-8 h-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-purple-500 transition">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-400 text-sm mb-1">Automações</p>
                <h3 className="text-3xl font-bold text-white">{metricas.resumoGeral.automacoes}</h3>
              </div>
              <TrendingUp className="w-8 h-8 text-purple-500" />
            </div>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-green-500 transition">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-400 text-sm mb-1">Economia Anual</p>
                <h3 className="text-2xl font-bold text-white">{metricas.resumoGeral.economiaAnualTotal}</h3>
              </div>
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-yellow-500 transition">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-400 text-sm mb-1">Satisfação Média</p>
                <h3 className="text-3xl font-bold text-white">{metricas.resumoGeral.satisfacaoMedia}%</h3>
              </div>
              <AlertCircle className="w-8 h-8 text-yellow-500" />
            </div>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-pink-500 transition">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-400 text-sm mb-1">Disponibilidade</p>
                <h3 className="text-3xl font-bold text-white">{metricas.resumoGeral.disponibilidadeMedia}%</h3>
              </div>
              <TrendingUp className="w-8 h-8 text-pink-500" />
            </div>
          </div>
        </div>

        {/* Gráficos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Automações por Área */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-6">Automações por Área</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dadosGraficoAreas}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="area" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }} />
                <Bar dataKey="automacoes" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Satisfação vs Produtividade */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-6">Satisfação vs Produtividade</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dadosGraficoSatisfacao}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="area" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }} />
                <Legend />
                <Line type="monotone" dataKey="satisfacao" stroke="#10b981" strokeWidth={2} />
                <Line type="monotone" dataKey="produtividade" stroke="#f59e0b" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Filtros e Empresas */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-white mb-6">Empresas Parceiras</h2>

          {/* Filtros */}
          <div className="flex flex-wrap gap-2 mb-6">
            {areas.map(area => (
              <button
                key={area}
                onClick={() => setFiltroArea(area)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  filtroArea === area
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {area}
              </button>
            ))}
          </div>

          {/* Grid de Empresas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {empresasFiltradas.map(empresa => (
              <div key={empresa.id} className="bg-slate-700 border border-slate-600 rounded-lg p-6 hover:border-blue-500 transition hover:shadow-lg">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-3"></div>
                  <h3 className="text-lg font-bold text-white mb-1">{empresa.nome}</h3>
                  <p className="text-sm text-slate-400">{empresa.descricao}</p>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {empresa.areas.map(area => (
                      <span
                        key={area}
                        className="px-2 py-1 text-xs font-semibold rounded-full text-white"
                        style={{ backgroundColor: coresArea[area] }}
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-800 rounded-lg p-3 mb-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Automações:</span>
                    <span className="text-white font-semibold">{empresa.resultado.automacoes}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Redução Tempo:</span>
                    <span className="text-green-400 font-semibold">{empresa.resultado.reducaoTempo}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Economia:</span>
                    <span className="text-blue-400 font-semibold">{empresa.resultado.economiaAnual}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Satisfação:</span>
                    <span className="text-yellow-400 font-semibold">{empresa.metricas.satisfacao}%</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-3 border-t border-slate-600">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition">
                    Detalhes
                  </button>
                  <button className="flex-1 bg-slate-600 hover:bg-slate-500 text-white font-semibold py-2 rounded-lg transition">
                    Monitorar
                  </button>
                </div>
              </div>
            ))}
          </div>

          {empresasFiltradas.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-400 text-lg">Nenhuma empresa encontrada com os filtros selecionados</p>
            </div>
          )}
        </div>

        {/* Tendências */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-6">Tendências e Impacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-700 rounded-lg p-6 text-center">
              <p className="text-slate-400 text-sm mb-2">Redução Média de Tempo</p>
              <h3 className="text-4xl font-bold text-green-400 mb-2">{metricas.tendencias.reducaoTempoMedia}</h3>
              <p className="text-xs text-slate-500">por processo automatizado</p>
            </div>
            <div className="bg-slate-700 rounded-lg p-6 text-center">
              <p className="text-slate-400 text-sm mb-2">Redução de Erros</p>
              <h3 className="text-4xl font-bold text-blue-400 mb-2">{metricas.tendencias.errosReduzidos}</h3>
              <p className="text-xs text-slate-500">em operações manual</p>
            </div>
            <div className="bg-slate-700 rounded-lg p-6 text-center">
              <p className="text-slate-400 text-sm mb-2">Custo por Processo</p>
              <div className="flex justify-center items-center gap-3 mb-2">
                <span className="line-through text-slate-500">{metricas.tendencias.custosPorProcesso.antes}</span>
                <span className="text-2xl font-bold text-purple-400">{metricas.tendencias.custosPorProcesso.depois}</span>
              </div>
              <p className="text-xs text-slate-500">após automação</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
