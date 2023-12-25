const express = require('express')
const cors = require('cors')
const path = require('node:path')
const app = express()
const port = process.env.PORT || 8080

app.disable('x-powered-by')

app.use(express.static('./public'))
app.use(express.json())
app.use(cors({
  origin: (origin, callback) => {
    const AceptedOrigins = [
      'http://localhost:3000',
      'http://localhost:8080',
      'https://ep-weathered-violet-79879941.ap-southeast-1.aws.neon.fl0.io/'
    ]
    if (AceptedOrigins.includes(origin)) {
      return callback(null, true)
    }
    if (!origin) {
      return callback(null, true)
    }
    return callback(new Error(`No hay cors`))
  }
}))

app.get('/', (req, res) => {
  res.redirect('/')
})

app.get('/SubirArchivo', (req, res) => {
  res.sendFile(path.resolve('./public/SubirArchivo.html'))
})


app.post('/SubirArchivo', (req, res) => {
  const data = req.body

  if (data) {
    // 422 Unprocesable Entity
    // en base de datos
    // req.body deberíamos guardar en bbdd
    res.status(201).json(data)
  } else {
    res.status(400).send(`Eror en la info `)
  }
})

// la última a la que va a llegar
app.use((req, res) => {
  res.status(404).send('<h1>Error 404: Page not found</h1>')
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
