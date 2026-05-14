-- DESCRIÇÃO DO FICHEIRO: Este ficheiro define a estrutura da base de dados e os objetos SQL usados pela aplicação.

-- Cria extensões necessárias para gerar UUIDs.
create extension if not exists "pgcrypto";

-- Tabela de utilizadores com dados básicos do perfil e permissão de administração.
create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  full_name text not null,
  email text unique not null,
  birth_date date,
  gender text,
  profile_completed boolean not null default false,
  email_confirmed boolean not null default true,
  email_confirmation_token_hash text,
  email_confirmation_sent_at timestamptz,
  password_reset_token_hash text,
  password_reset_expires_at timestamptz,
  is_admin boolean not null default false,
  has_course_access boolean not null default false,
  course_access_granted_at timestamptz,
  password_hash text not null,
  created_at timestamptz not null default now()
);

-- Tabela de progresso do curso com estado de cada módulo por utilizador.
create table if not exists course_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  module_id integer not null,
  completed boolean not null default false,
  quiz_score integer,
  quiz_answers jsonb,
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  unique(user_id, module_id)
);


-- Tabela de mensagens de contacto com estado de entrega de e-mail.
create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  email_delivery_status text not null default 'pending',
  email_delivery_error text,
  created_at timestamptz not null default now()
);

create index if not exists contact_messages_created_at_idx on contact_messages(created_at desc);

-- Tabela de compras para auditar pagamentos e associar o curso ao utilizador.
create table if not exists course_purchases (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  stripe_event_id text unique not null,
  stripe_checkout_session_id text unique not null,
  stripe_payment_intent_id text,
  stripe_customer_email text not null,
  amount_total integer not null,
  currency text not null,
  paid_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create index if not exists course_purchases_user_paid_at_idx on course_purchases(user_id, paid_at desc);
