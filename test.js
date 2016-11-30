var TEST_TOKEN = process.env.STRIPE_TEST_API_KEY
var CLIENT_TEST_TOKEN = 'pk_test_SLHYKUBbqjnPFTXYcNrYaNAc'
var test = require('tape')
var needle = require('needle')
var stripe = require('stripe')(TEST_TOKEN)
var Server = require('./server')

var server = Server(stripe)
var url = 'http://localhost:8001'
server.listen(8001, function () {
  console.log('listening')
  test('/ GET works', function (t) {
    needle.get(url, function (err, res) {
      t.error(err)
      t.same(res.body, 'Hello World!')
      t.end()
    })
  })
  test('/charge POST works', function (t) {
    var params = {
      amount: 100,
      currency: 'usd',
      source: 'test',
    }
    needle.post(url + '/charge', params, {json: true}, function (err, res) {
      t.error(err)
      console.log(res.body)
      t.end()
    })
  })
  test.onFinish(function () {
    server.close()
  })
})
