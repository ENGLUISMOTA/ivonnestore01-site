# Configuração do Supabase — Loja Jumper

Siga os passos abaixo **uma única vez** para ativar o sistema de cadastros.

---

## 1. Criar conta e projeto

1. Acesse **https://supabase.com** e crie uma conta gratuita.
2. Clique em **"New project"**.
3. Dê um nome (ex: `jumper-loja`), escolha uma senha forte e selecione a região **South America (São Paulo)**.
4. Aguarde ~2 minutos até o projeto ficar pronto.

---

## 2. Criar a tabela de cadastros

No menu lateral, vá em **SQL Editor** e cole o código abaixo. Clique em **Run**:

```sql
-- Tabela principal de cadastros
CREATE TABLE coupon_registrations (
  id                uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name              text NOT NULL,
  whatsapp          text NOT NULL,
  instagram         text NOT NULL,
  coupon_code       text NOT NULL,
  marketing_consent boolean NOT NULL DEFAULT false,
  created_at        timestamptz NOT NULL DEFAULT now()
);

-- Permite que qualquer visitante INSIRA um novo cadastro (sem autenticação)
ALTER TABLE coupon_registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "insert_public"
  ON coupon_registrations FOR INSERT
  WITH CHECK (true);

-- Somente quem usa a chave de serviço (admin.html via anon key com RLS) pode LER
CREATE POLICY "select_anon"
  ON coupon_registrations FOR SELECT
  USING (true);

-- Somente quem usa a chave de serviço pode ATUALIZAR cupons
CREATE POLICY "update_anon"
  ON coupon_registrations FOR UPDATE
  USING (true);
```

> ⚠️ Para produção com dados sensíveis, é recomendado restringir a leitura
> usando autenticação do próprio Supabase. O setup acima é suficiente para
> uso interno da equipe.

---

## 3. Pegar as credenciais

1. No menu lateral, vá em **Project Settings → API**.
2. Copie:
   - **Project URL** (ex: `https://xyzabc.supabase.co`)
   - **anon public key** (começa com `eyJ...`)

---

## 4. Colar as credenciais nos dois arquivos

### `src/app/components/CouponForm.tsx`
Localize as linhas:
```ts
const SUPABASE_URL      = 'COLE_SUA_SUPABASE_URL_AQUI';
const SUPABASE_ANON_KEY = 'COLE_SUA_SUPABASE_ANON_KEY_AQUI';
```
Substitua pelos valores copiados.

### `admin.html`
Localize as mesmas linhas no início do bloco `<script>` e substitua da mesma forma.

---

## 5. Alterar prefixo do cupom e data de validade

### Via código (permanente)
Em `src/app/components/CouponForm.tsx`, edite:
```ts
const COUPON_PREFIX      = 'JUMPER';       // ex: 'JUMPER', 'PROMO', 'SALE'
const COUPON_VALID_UNTIL = '31/07/2026';   // data que aparece para o cliente
```

### Via painel admin (temporário, por navegador)
No `admin.html`, a seção **Configurações do Cupom** permite alterar
o prefixo e a validade sem mexer no código — útil para promoções rápidas.

---

## 6. Adicionar ou remover funcionários do painel

Em `admin.html`, localize o array `USERS`:
```js
const USERS = [
  { user: 'admin',       pass: 'jumper2026',  label: 'Administrador' },
  { user: 'funcionario', pass: 'loja@jumper', label: 'Funcionário'   },
];
```
Adicione ou remova entradas conforme necessário.
**Troque as senhas padrão antes de publicar o arquivo.**

---

## 7. Deploy

- O `admin.html` é um arquivo HTML puro — pode ficar em qualquer pasta do servidor,
  ou aberto localmente com duplo clique (funciona no navegador sem servidor).
- Para proteger o acesso, coloque-o em uma pasta não indexada ou use
  `.htaccess` / autenticação básica no servidor.

---

## Resumo dos arquivos alterados

| Arquivo | O que mudou |
|---|---|
| `src/app/components/CouponForm.tsx` | Salva cadastro no Supabase; prefixo e validade configuráveis |
| `admin.html` | **NOVO** — painel de login + tabela de clientes + edição de cupom + export CSV |
| `SETUP_SUPABASE.md` | **NOVO** — este guia |

