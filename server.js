
const express = require("express");
const app = express();
//Environment Variables
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// ("sk_test_tR3PYbcVNZZ796tH88S4VQ2u")

//Connecting MongoDB
const mongoose = require("mongoose");
// mongodb://localhost:27017/icdamv_2
mongoose.connect(
  // "mongodb://localhost:27017/icdamv_2",
  `mongodb+srv://icdam:${process.env.CLUSTER_PASS}@icdamv.hiyrd.mongodb.net/icdam_2?retryWrites=true&w=majority`,
  // "mongodb+srv://icdam:icdam_2.0@icdamv.hiyrd.mongodb.net/icdam_2",
  {
    useNewUrlParser: !0,
    useUnifiedTopology: !0,
    useCreateIndex: 1,
  }
).then(() => console.log("Database Connected"));

//View Engine & Static File Routing
app.set("view engine", "ejs");
app.use("/assets", express.static("assets"));

app.post("/api/create-checkout-session", async (req, res) => {
  let amount = 1000;
  let Productname = "";
  let currencyCode = "usd";
  if (req.query.country == "India") {
    currencyCode = "inr";
  }
  // 2500000

  switch (req.query.category) {
    case "Research Scholar/Student":
      
      amount = currencyCode == "inr" ? 2490000 : 30000;
      Productname = "Research Scholar/Student";
      break;
    case "Academician":
      amount = currencyCode == "inr" ? 2900000 : 35000;
      Productname = "Academician";
      break;
    case "Industrial Participant":
      amount = currencyCode == "inr" ? 3320000 : 40000;
      Productname = "Industrial Participant";
      break;
    case "Special Membership":
      amount = req.query.amount * 100;
      Productname = "Special Membership";

    case "SAARC Research Scholar/Student":
      
      amount = currencyCode == "inr" ? 2075000: 25000;
      Productname = "Research Scholar/Student";
      break;
    case "SAARC Academician":
      amount = currencyCode == "inr" ?  2490000 : 30000;
      Productname = "Academician";
      break;
    case "SAARC Industrial Participant":
      amount = currencyCode == "inr" ? 2900000 : 35000;
      Productname = "Industrial Participant";
      break;
    case "SAARC Special Membership":
        amount = req.query.amount * 100;
        Productname = "Special Membership";      
    
    default:
      break;
  }
  if (Productname == "") {
    return Error("Bad Request");
  }
  const session = await stripe.checkout.sessions.create({
    payment_method_types:["card"],
    // 'pm_card_visa',
     
    // customer_email: req.query.mail,
    line_items: [
      {
        price_data: {
          currency: currencyCode,
          product_data: {
            name: Productname,
          },
          unit_amount: amount + amount * 0.03,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    // success_url: "https://icdam-conf.com/success",
    // cancel_url: "https://icdam-conf.com/cancelled",
    success_url: "https://icdam-conf.com?payment=success",
    cancel_url: "https://icdam-conf.com?payment=cancelled",
  });

  res.json({ id: session.id, url: session.url })
});

//Parsing Body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Express-Session Config
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: { maxAge: 180 * 60 * 1000 },
  })
);

app.use("/", require("./routes/Home.routes"));

const PORT = process.env.PORT || 80;
app.listen(PORT, console.log(`Server has started at PORT ${PORT}`));