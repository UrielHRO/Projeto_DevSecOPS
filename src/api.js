/*
module.exports = (req, res) => {
  res.status(200).json({ mensagem: 'API funcionando corretamente!' });
};

*/


module.exports = (req, res) => {
  // Pega o parâmetro 'nome' da URL. Ex: /?nome=Mundo
  const nome = req.query.nome || 'Mundo';

  // VULNERABILIDADE: O parâmetro 'nome' é inserido diretamente no HTML
  // sem ser validado. Isso permite que um atacante injete scripts.
  const mensagemHTML = `<h1>Olá, ${nome}!</h1>`;

  // Define o tipo de conteúdo como HTML
  res.setHeader('Content-Type', 'text/html');
  
  // Envia a resposta vulnerável
  res.status(200).send(mensagemHTML);
};


