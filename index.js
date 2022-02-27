let express = require("express");
let app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

dotenv.config({ path: '.env' });

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true})
mongoose.connection.once('open', function(){
    console.log('Conection has been made!');
  }).on('error', function(error){
      console.log('Error is: ', error);
  });

app.use(express.json());

app.use("/auth", authRoute);
app.use("/user", userRoute)

app.listen(8800, ()=>{
    console.log("server is started at 8080")
});