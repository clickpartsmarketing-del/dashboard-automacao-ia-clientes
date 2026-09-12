# Guia de Uso - Dashboard AutomationHub

## 🎯 Para Usar o Dashboard

### Acesso Rápido

**URL Base**: `http://localhost:3000`

#### Rotas Disponíveis:
1. **Dashboard** → `http://localhost:3000/`
2. **Pitch Presentation** → `http://localhost:3000/pitch`
3. **Monitoramento** → `http://localhost:3000/monitoramento`

---

## 📊 Dashboard Principal

### O que você encontra:

**1. Resumo Geral (Cards no topo)**
- ✅ Empresas Ativas
- ✅ Total de Automações
- ✅ Economia Anual Total
- ✅ Satisfação Média
- ✅ Disponibilidade

**2. Gráficos de Performance**
- Automações por Área (Gráfico de Barras)
- Satisfação vs Produtividade (Gráfico de Linhas)

**3. Filtros**
- Filtrar por área: Todos, Financeiro, Marketing, Gestão, Comercial, Atendimento
- Buscar empresa por nome

**4. Cards de Empresas**
- Informações completas de cada parceira
- Métricas individuais
- Botões para "Detalhes" e "Monitorar"

**5. Tendências e Impacto**
- Redução de tempo
- Redução de erros
- Custo por processo

### Como Usar:
```
1. Selecione uma área no filtro
2. Use a busca para encontrar empresa específica
3. Clique em "Detalhes" para mais informações
4. Clique em "Monitorar" para acompanhamento real-time
```

---

## 🎤 Pitch Presentation

### Slides Incluídos:

**Slide 1: Título**
- Transformação Digital com IA
- Introdução ao serviço

**Slide 2: Serviços**
- 5 áreas de atuação
- Layout em grid

**Slide 3: Resultados Comprovados**
- 3 casos de sucesso
- Dados reais das empresas

**Slide 4: Impacto nos Resultados**
- 4 métricas principais
- Números impressionantes

**Slide 5: Próximos Passos**
- 4 etapas do processo
- Estrutura clara

### Controles:
```
← Voltar slide
→ Próxima slide
● ● ● Navegação direta
Download - Salvar apresentação
Compartilhar - Enviar link
Olho - Ver notas do apresentador
```

### Dicas para o Pitch:
✅ Customize as notas do apresentador
✅ Foque nos resultados de ROI
✅ Mostre casos de sucesso relevantes
✅ Destaque redução de custos
✅ Mencione disponibilidade 24/7

---

## 📡 Monitoramento em Tempo Real

### Informações Exibidas:

**1. Resumo em Tempo Real**
- Total de empresas
- Uptime médio
- Processos hoje
- Taxa de erro

**2. Alertas Recentes**
- ⚠️ Avisos (warning)
- ✅ Sucessos (success)
- ℹ️ Informações (info)

**3. Status das Automações**
- Tabela com status de cada empresa
- Uso de CPU em tempo real
- Uso de memória em tempo real

**4. Atividade Recente**
- Log de processos executados
- Erros capturados
- Otimizações completas

**5. Performance por Área**
- Uptime de cada setor
- Número de processos
- Cards coloridos por área

### Interpretando os Dados:
```
🟢 Verde = Ativo/Operacional
🔴 Vermelho = Offline/Erro
🟡 Amarelo = Aviso/Instável
```

---

## 💼 Adicionando Novas Empresas

### Passo 1: Editar `data/empresas.json`

```json
{
  "id": 6,
  "nome": "Sua Empresa",
  "logo": "/logos/suaempresa.png",
  "descricao": "Descrição da empresa",
  "areas": ["Financeiro", "Marketing"],
  "status": "Ativo",
  "dataInicio": "2024-09-01",
  "resultado": {
    "reducaoTempo": "65%",
    "economiaAnual": "R$ 300.000",
    "automacoes": 8,
    "processosAutomatizados": 120
  },
  "tecnologias": ["OpenAI", "Zapier"],
  "contato": "contato@empresa.com",
  "metricas": {
    "satisfacao": 90,
    "produtividade": 78,
    "erros": 6,
    "disponibilidade": 99.7
  }
}
```

