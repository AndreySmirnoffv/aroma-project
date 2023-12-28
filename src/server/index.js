const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const stripe = require("stripe")(process.env.STRIPE_PUBLIC_KEY);

const port = 8000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
const stripeChargeCallback = (res) => (stripeErr, StripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: StripeRes });
  }
};

const PaymentApi = (app) => {
  app.get("localhost:3000/checkout", (req, res) => {
    console.log("hello world");
    res.send({
      message: "Hello Stripe checkout server!",
      timestamp: new Date().toISOString(),
    });
  });
  app.post("localhost:3000/checkout", (req, res) => {
    const body = {
      source: req.body.token.id,
      amount: req.body.amount,
      currency: "eur",
    };
    stripe.charges.create(body, stripeChargeCallback(res));
  });
  return app;
};
app.listen(port, (error) => {
  if (error) throw error;
  console.log(`Сервер запущен на порту ${port}`);
});

module.exports = {
  PaymentApi: PaymentApi,
};
