const express = require('express') 
const cors = require('cors');
const morgan = require('morgan')
const app = express() 
const path = require('path')


// Help connect to MongoDB database 
const mongoose = require('mongoose'); 

require('dotenv').config();

// Set Port 
const port = process.env.PORT || 5000;


app.use(cors());

// parse form data
app.use(express.urlencoded({extended: false}))

// Parse Json 
app.use(express.json()) 

// set the view engine to ejs
app.set('view engine', 'ejs'); 


// Connection String to express atlas and Environment variable.
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { 
  
    useNewUrlParser: true, useUnifiedTopology: true 

  },err => { 
    if(err){
        console.log('Error un able Connected to MongoDB!!!')
    }
    else{
        console.log('Connected to MongoDB!!!')
    }
    }
)

const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB database connection established successfully"); 
})


// log all requests to access.log
app.use(morgan('dev'))

// const user = require('./routes/data') 

// Get CSS here 
app.use('/assets/css/:id', (req, res, next) => {
  res.sendFile(path.join(__dirname+'/assets/css/main.css'))
});

// Get JS here 
app.use('/assets/js/:id', (req, res, next) => {
  res.sendFile(path.join(__dirname+'/assets/js/main.js'))
});

// Get images
app.use('/assets/images/:id', (req, res) => {
  res.sendFile(path.join(__dirname+'/assets/imgs/'+req.params.id))
});

// Get videos
app.use('/assets/video/:id', (req, res) => {
  res.sendFile(path.join(__dirname+'/assets/videos/'+req.params.id))
});

// Get documents
app.use('/assets/documents/:id', (req, res) => {
  res.sendFile(path.join(__dirname+'/assets/documents/'+req.params.id))
});

const data = require('./routes/data') 

app.use('/api/v1/data', data)
 
app.listen(port, console.log('listening on port '+ process.env.DEV_PORT)) 