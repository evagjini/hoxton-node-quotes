import Database from "better-sqlite3";
const db = Database("./db/data.db", { verbose: console.log });

function QuotesStuff() {
  const quotes = [
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

  const createQuotesTable = db.prepare(`
CREATE TABLE IF NOT EXISTS Quotes(
    id INTEGER,
    quote TEXT,
    first_name TEXT,
    last_name TEXT,
    image TEXT,
    age INTEGER,
    PRIMARY KEY(id)
); `);

  createQuotesTable.run();

  const deleteALLQuotes = db.prepare(`
DELETE FROM Quotes`);
  deleteALLQuotes.run();

  const createQuote = db.prepare(`
INSERT INTO Quotes (quote, first_name, last_name,image, age) VALUES (?, ?,?,?,?)`);

  for (let quote of quotes) {
    createQuote.run(
      quote.quote,
      quote.firstName,
      quote.lastName,
      quote.image,
      quote.age
    );
  }
}
QuotesStuff();
