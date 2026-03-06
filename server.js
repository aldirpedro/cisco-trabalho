const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// ── MIDDLEWARE ──
app.use(cors());
app.use(express.json());

// ── DATABASE ──
const db = new Database(path.join(__dirname, 'database.sqlite'));

// Criar tabela se não existir
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    nome        TEXT    NOT NULL,
    email       TEXT    NOT NULL UNIQUE,
    telefone    TEXT    DEFAULT '',
    cargo       TEXT    DEFAULT '',
    data_criacao TEXT   DEFAULT (datetime('now'))
  )
`);

// ── VALIDAÇÕES ──
function validateUser({ nome, email }) {
  if (!nome || nome.trim().length < 2) return 'Nome deve ter pelo menos 2 caracteres.';
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Email inválido.';
  return null;
}

// ── ROTAS ──

// GET /users — listar todos
app.get('/users', (req, res) => {
  try {
    const users = db.prepare('SELECT * FROM users ORDER BY id DESC').all();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao obter utilizadores.' });
  }
});

// GET /users/:id — obter um
app.get('/users/:id', (req, res) => {
  try {
    const user = db.prepare('SELECT * FROM users WHERE id = ?').get(req.params.id);
    if (!user) return res.status(404).json({ error: 'Utilizador não encontrado.' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao obter utilizador.' });
  }
});

// POST /users — criar
app.post('/users', (req, res) => {
  const { nome, email, telefone = '', cargo = '' } = req.body;
  const err = validateUser({ nome, email });
  if (err) return res.status(400).json({ error: err });

  try {
    const stmt = db.prepare(
      'INSERT INTO users (nome, email, telefone, cargo) VALUES (?, ?, ?, ?)'
    );
    const result = stmt.run(nome.trim(), email.trim().toLowerCase(), telefone.trim(), cargo.trim());
    const newUser = db.prepare('SELECT * FROM users WHERE id = ?').get(result.lastInsertRowid);
    res.status(201).json(newUser);
  } catch (err) {
    if (err.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      return res.status(409).json({ error: 'Já existe um utilizador com este email.' });
    }
    res.status(500).json({ error: 'Erro ao criar utilizador.' });
  }
});

// PUT /users/:id — atualizar
app.put('/users/:id', (req, res) => {
  const { nome, email, telefone = '', cargo = '' } = req.body;
  const err = validateUser({ nome, email });
  if (err) return res.status(400).json({ error: err });

  try {
    const existing = db.prepare('SELECT * FROM users WHERE id = ?').get(req.params.id);
    if (!existing) return res.status(404).json({ error: 'Utilizador não encontrado.' });

    db.prepare(
      'UPDATE users SET nome = ?, email = ?, telefone = ?, cargo = ? WHERE id = ?'
    ).run(nome.trim(), email.trim().toLowerCase(), telefone.trim(), cargo.trim(), req.params.id);

    const updated = db.prepare('SELECT * FROM users WHERE id = ?').get(req.params.id);
    res.json(updated);
  } catch (err) {
    if (err.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      return res.status(409).json({ error: 'Já existe um utilizador com este email.' });
    }
    res.status(500).json({ error: 'Erro ao atualizar utilizador.' });
  }
});

// DELETE /users/:id — remover
app.delete('/users/:id', (req, res) => {
  try {
    const existing = db.prepare('SELECT * FROM users WHERE id = ?').get(req.params.id);
    if (!existing) return res.status(404).json({ error: 'Utilizador não encontrado.' });

    db.prepare('DELETE FROM users WHERE id = ?').run(req.params.id);
    res.json({ message: `Utilizador "${existing.nome}" removido com sucesso.` });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao remover utilizador.' });
  }
});

// ── HEALTH CHECK ──
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ── START ──
app.listen(PORT, () => {
  console.log(`\n🚀 NetProject API a correr em http://localhost:${PORT}`);
  console.log(`   GET    /users       → listar utilizadores`);
  console.log(`   POST   /users       → criar utilizador`);
  console.log(`   PUT    /users/:id   → atualizar utilizador`);
  console.log(`   DELETE /users/:id   → remover utilizador`);
  console.log(`   GET    /health      → verificar estado\n`);
});