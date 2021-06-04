var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

app.listen(3000);

//Connect to MonggoDB
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://admin:H2Xl8aDDYFdM3reU@cluster0.rkccm.mongodb.net/AppRaoVat?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        console.log("Database connected");
    })
    .catch((error) => {
        console.log("Error connecting to database: " + error.message);
    });
require("./Routes/FileManager")(app);