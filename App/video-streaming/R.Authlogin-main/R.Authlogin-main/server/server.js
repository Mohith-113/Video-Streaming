const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const user = require('./routes/user');
const mve = require('./model/SchemaAddNve')


//initilze express.js
const app = express();
//to receive json data
app.use(express.json());
//initilze cors 
app.use(cors({
    origin: '*'
}));
 
//connect mongobd
mongoose.connect('mongodb+srv://Mohith-Anabathula:Mohith-Anabathula@cluster0.2z0nmuv.mongodb.net/?retryWrites=true&w=majority').then(
    console.log("Db is connected")
);

//auth api's
app.use('/api/auth', auth);
//users api's
app.use('/api/user', user);
//Mve api's
app.post('/api/addmves', (req, res) => {
    const { title, flexiUrl, posterUrl, description, videoUrl, language} = req.body;
    const newMovie = new mve({
      title,
      flexiUrl,
      posterUrl,
      description,
      videoUrl,
      language
    });
  
    newMovie.save()
      .then((result) => {
        res.status(201).json(result);
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
        console.log(error)
      });
  });

//run server
app.listen(5000, () => console.log('server is running'));