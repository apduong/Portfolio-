//creating the connection
const dotenv = require('dotenv');
const express = require("express")
const mongoose = require("mongoose")
const Router = require("./routes")
<<<<<<< HEAD
=======
const username = "<Alex>";
const password = "<gsqGEhkcuPj7Bwmo>";
const cluster = "<New>";
const dbname = "";

>>>>>>> 74a734124885e7f200acaf9d247b4fd7a1e1515f
const app = express();
const MONGODB_URL = "mongodb+srv://Alex:gsqGEhkcuPj7Bwmo@new.dfruhr6.mongodb.net/?retryWrites=true&w=majority";
dotenv.config();

mongoose.set('strictQuery', false);

app.use(express.json());
//connecting to mongoDBB db 
mongoose.connect(
<<<<<<< HEAD
  MONGODB_URL,
  async(err)=>{
      if(err) throw err;
      console.log("conncted to db")
=======
  `mongodb+srv://${Alex}:${gsqGEhkcuPj7Bwmo}@${New}.mongodb.net/${}?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
>>>>>>> 74a734124885e7f200acaf9d247b4fd7a1e1515f
  }
)
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});

