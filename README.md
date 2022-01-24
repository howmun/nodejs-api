# nodejs-api

Simple wheather API integrate with Stripe billing

https://www.youtube.com/watch?v=MbqSMgMAzxU


1. Install stripe and express for the project:
```
npm i express stripe
# Run the dev server
npm .
# edit your stripe api key:
 require('stripe')('your stripe api key')
```

2. Install stripe-cli, and run it to forward stripe webhook to localhost:
./stripe listen --forward-to localhost:8080/webhook

3. Open VScode thunder client and import thunder-collection

4. Call to localhost:8080/checkout -> this will create a checkout URL for you to use browser to pay at stripe,
e.g.   "url": "https://checkout.stripe.com/pay/cs_test_a1EUXuTK6Dwlw83ayP2QJycRCnMuUZMvJfcPdnX5b2gG68k2FwyAv7CJj0#fidkdWxOYHwnPyd1blpxYHZxWjA0Tkkwf0JMdVNHSldJR2BLaEZuUUo3bUJJUTBfNEZwSksxbnFPSVAzMElNQlBuUl19UG9tV0NWV19QfE9NNnBsNW9LTW1GX0o2ajxiQURJM01tXWpjaFNrNTVKf3NnTFBIXycpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl"

5. pay with testing card 4242 4242 4242 4242, any CVV and any future date

6. you will get the user api key at console log of node, replace the api key at thunder client /api?apiKey=xxx

7. start consuming localhost:8080/api with the key and see the usage being charged at stripe portal