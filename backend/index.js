import express from 'express'
import cors from 'cors'
const knjige =require('./knjige.json')
const app = express()

app.use(cors())
app.get('/knjige', (req, res) =>  res.send(knjige))
app.get('/knjige/:isbn', (req, res) =>  {
    const {isbn} = req.params
    const knjiga = knjige.find(el => el.isbn == isbn)
    res.send(knjiga)
})

app.listen(5000, () => {console.log('PORT 5000')})
