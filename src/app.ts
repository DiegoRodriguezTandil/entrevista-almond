import express, { Application } from 'express'
import dotenv from 'dotenv'
import propertyRoutes from './routes/property.routes'

dotenv.config()

const app: Application = express()

app.use(express.json())
app.use('/api', propertyRoutes)

export default app