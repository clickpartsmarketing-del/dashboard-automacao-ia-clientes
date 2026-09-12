# AutomationHub Dashboard

## 🚀 Quick Start

### Instalação Rápida

```bash
# Clonar repositório
git clone https://github.com/clickpartsmarketing-del/dashboard-automacao-ia-clientes.git
cd dashboard-automacao-ia-clientes

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Acessar em
http://localhost:3000
```

## 📊 Páginas Disponíveis

### 1. **Dashboard Principal** (`/`)
- Visão geral de todas as empresas parceiras
- Métricas consolidadas por área
- Filtros por setor de atuação
- Gráficos de performance
- Resumo de impacto e resultados

### 2. **Pitch Presentation** (`/pitch`)
- Apresentação profissional para prospectos
- 5 slides temáticos
- Navegação fácil
- Pronto para meeting de vendas
- Exportar e compartilhar

### 3. **Monitoramento em Tempo Real** (`/monitoramento`)
- Status das automações
- Alertas e avisos
- Performance por área
- Tabela de uptime
- Atividade recente

## 📁 Estrutura de Pastas

```
project/
├── pages/
│   ├── _app.tsx              # App wrapper
│   ├── index.jsx             # Dashboard principal
│   ├── pitch.jsx             # Apresentação
│   └── monitoramento.jsx     # Monitoramento real-time
├── components/
│   ├── Dashboard.jsx         # Componente dashboard
│   ├── PresentationSlide.jsx # Componente pitch
│   └── Monitoramento.jsx     # Componente monitoring
├── data/
│   ├── empresas.json        # Base de empresas
│   └── metricas.json        # Dados de métricas
├── styles/
│   └── globals.css          # Estilos globais
├── public/
│   └── logos/               # Logos das empresas
├── package.json
├── next.config.js
└── tsconfig.json
```

## 🎨 Design System

### Cores
- **Primária**: Azul (#3b82f6)
- **Secundária**: Purple (#8b5cf6)
- **Sucesso**: Verde (#10b981)
- **Aviso**: Amarelo (#f59e0b)
- **Erro**: Vermelho (#ef4444)
- **Background**: Slate (#0f172a, #1e293b)

### Componentes
- Cards com hover effects
- Badges por área
- Gráficos interativos
- Tabelas responsivas
- Alertas e notificações

## 📊 Dados das Empresas

Cada empresa contém:
```json
{
  "id": 1,
  "nome": "Nome da Empresa",
  "logo": "/logos/empresa.png",
  "descricao": "Descrição breve",
  "areas": ["Financeiro", "Marketing"],
  "status": "Ativo",
  "dataInicio": "2024-01-15",
  "resultado": {
    "reducaoTempo": "75%",
    "economiaAnual": "R$ 450.000",
    "automacoes": 12,
    "processosAutomatizados": 145
  },
  "tecnologias": ["ChatGPT API", "Zapier"],
  "contato": "contato@empresa.com",
  "metricas": {
    "satisfacao": 95,
    "produtividade": 80,
    "erros": 5,
    "disponibilidade": 99.8
  }
}
```

## 🔧 Customização

### Adicionar Nova Empresa

1. Abra `data/empresas.json`
2. Adicione um novo objeto com as informações
3. Salve e atualize a página

### Modificar Métricas

1. Edite `data/metricas.json`
2. Atualize os valores conforme necessário
3. As mudanças aparecerão automaticamente

### Customizar Cores

1. Edite `styles/globals.css`
2. Altere as variáveis de cor
3. Atualize os componentes que as utilizam

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm i -g vercel
vercel login
vercel
```

### GitHub Pages
```bash
npm run build
npm run export
```

### Docker
```bash
docker build -t dashboard .
docker run -p 3000:3000 dashboard
```

## 📦 Dependências

- **Next.js**: Framework React
- **React**: Biblioteca UI
- **Recharts**: Gráficos
- **Lucide React**: Ícones
- **TailwindCSS**: Estilos (via CDN)

## 🔐 Segurança

- Valide todos os inputs
- Nunca exponha dados sensíveis
- Use variáveis de ambiente para secrets
- Implemente autenticação conforme necessário

## 📝 Notas

- O dashboard usa dados mockados em JSON
- Para integração com dados reais, conecte a uma API
- Os gráficos usam Recharts - altamente customizáveis
- Responsivo para mobile, tablet e desktop

## 🤝 Contribuindo

1. Fork o repositório
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

MIT License - Veja LICENSE para detalhes

## 💬 Suporte

Para dúvidas ou sugestões, abra uma issue no GitHub.

---

**Desenvolvido com ❤️ para automação com IA**
