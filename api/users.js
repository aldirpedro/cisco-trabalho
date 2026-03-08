module.exports = (req, res) => {
  // simple in-memory list of users
  let users = [];
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method === 'GET') return res.json(users);
  if (req.method === 'POST') {
    const body = req.body || {};
    const user = { ...body, id: Date.now() };
    users.push(user);
    return res.status(201).json(user);
  }
  res.status(404).json({ erro: 'Rota não encontrada' });
};