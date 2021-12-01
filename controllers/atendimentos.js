module.exports = app => {
  app.get('/atendimentos', (request, response) => response.send('Vocês está fazendo um GET'))

  app.post('/atendimentos', (request, response) => response.send('Você está fazendo um POST'))
}