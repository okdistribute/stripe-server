# payments

Microservice that handles stripe payments. Right now, only works with the 'charge' option.

## API

#### `GET /`

PING for health of the service.

#### `POST /charge`

Create a charge for a given card.

Request:
```
{
  "amount": 2000,
  "currency": "usd", 
  "source": //obtained with stripe.js/checkout,
  "description": "Charge for a particular person",
}
```

Response:

See https://stripe.com/docs/api/node#charge_object


