import express, { Application } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import contactRoutes from './routes/contactRoutes';



dotenv.config()


const app: Application = express()


app.use(express.json())


app.use(cors())


app.get('/', (_req, res) => {
  res.send('Servidor backend funcionando correctamente 🚀')
})

app.use('/contacts', contactRoutes); 

const PORT = process.env.PORT || 3001

// Levanta el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
