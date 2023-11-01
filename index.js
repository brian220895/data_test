
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
// require('./config/data_connection.js');
// import initRoutes from './routes'
dotenv.config();
var app = express()

var port=process.env.PORT ||3001



app.use(cors({
    origin:'*',
    methods:['GET, POST, OPTIONS, PUT, PATCH, DELETE']

}));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// initRoutes(app)

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })

