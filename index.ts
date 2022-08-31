import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
const port = 5000


const quotes =[
    {
        id:1,
        firstName: "Winston",
        lastName:"Churchill",
        quote:"Success is not final, failure is not fatal: it is the courage to continue that counts.",
        image:"https://www.normandy1944.info/templates/yootheme/cache/d-day-normandy-beyond-commanders-churchill-936c0daf.jpeg"
        
    },
    {
        id:2,
        firstName: "Oprah",
        lastName: "Winfrey",
        age:68,
        quote:"You define your own life. Don't let other people write your script.",
        image:"https://www.biography.com/.image/t_share/MTY2NTIzMDQzOTIzODk1NTM4/oprah-photo-by-vera-anderson_wireimage.jpg"
        
    },
    {
        id:3,
        firstName: "Walt",
        lastname:" Whitman",
        quote:"Keep your face always toward the sunshine, and shadows will fall behind you",
        image:"https://www.biography.com/.image/t_share/MTE5NTU2MzE2NDA0ODExMjc1/walt-whitman-9530126-1-402.jpg"
        
    },
    {
        id:4,
        firstName: "Audrey",
        lastName:"Hepburn",
        quote:"Nothing is impossible. The word itself says 'I'm possible!",
        image:"https://www.biography.com/.image/t_share/MTc5OTk1NTMxMTYwODU1ODk2/audrey-hepburn-gettyimages-517443052.jpg"
        
    },
    {
        id:5,
        firstName: " Lady ",
        lastName:"Gaga",
        age:36,
        quote:"Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on.",
        image:"https://www.ngnews247.com/wp-content/uploads/2021/05/Lady-Gaga-Biography.jpg"
        
    },
    {
        id:6,
        firstName: "Ken",
        lastName:"Poirot",
        age:50,
        quote:"Today is your opportunity to build the tomorrow that you want.",
        image:"https://i.pinimg.com/736x/20/4c/26/204c26eb24ece5255d495d3e1f3788b4.jpg"
        
    }



]

app.get('/',(req, res) =>{
    res.send(`
    <h1> Motivational Quotes! </h2>
    <p>  My favorite quotes : </p>
    <ul>
  <li> <a href="/quotes"> Quotes </a> </li>
    </ul>

    `)
})

    app.get('/quotes/:id', (req, res)=>{
        const id = Number(req.params.id)
        const idMatch = quotes.find(quote => quote.id === id)
        res.send(idMatch)
    })
     
    app.get
    
    app.get('/quotes', (req, res)=>{
        res.send(quotes)
    })
    


    app.listen(port,()=>{
     console.log(` Yessss!!! http://localhost:${port} `)
    })
