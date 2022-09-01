import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json())
const port = 5000;

type Quote  ={
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    quote: string;
    image: string;
} 
const  quotes = [
  {
    id: 1,
    firstName: "Winston",
    lastName: "Churchill",
    age: 72,
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    image:
      "https://www.normandy1944.info/templates/yootheme/cache/d-day-normandy-beyond-commanders-churchill-936c0daf.jpeg",
  },
  {
    id: 2,
    firstName: "Oprah",
    lastName: "Winfrey",
    age: 68,
    quote:
      "You define your own life. Don't let other people write your script.",
    image:
      "https://www.biography.com/.image/t_share/MTY2NTIzMDQzOTIzODk1NTM4/oprah-photo-by-vera-anderson_wireimage.jpg",
  },
  {
    id: 3,
    firstName: "Walt",
    lastname: " Whitman",
    age: 78,
    quote:
      "Keep your face always toward the sunshine, and shadows will fall behind you",
    image:
      "https://www.biography.com/.image/t_share/MTE5NTU2MzE2NDA0ODExMjc1/walt-whitman-9530126-1-402.jpg",
  },
  {
    id: 4,
    firstName: "Audrey",
    lastName: "Hepburn",
    age: 68,
    quote: "Nothing is impossible. The word itself says 'I'm possible!",
    image:
      "https://www.biography.com/.image/t_share/MTc5OTk1NTMxMTYwODU1ODk2/audrey-hepburn-gettyimages-517443052.jpg",
  },
  {
    id: 5,
    firstName: " Lady ",
    lastName: "Gaga",
    age: 36,
    quote:
      "Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on.",
    image:
      "https://www.ngnews247.com/wp-content/uploads/2021/05/Lady-Gaga-Biography.jpg",
  },
  {
    id: 6,
    firstName: "Ken",
    lastName: "Poirot",
    age: 50,
    quote: "Today is your opportunity to build the tomorrow that you want.",
    image:
      "https://i.pinimg.com/736x/20/4c/26/204c26eb24ece5255d495d3e1f3788b4.jpg",
  },
];

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
  
  if (idMatch){

    res.send(idMatch);
  }
  else{
    res.status(404).send({error : ' Quote not found.'})
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
if (errors.length === 0){
    const newQuote: Quote  = {
        id: quotes[quotes.length - 1].id + 1,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        quote: req.body.quote,
        age: req.body.age,
        image: req.body.image,
      };
      quotes.push(newQuote);
      res.send(newQuote);

}
else{
    res.status(400).send({errors: errors})
}
 
 
});

app.get("/quotes", (req, res) => {
  res.send(quotes);
});

app.delete('/quotes/:id',(req,res)=>{
    const id = Number(req.params.id)
    const quoteToDelete = quotes.findIndex(quote => quote.id === id)

    // if(quoteToDelete > -1){
    //     quotes = quotes.filter(quote => quote.id !== id)
    //     res.send({message: 'Quote deleted!'})
    // }else {
    //     res.status(404).send({error: 'Qoute not found!'})

    // } 
    quotes.splice(quoteToDelete, 1)
    res.send(quotes)
    })

app.listen(port, () => {
  console.log(` Yessss!!! http://localhost:${port} `);
});
