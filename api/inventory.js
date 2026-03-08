let inventory = [];

// Vercel serverless handler expects (req, res) exported as default or module.exports
module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { method, url } = req;
  // strip querystring
  const path = url.split('?')[0];

  if (path === '/api/inventory' && method === 'GET') {
    return res.json(inventory);
  }

  if (path === '/api/inventory' && method === 'POST') {
    const body = req.body || {};
    const item = { ...body, id: Date.now() };
    inventory.push(item);
    return res.status(201).json(item);
  }

  const idMatch = path.match(/^\/api\/inventory\/(\d+)$/);
  if (idMatch) {
    const id = parseInt(idMatch[1], 10);
    if (method === 'PUT') {
      const body = req.body || {};
      inventory = inventory.map(i => (i.id === id ? { ...i, ...body } : i));
      return res.json({ mensagem: 'Equipamento atualizado com sucesso' });
    }
    if (method === 'DELETE') {
      inventory = inventory.filter(i => i.id !== id);
      return res.json({ mensagem: 'Equipamento removido com sucesso' });
    }
  }

  res.status(404).json({ erro: 'Rota não encontrada' });
};