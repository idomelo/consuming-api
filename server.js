const cors = require('cors')
const express = require('express')
const app = express()

const allowedOrigins = [
  'http://127.0.0.1:5500'
]

app.use(cors({
  origin: function(origin, callback) {
    let allowed = true

    // permite mobile app
    if (!origin) allowed = true

    if (!allowedOrigins.includes(origin)) allowed = false
    
    callback(null, allowed)
  }
}))



app.get('/', (req, res) => {
  return res.json([
    { name: 'Ido'},
    { name: 'Melo'},
  ]) //retorna em formato json
})

const port = process.env.PORT || 8080

app.listen(port, () => console.log('listening on port ' + port))

