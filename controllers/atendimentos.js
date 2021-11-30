module.exports = app => {
  app.get('/atendimentos', (request, response) => response.send('Vocês está em atendimentos'))
}