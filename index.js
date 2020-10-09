import express from 'express'
import config from './config.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import imageRoute from './routes/imageRoute.js'
import userRoute from './routes/userRoute.js'
import uploadRoute from './routes/uploadRoute.js'
import {createRequire} from 'module'
import bodyParser from 'body-parser'
const require = createRequire( import.meta.url )
const path = require( 'path' )
const __dirname = path.resolve()
const MongoDbUri = config.MONGODB_URL
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
mongoose.connect( MongoDbUri || 'mongodb://localhost/slp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}, () => {
} ).catch( error => console.log( error.reason ) )

mongoose.connection.on('connected', () => {
  console.log('Mongose is connected!', )
})

app.use( bodyParser.json() )
app.use( '/api/uploads', uploadRoute )
app.use( '/api/users', userRoute )
app.use( '/api/images', imageRoute )
app.use( '/uploads', express.static( path.join( __dirname, '/uploads' ) ) )

if (process.env.NODE_ENV === 'production') {
  app.use( express.static( 'client/build' ) )
  app.get( '*', (req, res) => {
    res.sendFile( path.resolve( __dirname, 'client', 'build', 'index.html' ) )
  } )
}

app.listen(process.env.PORT || PORT, console.log( `Server started on port http://localhost:${PORT}, ${process.env.NODE_ENV}` ))