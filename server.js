//creating the connection
const dotenv = require('dotenv');
const express = require("express")
const mongoose = require("mongoose")
const Router = require("./routes")
const app = express();
const MONGODB_URL = "mongodb+srv://Alex:gsqGEhkcuPj7Bwmo@new.dfruhr6.mongodb.net/?retryWrites=true&w=majority";
dotenv.config();

mongoose.set('strictQuery', false);

app.use(express.json());
//connecting to mongoDBB db 
mongoose.connect(
  MONGODB_URL,
  async(err)=>{
      if(err) throw err;
      console.log("conncted to db")
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

