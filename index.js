var minimist = require('minimist')
var Stripe = require('stripe')
var Server = require('./server')

var args = minimist(process.argv.splice(2))
var port = process.env.PORT || args.port || 8080
var TOKEN = process.env.STRIPE_TOKEN || args.STRIPE_TOKEN
if (!TOKEN) throw new Error('STRIPE_TOKEN required, got ' + TOKEN)

var stripe = Stripe(TOKEN)
var server = Server(stripe)
server.listen(port, function () {
  console.log('server listening on port', port)
})
