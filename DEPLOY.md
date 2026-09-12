# Instruções de Instalação e Deploy

## ⚙️ Instalação Local

### Pré-requisitos
- Node.js v16+ instalado
- npm ou yarn
- Git

### Passos

```bash
# 1. Clonar repositório
git clone https://github.com/clickpartsmarketing-del/dashboard-automacao-ia-clientes.git
cd dashboard-automacao-ia-clientes

# 2. Instalar dependências
npm install

# 3. Iniciar servidor de desenvolvimento
npm run dev

# 4. Abrir no navegador
# Acesse: http://localhost:3000
```

## 🎨 Estrutura do Projeto

```
.
├── pages/                    # Páginas Next.js
│   ├── _app.tsx            # App wrapper
│   ├── index.jsx            # Dashboard principal
│   ├── pitch.jsx            # Apresentação
│   └── monitoramento.jsx    # Monitoramento real-time
│
├── components/              # Componentes React
│   ├── Dashboard.jsx
│   ├── PresentationSlide.jsx
│   └── Monitoramento.jsx
│
├── data/                    # Dados estáticos (JSON)
│   ├── empresas.json       # Lista de empresas
│   └── metricas.json       # Métricas consolidadas
│
├── styles/
│   └── globals.css         # Estilos globais
│
├── public/                  # Arquivos estáticos
│   └── logos/              # Logos das empresas
│
├── package.json            # Dependências do projeto
├── next.config.js          # Configuração Next.js
├── tsconfig.json           # Configuração TypeScript
├── README.md               # Documentação principal
├── SETUP.md                # Guia de setup
└── GUIA_USO.md            # Guia de uso
```

## 📦 Build para Produção

```bash
# 1. Build
npm run build

# 2. Testar produção localmente
npm start

# 3. Acessar em http://localhost:3000
```

## 🌐 Deploy

### Opção 1: Vercel (Recomendado)

```bash
# Instalar CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Será gerada uma URL pública automaticamente
```

### Opção 2: Netlify

```bash
# Instalar CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

### Opção 3: GitHub Pages

```bash
# Adicionar ao package.json
"homepage": "https://clickpartsmarketing-del.github.io/dashboard-automacao-ia-clientes"

# Build para export
npm run export

# Fazer deploy
gh-pages -d out
```

### Opção 4: Servidor Próprio (Ubuntu/Linux)

```bash
# 1. SSH no servidor
ssh user@seu-servidor.com

# 2. Clonar repositório
git clone https://github.com/clickpartsmarketing-del/dashboard-automacao-ia-clientes.git
cd dashboard-automacao-ia-clientes

# 3. Instalar dependências
npm install --production

# 4. Build
npm run build

# 5. Instalar PM2 para manter rodando
npm i -g pm2

# 6. Iniciar com PM2
pm2 start npm --name "dashboard" -- start
pm2 save
pm2 startup

# 7. Configurar Nginx/Apache como reverse proxy
# Apontar porta 80/443 para 3000
```

### Opção 5: Docker

```bash
# 1. Criar Dockerfile
cat > Dockerfile << 'EOF'
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
EOF

# 2. Build imagem
docker build -t dashboard-automacao .

# 3. Executar container
docker run -p 3000:3000 dashboard-automacao

# 4. Acessar em http://localhost:3000
```

## 🔧 Variáveis de Ambiente

Crie arquivo `.env.local`:

```env
# API
NEXT_PUBLIC_API_URL=https://api.example.com
API_KEY=sua-chave-aqui

# Analytics
NEXT_PUBLIC_GA_ID=UA-XXXXXXXXX-X

# Outros
NEXT_PUBLIC_APP_VERSION=1.0.0
NEXT_PUBLIC_ENVIRONMENT=production
```

## 📊 Dados

### Adicionar Empresa

1. Edite `data/empresas.json`
2. Adicione objeto com estrutura:

```json
{
  "id": 6,
  "nome": "Nova Empresa",
  "logo": "/logos/novaempresa.png",
  "descricao": "Descrição",
  "areas": ["Financeiro"],
  "status": "Ativo",
  "dataInicio": "2024-09-01",
  "resultado": {...},
  "tecnologias": [...],
  "contato": "email@empresa.com",
  "metricas": {...}
}
```

3. Salve e recarregue a página

## 🔐 Segurança em Produção

✅ **HTTPS**: Sempre use HTTPS
✅ **Headers**: Configure headers de segurança
✅ **CORS**: Restrinja origem das requisições
✅ **Rate Limiting**: Implemente rate limiting
✅ **Autenticação**: Proteja dados sensíveis
✅ **Validação**: Valide todos os inputs

## 📈 Performance

### Otimizações já incluídas:
- ✅ Next.js SSG (Static Site Generation)
- ✅ Image Optimization
- ✅ Code Splitting
- ✅ CSS-in-JS

### Dicas adicionais:
```bash
# Analisar bundle
npm run build
npm i -g next-bundle-analyzer

# Verificar performance
# Use PageSpeed Insights do Google
```

## 🐛 Debugging

### Modo Debug

```bash
# Com debug
DEBUG=* npm run dev
```

### Logs

```javascript
// Em componentes
console.log('Debug info', dados);

// Em pages
if (process.env.NODE_ENV === 'development') {
  console.log('Development mode');
}
```

## 📝 Logs de Deploy

### Verificar logs

```bash
# Vercel
vercel logs

# Servidor próprio com PM2
pm2 logs dashboard
```

## ✅ Checklist de Deploy

- [ ] Código testado localmente
- [ ] Dependências atualizadas
- [ ] Build sem erros (`npm run build`)
- [ ] Variáveis de ambiente configuradas
- [ ] Dados atualizados em JSON
- [ ] HTTPS habilitado
- [ ] SEO configurado
- [ ] Analytics configurado
- [ ] Backup de dados
- [ ] Plano de rollback

## 🚀 Próximos Passos

1. Customizar com sua marca
2. Integrar com API real
3. Implementar autenticação
4. Adicionar mais empresas
5. Configurar CI/CD
6. Monitorar performance
7. Coletar feedback
8. Iterações contínuas

---

**Pronto para ir ao ar!** 🎉
