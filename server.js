//creating the connection
const express = require("express")
const mongoose = require("mongoose")
const Router = require("./routes")
const username = "<Alex>";
const password = "<gsqGEhkcuPj7Bwmo>";
const cluster = "<New>";
const dbname = "";

const app = express();

app.use(express.json());
//connecting to mongoDBB db 
mongoose.connect(
  `mongodb+srv://${Alex}:${gsqGEhkcuPj7Bwmo}@${New}.mongodb.net/${}?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});

