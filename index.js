let express = require("express");
let app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

dotenv.config({ path: '.env' });

// mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true})
//         .then(()=>{
//             console.log("DM connected successfully....")
//         });

const URI = "mongodb+srv://ravi_sahu:Sahu45a@cluster0.4upeo.mongodb.net/myProfile?retryWrites=true&w=majority";

mongoose.connect(URI, {
   useCreateIndex: true, 
   useFindAndModify: false, 
   useNewUrlParser: true, 
   useUnifiedTopology: true 
}, err => {
   if(err) throw err;
   console.log('Connected to MongoDB!!!')
})

app.use(express.json());

app.use("/auth", authRoute);
app.use("/user", userRoute)

app.listen(8800, ()=>{
    console.log("server is started at 8080")
});