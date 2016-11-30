var bodyParser = require('body-parser')
var Router = require('router')
var assert = require('assert')

module.exports = function (stripe) {
  var router = Router()
  router.use(bodyParser.json())
  router.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('Hello World!')
  })

  router.post('/charge', function (req, res) {
    assert(Number.isInteger(req.body.amount), 'amount is an integer')
    assert(typeof req.body.currency === 'string', 'currency is a string')
    assert(typeof req.body.source === 'string', 'source is a string')

    stripe.charges.create(req.body, function (err, resp) {
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(resp))
    })

  })
  return router
}
