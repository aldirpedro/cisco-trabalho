module.exports = (req, res) => {
  // placeholder login endpoint - always succeeds
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method === 'POST') {
    const { email } = req.body || {};
    return res.json({ mensagem: 'login simulado', email });
  }
  res.status(405).json({ erro: 'Método não permitido' });
};