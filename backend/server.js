const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3001;
const DATABASE = path.join(__dirname, 'database.sqlite');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Inicializar banco de dados SQLite
const db = new sqlite3.Database(DATABASE, (err) => {
  if (err) {
    console.error('Erro ao abrir banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados SQLite');
    initDatabase();
  }
});

// Criar tabela se não existir
function initDatabase() {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      telefone TEXT DEFAULT '',
      cargo TEXT DEFAULT '',
      data_criacao TEXT DEFAULT (datetime('now'))
    )
  `, (err) => {
    if (err) {
      console.error('Erro ao criar tabela:', err);
    } else {
      console.log('Tabela "users" pronta');
    }
  });
}

// ====== ROTAS ======

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', mensagem: 'Servidor está funcionando', timestamp: new Date() });
});

// GET - Listar todos os utilizadores
app.get('/users', (req, res) => {
  db.all('SELECT * FROM users ORDER BY data_criacao DESC', (err, rows) => {
    if (err) {
      res.status(500).json({ erro: err.message });
    } else {
      res.json(rows);
    }
  });
});

// GET - Obter um utilizador por ID
app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  db.get('SELECT * FROM users WHERE id = ?', [id], (err, row) => {
    if (err) {
      res.status(500).json({ erro: err.message });
    } else if (!row) {
      res.status(404).json({ erro: 'Utilizador não encontrado' });
    } else {
      res.json(row);
    }
  });
});

// POST - Criar novo utilizador
app.post('/users', (req, res) => {
  const { nome, email, telefone = '', cargo = '' } = req.body;

  // Validação básica
  if (!nome || !email) {
    return res.status(400).json({ erro: 'Nome e email são obrigatórios' });
  }

  const query = `
    INSERT INTO users (nome, email, telefone, cargo)
    VALUES (?, ?, ?, ?)
  `;

  db.run(query, [nome, email, telefone, cargo], function(err) {
    if (err) {
      if (err.message.includes('UNIQUE constraint failed')) {
        res.status(409).json({ erro: 'Email já existe' });
      } else {
        res.status(500).json({ erro: err.message });
      }
    } else {
      res.status(201).json({
        id: this.lastID,
        nome,
        email,
        telefone,
        cargo,
        data_criacao: new Date().toISOString()
      });
    }
  });
});

// PUT - Atualizar utilizador
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { nome, email, telefone = '', cargo = '' } = req.body;

  // Validação básica
  if (!nome || !email) {
    return res.status(400).json({ erro: 'Nome e email são obrigatórios' });
  }

  const query = `
    UPDATE users
    SET nome = ?, email = ?, telefone = ?, cargo = ?
    WHERE id = ?
  `;

  db.run(query, [nome, email, telefone, cargo, id], function(err) {
    if (err) {
      if (err.message.includes('UNIQUE constraint failed')) {
        res.status(409).json({ erro: 'Email já existe' });
      } else {
        res.status(500).json({ erro: err.message });
      }
    } else if (this.changes === 0) {
      res.status(404).json({ erro: 'Utilizador não encontrado' });
    } else {
      res.json({ mensagem: 'Utilizador atualizado com sucesso' });
    }
  });
});

// DELETE - Remover utilizador
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;

  db.run('DELETE FROM users WHERE id = ?', [id], function(err) {
    if (err) {
      res.status(500).json({ erro: err.message });
    } else if (this.changes === 0) {
      res.status(404).json({ erro: 'Utilizador não encontrado' });
    } else {
      res.json({ mensagem: 'Utilizador removido com sucesso' });
    }
  });
});

// ====== INICIAR SERVIDOR ======

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  console.log(`📁 Banco de dados: ${DATABASE}`);
});

// Fechar banco de dados ao encerrar
process.on('SIGINT', () => {
  console.log('\nEncerrando servidor...');
  db.close((err) => {
    if (err) {
      console.error('Erro ao fechar banco de dados:', err);
    } else {
      console.log('Banco de dados fechado');
    }
    process.exit(0);
  });
});
