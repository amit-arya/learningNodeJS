const http = require("http");

//const routes = require('./routes');

const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add Product</button></form>'
  );
});

app.use('/product',(req, res, next)=> {
    console.log(req.body);
    res.redirect('/');
})
app.use("/", (req, res, next) => {
  res.send("<h1>Hello from Express</h1>"); // default header is text/html
  // either write next or send a response
});

const server = http.createServer(app);

server.listen(4000);
