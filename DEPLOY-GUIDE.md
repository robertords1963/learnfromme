# 🚀 LearnFromMe - Guia de Deploy Completo

## 📋 O que você vai ter no final:
- ✅ Site rodando em `learnfromme.vercel.app`
- ✅ Banco de dados PostgreSQL real
- ✅ Todas as 60 experiências
- ✅ Sistema admin funcionando
- ✅ Tudo 100% grátis

---

## ⏱️ Tempo Total: 10 minutos

---

# PARTE 1: CONFIGURAR SUPABASE (5 minutos)

## Passo 1: Criar Conta no Supabase

1. Acesse: https://supabase.com
2. Clique em **"Start your project"**
3. Faça login com GitHub ou email
4. Clique em **"New project"**

## Passo 2: Criar Projeto

Preencha:
- **Name:** `learnfromme` (ou qualquer nome)
- **Database Password:** Crie uma senha forte (anote!)
- **Region:** Escolha o mais próximo (ex: South America)
- **Pricing Plan:** Free (já vem selecionado)

Clique em **"Create new project"**

⏰ **Aguarde 2-3 minutos** enquanto o banco é criado...

## Passo 3: Executar SQL do Banco de Dados

1. No painel do Supabase, vá em **SQL Editor** (menu lateral esquerdo)
2. Clique em **"New query"**
3. **Abra o arquivo `database-schema.sql`** que está na pasta do projeto
4. **Copie TODO o conteúdo** do arquivo
5. **Cole no SQL Editor** do Supabase
6. Clique em **"Run"** (ou pressione Ctrl+Enter)

✅ Você deve ver: "Success. No rows returned"

## Passo 4: Pegar as Credenciais da API

1. No Supabase, vá em **Settings** (⚙️ no menu lateral)
2. Clique em **API**
3. Você vai ver duas informações importantes:

**Copie e salve:**
```
Project URL: https://xxxxx.supabase.co
anon public key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxxxx...
```

⚠️ **IMPORTANTE:** Guarde essas informações! Vamos usar no próximo passo.

---

# PARTE 2: FAZER DEPLOY NO VERCEL (5 minutos)

## Passo 5: Preparar o Projeto Localmente

### Opção A: Se você tem Git instalado (Recomendado)

1. Baixe a pasta completa do projeto `learnfromme-deploy`
2. Abra o terminal/prompt na pasta do projeto
3. Execute:

```bash
git init
git add .
git commit -m "Initial commit"
```

4. Crie um repositório no GitHub:
   - Acesse https://github.com/new
   - Nome: `learnfromme`
   - Deixe público ou privado
   - NÃO marque "Initialize with README"
   - Clique "Create repository"

5. Conecte e envie o código:
```bash
git remote add origin https://github.com/SEU_USUARIO/learnfromme.git
git branch -M main
git push -u origin main
```

### Opção B: Upload direto (Mais simples)

1. Vá em https://github.com/new
2. Crie repositório: `learnfromme`
3. Faça upload dos arquivos pela interface web do GitHub

## Passo 6: Criar Conta no Vercel

1. Acesse: https://vercel.com
2. Clique em **"Sign Up"**
3. Escolha **"Continue with GitHub"**
4. Autorize o Vercel a acessar seus repositórios

## Passo 7: Fazer Deploy

1. No dashboard do Vercel, clique em **"Add New..."** → **"Project"**
2. Procure pelo repositório **"learnfromme"**
3. Clique em **"Import"**

### Configure as Variáveis de Ambiente:

Na seção **"Environment Variables"**, adicione:

**Nome:** `VITE_SUPABASE_URL`
**Valor:** Cole o Project URL do Supabase (ex: https://xxxxx.supabase.co)

**Nome:** `VITE_SUPABASE_ANON_KEY`
**Valor:** Cole o anon public key do Supabase (aquela chave longa)

4. Clique em **"Deploy"**

⏰ **Aguarde 1-2 minutos** enquanto faz o build e deploy...

## Passo 8: Acessar Seu Site! 🎉

Quando terminar, você verá:

```
🎉 Congratulations!
Your project is live at:
https://learnfromme.vercel.app
```

**Clique no link e teste:**
- ✅ Veja as 60 experiências
- ✅ Adicione uma nova experiência
- ✅ Faça login como admin (senha: admin123)
- ✅ Teste o filtro de keywords

---

# 🎯 PRONTO! SEU SITE ESTÁ NO AR!

## URLs Importantes:

📱 **Seu site:** https://learnfromme.vercel.app (ou similar)
🗄️ **Banco de dados:** Dashboard do Supabase
⚙️ **Configurações:** Dashboard do Vercel

---

# 🔧 Próximos Passos (Opcional)

## 1. Personalizar URL

No Vercel:
1. Vá em **Settings** → **Domains**
2. Adicione domínio personalizado (ex: `learnfromme.com`)
3. Ou use o domínio grátis que o Vercel dá

## 2. Mudar Senha Admin

No arquivo `src/App.jsx`, linha ~76:
```javascript
if (adminPassword === 'admin123') {  // ← Mude aqui
```

Depois faça commit e push:
```bash
git add .
git commit -m "Changed admin password"
git push
```

O Vercel atualiza automaticamente!

## 3. Adicionar Analytics (Opcional)

No Vercel:
1. Vá em **Analytics** → **Enable**
2. Veja quantas pessoas acessam seu site!

---

# ❓ Problemas Comuns

## "Failed to fetch" ou erro de conexão

**Solução:** Verifique se:
1. Copiou corretamente o SUPABASE_URL e ANON_KEY
2. O banco de dados está rodando no Supabase
3. As variáveis de ambiente estão corretas no Vercel

## SQL deu erro

**Solução:** 
1. Delete o projeto no Supabase
2. Crie novo projeto
3. Execute o SQL novamente

## Deploy deu erro no Vercel

**Solução:**
1. Verifique se todos os arquivos estão no GitHub
2. Certifique-se que `package.json` está na raiz
3. Tente fazer deploy novamente

---

# 💡 Dicas Importantes

✅ **Sempre que mudar o código:**
```bash
git add .
git commit -m "Descrição da mudança"
git push
```
O Vercel atualiza automaticamente!

✅ **Para ver logs de erros:**
- Vercel: Dashboard → Project → Deployments → Logs
- Supabase: SQL Editor mostra erros

✅ **Backup do banco:**
- Supabase: Database → Backups (automático!)

---

# 🎊 Parabéns!

Você agora tem:
- ✅ Site profissional no ar
- ✅ Banco de dados real
- ✅ Sistema de moderação
- ✅ Tudo grátis e escalável

**Compartilhe o link e comece a receber experiências!**

---

# 📞 Precisa de Ajuda?

- 📚 Docs Vercel: https://vercel.com/docs
- 📚 Docs Supabase: https://supabase.com/docs
- 🐛 Problemas? Verifique os logs no Vercel

**Boa sorte com o LearnFromMe! 🚀**
