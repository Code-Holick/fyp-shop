require("dotenv").config()
const express = require("express");
const SSLCommerzPayment = require('sslcommerz-lts');
const cors = require("cors");

const app = express();
app.use(cors({
  origin: "*"
}));
app.use(express.json());
const path = require("path");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

app.get("/", (req, res) => {
  res.send("Welcome to online shop.");
});

app.post('/ssl-checkout', async (req, res) => {
  const data  = req.body;
  console.log(data);
  
  const sslcz = new SSLCommerzPayment(process.env.STORE_ID, process.env.STORE_PASS, false);
    sslcz.init(data).then(apiResponse => {
        // Redirect the user to payment gateway
        let GatewayPageURL = apiResponse.GatewayPageURL;
        res.redirect(GatewayPageURL)
    });
});

app.post('/checkout-suc', async (req, res) => {
  res
    .redirect('http://localhost:3000/checkout-success');
});

app.post('/checkout-fail', async (req, res) => {
  res
    .redirect('http://localhost:3000/checkout-failure');
});

const PORT = process.env.PORT || 4242;
app.listen(PORT, () => console.log(`Node server listening on port ${PORT}`));

