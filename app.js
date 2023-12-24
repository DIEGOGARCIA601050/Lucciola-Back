const cors = require('cors')
const { resolve } = require('node:path')
const express = require('express');
const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.static('public'))
app.use(cors({
    origin: (origin, callback) => {
      const AceptedOrigins = [
        'https://ep-weathered-violet-79879941.ap-southeast-1.aws.neon.fl0.io/',
        'http://192.168.1.73:3000/'
      ]
      if (AceptedOrigins.includes(origin)) {
        return callback(null, true)
      }
      if (!origin) {
        return callback(null, true)
      }
      return callback(new Error('No hay cors'))
    }
  }))

app.get('/', (req, res) => {
    res.redirect('/');
})

app.get('/SubirArchivo', (req, res) => {
    res.sendFile(resolve('./public/SubirArchivo.html'))
  })

  app.post('/', (req, res) => {
    const data = req.body
    console.log(data);
    res.json({
        "error": "none",
        "message": "Received"
    })
  })

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})