### Passo 2: Atualizar `data/metricas.json`

Adicione no objeto `porArea` conforme necessário.

### Passo 3: Adicionar Logo

Coloque a imagem em `public/logos/`

### Passo 4: Atualizar Gráficos

Os gráficos se atualizam automaticamente!

---

## 🎨 Customizações Visuais

### Alterar Cores:

Edite `styles/globals.css` ou nos componentes:

```javascript
const coresArea = {
  'Financeiro': '#3b82f6',      // Azul
  'Marketing': '#ec4899',       // Rosa
  'Gestão': '#8b5cf6',          // Purple
  'Comercial': '#f59e0b',       // Amarelo
  'Atendimento': '#10b981'      // Verde
};
```

### Alterar Layout:

Edite o grid em `components/Dashboard.jsx`:

```javascript
// Alterar número de colunas
grid-cols-1 md:grid-cols-2 lg:grid-cols-3
// Para:
grid-cols-1 md:grid-cols-2 lg:grid-cols-4
```

### Alterar Fontes e Tamanhos:

Edite `styles/globals.css`:

```css
body {
  font-family: 'Sua Fonte';
  font-size: 16px;
}
```

---

## 🔗 Integrando com API Real

### Passo 1: Criar API Route

Arquivo: `pages/api/empresas.js`

```javascript
export default async function handler(req, res) {
  // Conectar ao seu banco de dados
  const empresas = await fetch('sua-api.com/empresas');
  res.status(200).json(empresas);
}
```

### Passo 2: Usar em Componentes

```javascript
import { useEffect, useState } from 'react';

const [empresas, setEmpresas] = useState([]);

useEffect(() => {
  fetch('/api/empresas')
    .then(res => res.json())
    .then(data => setEmpresas(data));
}, []);
```

---

## 📱 Responsividade

O dashboard é totalmente responsivo:

✅ **Desktop**: Layout completo com 3-5 colunas
✅ **Tablet**: Layout de 2 colunas
✅ **Mobile**: Layout de 1 coluna

Todos os gráficos se adaptam ao tamanho da tela.

---

## 🔐 Segurança

### Boas Práticas:

1. **Não exponha dados sensíveis** em variáveis públicas
2. **Use `.env.local`** para secrets:
   ```
   NEXT_PUBLIC_API_URL=https://api.example.com
   API_SECRET=seu-secret-aqui
   ```
3. **Valide inputs** no frontend e backend
4. **Use HTTPS** em produção
5. **Implemente autenticação** para dados confidenciais

---

## 🚀 Deploy

### Vercel (Recomendado):

```bash
npm i -g vercel
vercel login
vercel
```

### Netlify:

```bash
npm i -g netlify-cli
netlify deploy
```

### Seu Servidor:

```bash
npm run build
npm start
```

---

## 🐛 Troubleshooting

### Problema: Gráficos não aparecem
**Solução**: Verifique se Recharts está instalado
```bash
npm install recharts
```

### Problema: Estilos não carregam
**Solução**: Limpe o cache e reinicie
```bash
rm -rf .next
npm run dev
```

### Problema: Dados não atualizam
**Solução**: Verifique se os arquivos JSON estão válidos
```bash
node -e "console.log(require('./data/empresas.json'))"
```

---

## 📞 Suporte

Para dúvidas:
1. Abra uma **Issue** no GitHub
2. Consulte a documentação em `README.md`
3. Verifique `SETUP.md` para instalação

---

## ✨ Dicas Profissionais

✅ **Para Pitchs**: Use a apresentação para prospectos
✅ **Para Clientes**: Mostre o dashboard com dados reais
✅ **Para Gestão**: Use o monitoramento para acompanhar SLAs
✅ **Para Vendas**: Destaque o ROI e economia de custos
✅ **Para Técnico**: Use para monitorar performance

---

**Desenvolvido com ❤️ para automação inteligente**

Última atualização: Setembro de 2026
