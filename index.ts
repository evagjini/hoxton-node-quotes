import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
const port = 5000


const quotes =[
    {
        id:1,
        author: "Winston Churchill",
        quote:"Success is not final, failure is not fatal: it is the courage to continue that counts."
        
    },
    {
        id:2,
        author: "Oprah Winfrey",
        quote:"You define your own life. Don't let other people write your script."
        
    },
    {
        id:3,
        author: "Walt Whitman",
        quote:"Keep your face always toward the sunshine, and shadows will fall behind you"
        
    },
    {
        id:4,
        author: "Audrey Hepburn",
        quote:"Nothing is impossible. The word itself says 'I'm possible!"
        
    },
    {
        id:5,
        author: " Lady Gaga",
        quote:"Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on."
        
    },
    {
        id:6,
        author: "Mother Tereza",
        quote:"Spread love everywhere you go."
        
    }



]

app.get('/',(req, res) =>{
    res.send(`
    <h1> Motivational Quotes! </h2>
    <p> Here are my favorite quotes : </p>
    <ul>
  <li> <a href="/quotes"> Quotes </a> </li>
    </ul>

    `)
})

    app.get('/quotes', (req, res)=>{
        res.send(quotes)
    })

    app.listen(port,()=>{
     console.log(`Example at port http://localhost:${port} `)
    })
