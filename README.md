# Dashboard de Automação com IA - Clientes

Painel profissional para apresentação de empresas em pitchs de vendas e monitoramento de automações com IA.

## 🎯 Funcionalidades

- **Apresentação de Empresas**: Showcase de cases de sucesso
- **Monitoramento em Tempo Real**: Status das automações
- **Métricas por Área**: Financeiro, Marketing, Gestão, Comercial e Atendimento
- **ROI e Resultados**: Visualização de impacto
- **Filtros Avançados**: Busca por empresa, área e status
- **Gráficos Dinâmicos**: Dashboards interativos

## 📋 Áreas de Atuação

### 💰 Financeiro
- Automação de contas a pagar/receber
- Reconciliação bancária
- Relatórios financeiros
- Previsão de fluxo de caixa

### 📱 Marketing
- Automação de campanhas
- Análise de resultados
- Segmentação de público
- Lead scoring

### 📊 Gestão
- Dashboards de KPIs
- Gestão de projetos
- Relatórios automáticos
- Análise de dados

### 💼 Comercial
- Pipeline de vendas
- Prospecção automatizada
- Gestão de cotações
- Follow-up automático

### 📞 Atendimento
- Chatbot IA
- Triagem de tickets
- Respostas automáticas
- Análise de sentimento

## 🚀 Como Usar

### Instalação
```bash
npm install
npm run dev
```

### Estrutura de Dados
Veja `data/empresas.json` para adicionar novas empresas.

### Customização
Edite os componentes em `components/` conforme necessário.

## 📦 Estrutura do Projeto

```
├── pages/
│   ├── index.tsx           # Home
│   ├── pitch.tsx           # Apresentação
│   └── monitoramento.tsx   # Monitoramento
├── components/
│   ├── Header.tsx
│   ├── EmpresaCard.tsx
│   ├── MetricasGrafico.tsx
│   └── FiltrosCorp.tsx
├── data/
│   ├── empresas.json
│   └── metricas.json
├── styles/
│   └── globals.css
└── public/
    └── logos/
```

## 📊 Dados das Empresas

Cada empresa contém:
- Nome e logo
- Áreas de atuação
- Tecnologias utilizadas
- ROI/Resultados
- Status de automações
- Contatos
- Data de início

## 🎨 Design

- Interface moderna e profissional
- Cores corporativas (azul, cinza, verde)
- Responsiva para mobile e desktop
- Animações suaves

## 🔒 Segurança

- Dados sensíveis em variáveis de ambiente
- Validação de inputs
- Proteção contra XSS

## 📄 Licença

MIT - Veja LICENSE para detalhes

## 👥 Contato

clickpartsmarketing-del
