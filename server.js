const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'build')));
  
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname,  "build", "index.html"));
  });

app.listen(process.env.PORT || 8080);