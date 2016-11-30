var http = require('http')
var Router = require('./router')
var finalhandler = require('finalhandler')

module.exports = function (stripe) {
  var server = http.createServer(function (req, res) {
    var router = Router(stripe)
    router(req, res, finalhandler(req, res))
  })
  return server
}
