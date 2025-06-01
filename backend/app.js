const express = require('express')
const app = express()
require('dotenv').config();
const port = process.env.PORT

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
  });

app.listen(port,()=>{
    console.log("Server started");
    
})
  