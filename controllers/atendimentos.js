module.exports = app => {
  app.get('/atendimentos', (request, response) => {
    response.send('Vocês está fazendo um GET')
  })

  app.post('/atendimentos', (req, res) => {
    console.log(req.body)
    res.send('Você está fazendo um POST')
  })
}