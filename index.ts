import express from "express";
import cors from "cors";
import Database from "better-sqlite3";
const db = Database('./db/data.db', {verbose: console.log})


const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;

type Quote = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  quote: string;
  image: string;
};



app.get("/", (req, res) => {
  res.send(`
    <h1> Motivational Quotes! </h2>
    <p>  My favorite quotes : </p>
    <ul>
  <li> <a href="/quotes"> Quotes </a> </li>
    </ul>

    `);
});

app.get("/quotes/:id", (req, res) => {
  const id = Number(req.params.id);
  const idMatch = quotes.find((quote) => quote.id === id);

  if (idMatch) {
    res.send(idMatch);
  } else {
    res.status(404).send({ error: " Quote not found." });
  }
});

app.post("/quotes", (req, res) => {
  let errors: string[] = [];

  if (typeof req.body.firstName !== "string") {
    errors.push("FirstName Its not a string!");
  }
  if (typeof req.body.lastName !== "string") {
    errors.push(" lastName Its not a string!");
  }
  if (typeof req.body.quote !== "string") {
    errors.push(" Quote Its not a string!");
  }
  if (typeof req.body.age !== "number") {
    errors.push(" Age  Its not a number!");
  }
  if (typeof req.body.image !== "string") {
    errors.push(" image  Its not a string!");
  }
  // anddd if there are noo manyy errors
  if (errors.length === 0) {
    const newQuote: Quote = {
      id: quotes[quotes.length - 1].id + 1,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      quote: req.body.quote,
      age: req.body.age,
      image: req.body.image,
    };
    quotes.push(newQuote);
    res.send(newQuote);
  } else {
    res.status(400).send({ errors: errors });
  }
});

app.get("/quotes", (req, res) => {
  res.send(quotes);
});

app.delete("/quotes/:id", (req, res) => {
  const id = Number(req.params.id);
  const quoteIndexToDelete = quotes.findIndex((quote) => quote.id === id);

  if (quoteIndexToDelete > -1) {
    quotes = quotes.filter((quote) => quote.id !== id);
    res.send({ message: "Quote deleted!" });
  } else {
    res.status(404).send({ error: "Qoute not found!" });
  }
  // quotes.splice(quoteToDelete, 1)
  // res.send(quotes)
});

app.patch("/quotes/:id", (req, res) => {
  // look for a quote
  let id = Number(req.params.id);
  let match = quotes.find((quote) => quote.id === id);

  // soo if we fu=ind that match

  if (match) {
    if (req.body.firstName) {
      match.firstName = req.body.firstName;
    }

    if (req.body.lastName) {
      match.lastName = req.body.lastName;
    }

    if (req.body.age) {
      match.age = req.body.age;
    }

    if (req.body.quote) {
      match.quote = req.body.quote;
    }

    if (req.body.image) {
      match.image = req.body.image;
    }

    res.send(match);
  } else {
    res.status(404).send({ error: "Quote not Found!" });
  }
});

app.listen(port, () => {
  console.log(` Yessss!!! http://localhost:${port} `);
});
