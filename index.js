
const express =require('express')
const cors =require('cors')
const dotenv =require('dotenv')
require('./data_connection');
const initRoutes=require('./routes')
dotenv.config();
var app = express()

var port=process.env.PORT ||3001



app.use(cors({
    origin:'*',
    methods:['GET, POST, OPTIONS, PUT, PATCH, DELETE']

}));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

initRoutes(app)
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })

